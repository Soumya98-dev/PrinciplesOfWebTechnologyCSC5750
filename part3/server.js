const express = require('express');
const mysql = require('mysql2');
const ejs = require('ejs');
const path = require('path');

const app = express();

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'GDbirlaboy@98',
  database: 'Proj1'
});

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

//handling get request for 'index' page
app.get('/', (req, res) => {
  // res.send('Hello, this is the root path!');
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle POST request for form submission
app.post('/submit', (req, res) => {
  const { id, firstName, lastName, projectTitle, email, phone, timeSlot } = req.body;

  // Insert form data into the database
  const sql = 'INSERT INTO students (id, first_name, last_name, project_title, email, phone, time_slot_id) VALUES (?, ?, ?, ?, ?, ?, ?)';
  const values = [id, firstName, lastName, projectTitle, email, phone, timeSlot];

  connection.query(sql, values, (err, result) => {
    if (err) {
      console.error('Database error:', err);
      res.status(500).send('Internal Server Error');
      return;
    }
    // res.send('Form submitted successfully!');
    res.redirect('/students');
  });
});

// app.get('/students', (req, res) => {
//   connection.query('SELECT * FROM students', (err, results) => {
//     if (err) {
//       console.error('Database error:', err);
//       res.status(500).send('Internal Server Error');
//       return;
//     }
//     console.log('Query results:', results);
//     // Render the 'students.ejs' template with the data
//     res.render('students.ejs', { students: results });
//   });
// });

app.get('/students', (req, res) => {
  // const query = `
  //   SELECT students.id, students.first_name, students.last_name, students.project_title, 
  //          students.email, students.phone, time_slots.date, time_slots.start_time, time_slots.end_time
  //   FROM students
  //   JOIN time_slots ON students.time_slot_id = time_slots.id;
  // `;

  const query = `SELECT students.id, students.first_name, students.last_name, students.project_title, 
       students.email, students.phone, 
       DATE_FORMAT(time_slots.date, '%Y-%m-%d') as formatted_date, 
       DATE_FORMAT(time_slots.start_time, '%H:%i') as formatted_start_time, 
       DATE_FORMAT(time_slots.end_time, '%H:%i') as formatted_end_time
      FROM students
      JOIN time_slots ON students.time_slot_id = time_slots.id;
`;

  connection.query(query, (err, results) => {
    if (err) {
      console.error('Database error:', err);
      res.status(500).send('Internal Server Error');
      return;
    }

    console.log('Query results:', results);
    // Render the 'students.ejs' template with the data
    res.render('students.ejs', { students: results });
  });
});

app.get('/get-time-slots', (req, res) => {
  // Query the database to get available time slots
  connection.query('SELECT * FROM time_slots WHERE total_seats > 0', (err, results) => {
    if (err) {
      console.error('Database error:', err);
      res.status(500).json({ error: 'Internal Server Error' });
      return;
    }

    res.json(results);
  });
});


const port = 3000;
app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

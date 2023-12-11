use proj1;

CREATE TABLE students (
  id INT(8) AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(255) NOT NULL,
  last_name VARCHAR(255) NOT NULL,
  project_title VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(15) NOT NULL,
  time_slot_id INT NOT NULL,
  FOREIGN KEY (time_slot_id) REFERENCES time_slots(id)
);


select * from students;
desc students;

CREATE TABLE time_slots (
  id INT AUTO_INCREMENT PRIMARY KEY,
  date DATE NOT NULL,
  start_time TIME NOT NULL,
  end_time TIME NOT NULL,
  total_seats INT NOT NULL,
  booked_seats INT NOT NULL
);

INSERT INTO time_slots (date, start_time, end_time, total_seats, booked_seats) VALUES
('2070-04-19', '18:00:00', '19:00:00', 6, 6),
('2070-04-19', '19:00:00', '20:00:00', 5, 5),
('2070-04-19', '20:00:00', '21:00:00', 3, 3),
('2070-04-19', '18:00:00', '19:00:00', 2, 2),
('2070-04-19', '19:00:00', '20:00:00', 4, 4),
('2070-04-19', '20:00:00', '21:00:00', 0, 0);

select * from time_slots;
desc time_slots;

ALTER TABLE students
MODIFY COLUMN id INT(8) UNSIGNED ZEROFILL AUTO_INCREMENT;


DELETE FROM students WHERE id > 0;
TRUNCATE TABLE students;

-- SELECT students.id, students.first_name, students.last_name, students.project_title, 
--        students.email, students.phone, time_slots.date, time_slots.start_time, time_slots.end_time
-- FROM students
-- JOIN time_slots ON students.time_slot_id = time_slots.id;

-- JOINING THE students table & time_slots table 
SELECT students.id, students.first_name, students.last_name, students.project_title, 
       students.email, students.phone, 
       DATE_FORMAT(time_slots.date, '%Y-%m-%d') as formatted_date, 
       DATE_FORMAT(time_slots.start_time, '%H:%i') as formatted_start_time, 
       DATE_FORMAT(time_slots.end_time, '%H:%i') as formatted_end_time
FROM students
JOIN time_slots ON students.time_slot_id = time_slots.id;



DROP TABLE if EXISTS assignment_submissions;
DROP TABLE if EXISTS assignments;


CREATE TABLE assignments(
  id SERIAL PRIMARY KEY,
  "name" VARCHAR(50),
  content VARCHAR(500),
  day INT,
  chapter INT,
  duration INT  
);

CREATE TABLE assignment_submissions(
  id SERIAL PRIMARY KEY,
  assignment_id INT,
  CONSTRAINT fk_assignments
      FOREIGN KEY(assignment_id) 
	  REFERENCES assignments(id) ON DELETE CASCADE,
  student_id INT,
  CONSTRAINT fk_students
      FOREIGN KEY(student_id) 
	  REFERENCES students(id) ON DELETE CASCADE,
  duration INT,
  submission_date DATE
);
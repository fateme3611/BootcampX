SELECT "name", phone, email
FROM students
WHERE github IS NULL AND end_date IS NOT NULL;
SELECT id, "name", cohort_id
FROM students
WHERE phone is NULL OR email is NULL;

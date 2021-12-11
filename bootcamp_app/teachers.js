const { Pool } = require('pg');

const pool = new Pool({
  user: 'vagrant',
  password: '',
  host: '192.168.20.200',
  database: 'bootcampx'
});
pool.query(`
SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
FROM teachers
JOIN assistance_requests ON teacher_id = teachers.id
JOIN students ON student_id = students.id
JOIN cohorts ON cohort_id = cohorts.id
WHERE cohorts.name = '${process.argv[2] || 'JUL02'}'
ORDER BY teacher;
`)
const cohortName = process.argv[2];
// Store all potentially malicious values in an array.
const values = [cohortName];

pool.query(queryString, values)
  .then(res => {
    res.rows.forEach(row => {
      console.log(`${row.cohort}: ${row.teacher}`);
    })
  });
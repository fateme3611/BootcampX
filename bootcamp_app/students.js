const { Pool } = require('pg');

const pool = new Pool({
    user: 'vagrant',
    password: '',
    host: '192.168.20.200',
    database: 'bootcampx'
});
pool.query(`
SELECT id, name, cohort_id
FROM students
join coherts on coherts.cohort_id=students.cohort_id
WHERE cohorts.name LIKE '%${process.argv[2]}%'

LIMIT 5;
`)
    .then(res => {
        res.rows.forEach(user => {
          console.log(`${user.name} has an id of ${user.id} and was in the ${user.cohort_id} cohort`);
        })
      });
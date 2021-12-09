SELECT cohorts.name, avg(completed_at - started_at) as average_assistance_time
FROM assistance_requests
JOIN students ON students.id = assistance_requests.student_id
GROUP BY name having max(avg(completed_at - started_at))
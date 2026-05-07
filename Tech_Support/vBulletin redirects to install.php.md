
When vBulletin boots up, it will check for the existence of the route, cache, and cacheevent tables. If it doesn't find these tables, it will say it cannot connect to a vbulletin database and redirect to /core/install.php.

If the database connection information is correct, then verify the existence of these tables: routenew, cache, and cacheevent. The cache and cacheevent tables can be truncated before a backup and excluded because they are empty in some situations.
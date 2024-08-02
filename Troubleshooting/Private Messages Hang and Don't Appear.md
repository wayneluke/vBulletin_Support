After upgrading to vBulletin 5.X or 6.x the private messages of some users may hang. This appears to occur when the character_set_client is set to utf8mb4 but the database is using a latin1 character set.

Converting the database to utf8mb4 with the provided tools should resolve the issue. If it doesn't resolve the issue, then we can forward a database to the developers.
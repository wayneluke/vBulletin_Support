mysqldump -u username -p --add-drop-table --add-locks --extended-insert --quick databasename > databasename.sql
tar czf databasename.sql.tar.gz databasename.sql 

#database 
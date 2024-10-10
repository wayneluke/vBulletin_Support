```sh
mysqldump -u username -p --add-drop-table --add-locks --extended-insert --quick dbname > dbname.sql
tar czf dbname_YYYYMMDD.sql.gz dbname.sql
rm dbname.sql
/pathto/php81/bin/php myisamfix.php --dofix
/pathto/php81/bin/php utf8convert.phar --connectionCharset=latin1 --charset=utf8mb4
```
``

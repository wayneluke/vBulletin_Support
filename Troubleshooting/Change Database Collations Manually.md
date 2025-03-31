> Note, this procedure is not recommended. Instead, you should use the [[database tools}} provided in your download package.Use these queries with extreme caution. They may break data in the fields.

## Fields

This query will generate the queries needed to convert all fields to latin1. You can change the character set and collation in the query.

```sql  
SELECT DISTINCT  
CONCAT("ALTER TABLE `", C.TABLE_NAME, "` CHANGE `", C.COLUMN_NAME, "` `", C.COLUMN_NAME, "` ", C.COLUMN_TYPE, " CHARACTER SET latin1 COLLATE latin1_swedish_ci;") as queries  
FROM INFORMATION_SCHEMA.COLUMNS as C  
LEFT JOIN INFORMATION_SCHEMA.TABLES as T  
ON C.TABLE_NAME = T.TABLE_NAME  
WHERE C.COLLATION_NAME is not null  
AND C.TABLE_SCHEMA='yourDatabaseName'  
AND T.TABLE_TYPE="BASE TABLE"  
```

## Tables

This query will generate a series of queries to convert the individual tables:

```sql
SELECT DISTINCT CONCAT("ALTER TABLE `", TABLE_NAME,"` CONVERT TO CHARACTER SET latin1 COLLATE latin1_swedish_ci;") as queries
FROM INFORMATION_SCHEMA.TABLES
WHERE TABLE_SCHEMA='yourDatabaseName'
AND TABLE_TYPE="BASE TABLE"
```

## Using The Queries

Export the list of queries into an SQL file. Then you can use the MySQL source command to run the queries on the file against your current database.

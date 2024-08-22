In order to install and use vBulletin, you must create a database that will contain its data. vBulletin allows you to create the database in MySQL or MariaDB.

## Using the Command Line

If you have root access to your web server, you can set up a new database for vBulletin to use via the MySQL command line.

1. You will need to log in to your server via SSH or Telnet as the root user, or some other user with permission to control MySQL at the root level.

2. Next, you will need to start the MySQL command line tool using this command: `/usr/local/mysql/bin/mysql -u root -p`  
  
on Windows it willl be similar to:  
`c:\mysql\bin\mysql -u root -p`  
  
The system will then ask you to provide the MySQL root password to continue.

3. When you have completed the login to MySQL you will see a `mysql>` command prompt. To see the list of databases that already exist, type the following:  
`SHOW DATABASES;`  
  
You will then be given a list of the databases that already exist. The name you choose for your new database must be unique, so ensure that the name you want to give to your new database is not already in use.

4. After you have decided upon a name, you can run the query to create the new database. For this example, we will call the database example_database. Type the following, replacing the name of the database with the name you have chosen: `CREATE DATABASE example_database;`

5. Having created the database, we will now create a MySQL user account with permission to access the new database. Doing this is a security precaution, as it's never a good idea to have PHP scripts talking to MySQL with root privileges.

In this example, we will name our new user example_user and give the account a password of p4ssw0rd. Replace those values as appropriate when you type the following:  
  
`GRANT ALL ON example_database.* TO example_user@localhost IDENTIFIED BY 'p4ssw0rd';`

Your new database and new user are ready to be used. Based on the example names given in this document, you should enter the following values into config.php:

$config['Database']['dbname'] = 'example_database';
$config['MasterServer']['servername'] = 'localhost';
$config['MasterServer']['username'] = 'example_user';
$config['MasterServer']['password'] = 'p4ssw0rd';

## Other Methods

- [phpMyAdmin](https://www.geeksforgeeks.org/how-to-create-a-new-database-in-phpmyadmin/)
- [cPanel](https://support.cpanel.net/hc/en-us/articles/360057550753-How-to-create-a-database-and-database-user-in-cPanel)
- [Plesk](https://www.plesk.com/kb/support/how-to-create-a-database-in-plesk/)

If your hosting provider does not provide one of these methods, you will need to contact them for assistance.
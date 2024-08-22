> Note: This is not applicable to vBulletin Cloud.

In order to back up your database via SSH or Telnet you will require 2 things:  
  
  1. [SSH](https://www.vbulletin.com/docs/html/main/what_is_ssh) access to your site. You will need to check with your hosting company to see if this is available.  
  2. An SSH/Telnet Client, such as PuTTy.  
  
Open your SSH/Telnet client and log into your website. The command line prompt you will see will vary by OS.  
For most hosting companies, this will bring you into the FTP root folder.  
  
Type in the following to create a backup in the current directory:  
  
`mysqldump --opt -Q -u **dbusername** -p **databasename** > backupname.sql` 
  
Or to create a backup in a separate directory (signified by /path/to/) type:  
  
`mysqldump --opt -Q -u **dbusername** -p **databasename** > /path/to/backupname.sql`
  
You will be prompted for the database password. Enter it and the database will backup.  
  
If your hosting company has you on a remote MySQL server, such as mysql.yourhost.com, you will need to add the servername to the command line. The servername will be the same as in your config.php. The command line will be:  
  
Current directory:  
  
`mysqldump --opt -Q -h **servername** -u **dbusername** -p **databasename** > backupname.sql` 
  
Separate directory:  
  
`mysqldump --opt -Q -h **servername** -u **dbusername** -p **databasename** > /path/to/backupname.sql`
  
You can then, if you wish, download the backup to your home computer.

## Other Methods

[cPanel](https://cpanel.net/blog/tips-and-tricks/how-to-back-up-and-restore-mysql-databases-in-cpanel/)
[Plesk](https://docs.plesk.com/en-US/obsidian/customer-guide/website-databases/backing-up-and-restoring-databases.74647/)
[phpMyAdmin](https://docs.phpmyadmin.net/en/latest/faq.html?highlight=backup#how-can-i-backup-my-database-or-table)

If your hosting provider doesn't offer one of these methods then you will need to ask them for guidance.

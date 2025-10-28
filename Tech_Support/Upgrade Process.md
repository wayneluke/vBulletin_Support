
An attempt to standardize the professional upgrade process. During an upgrade there are several steps that need to be done. 

1. Backup Existing Files.
2. Backup Database.
3. Upload new files.
4. Run the upgrade scripts.

## Backup Existing Files

Instead of deleting the customer's pre-existing files, I suggest that they are moved to a folder name `backup` on the server. Ideally, this directory should be placed outside the `public_html` directory. However, you do not have access to higher directories via your SFTP access, then you can place is within the public_html directory. If you have command line access, this process can be streamlined using standard commands.

If the backup is in within the `public_html` directory, we need to prevent access from a web browser. You can do this with the following files:

- index.html - a blank file of zero bytes.
- .htaccess - It should contain the following contents:
```
Require all denied
```

>  Optionally, you can move file attachments and custom avatars to the file system before backing up the files. This will reduce the size of the database significantly and usually makes backups easier to handle.
## Backup Database

### Preparing the Database

1. Turn off vBulletin - Before making a database backup, you need need to turn off vBulletin. You can do this via tools.php or from within the AdminCP if it is accessible.
2. Manage Database - Over time, databases can gather a lot of cruft that isn't needed going forward and can cause issues with backups. 
	1. Delete all tables with the word `aggregate` in their name. These tables are the result of a vBulletin 3.X bug from over a decade ago and contain no data. They just take up space.
	2. Truncate the following tables if they exist: cpsession, cache, cacheevent, session. 
	3. Optionally truncate the words and all tables starting with search. Doing so requires rebuilding the search index after upgrade.


### Backing up the database

If the database is small enough, you may be able to create a backup using PHPMyAdmin or Adminer. However, most backups of this nature will time out before they complete. It is suggested to create a backup using the tools provided by cPanel or Plesk.

Using cPanel, you can create a gzip backup of a database by clicking on its name in the provided backup tool. Databases are listed in the Partial Backups section. For more information see: https://docs.cpanel.net/cpanel/files/backup-for-cpanel/

Plesk allows you to export a database in its databases section. This will provide the SQL backup for you. For more information see: https://docs.plesk.com/en-US/obsidian/customer-guide/website-databases/exporting-and-importing-database-dumps.69538/

If neither of these methods are available, you can request command line access and create a database using `mysqldump` or the customer can create the database.

### Upload the Database Backup

After creating the database backup, a copy should be added to the `_backup` directory.
## Upload New Files

If you are upgrading a site from vBulletin 3 or 4, then you should delete all files from the installation directory except the backup, attachments, and user images ( primarily avatars and signature pictures)

Once the directory is cleared, upload the new files via SFTP or SCP.

> Note: If the site is a cpanel site, you can expedite the upload by creating a ZIP file of the contents of vBulletin's upload directory and uploading that via cPanel's File Manager. Once it is uploaded, you can decompress it by right-clicking it in the cPanel File Manager.

After uploading the files, make sure to update the /config.php.bkp files and the /core/includes/config.php.new files as necessary to connect to the core system and database.
## Run the Upgrade Scripts


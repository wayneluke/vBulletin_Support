
The best way to secure your vBulletin 5.7.5 site is to upgrade to vBulletin 6.1.X.

If that is not possible, for any reason, then follow these steps:

- Make sure you're using the latest .htaccess file included in the vBulletin 5.7.5 download package.
- Make sure that you're using the latest `core/includes/config.php` file included in the 5.75 download package.
- Make sure that you're using the latest `core/includes/md5_sums_vbulletin.php' file.
- In the AdminCP go to Maintenance → Diagnostics.
	- Run the Suspect File Version diagnostic.
	- Delete all files listed as "File not recognized as part of vBulletin" unless you know you created the file.
	- Replace all files listed as "File does not contain expected contents"
	- Replace all files listed as "File version mismatch"
	- Review all directories listed as "Directory not recognized as part of vBulletin"
	- Review all files listed as "File has multiple extensions"
- Make sure you have the latest patches installed. 
- Set all PHP files so they are read only. (`chmod -R 444 *.php`).
- Add the following line to the bottom of your php.ini file:
	- `disable_functions =exec,passthru,shell_exec,system,proc_open,popen`
- Restart your vBulletin Web Server.

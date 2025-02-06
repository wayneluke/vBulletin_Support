There are four steps to securing your site. If you don't do them all or you do them in the wrong order than you're still susceptible to being attacked again.

Close the hole... 
This has three subparts in this instance.
	1. Delete your install folder
	2. Review your admin users and delete any that don't belong. Don't ban them. Don't make them regular users. Delete them.
	3. Close access to your AdminCP using .htaccess. Use either user authorization with a different username and password or IP address restrictions.

Fill the Hole... 
There are seven subparts in this instance.
	1. Review your files for changes. You can do this under Maintenance -> Diagnostics.
	2. Delete any Suspect Files.
	3. Replace any files marked as "Does not contain expected contents"
	4. Scan your plugins for malicious code (exec, base64, system, pass_thru, iframe are all suspect keywords). Delete any you find.
	5. Repair any templates. Any templates that you don't have notes on changing, you need to revert. If you're using a custom style, it is best to delete your existing style and reimport from a fresh download.
	6. Update your Addon Products.
	7. Rebuild your datastores. You can use tools.php in the "do not upload" folder to do this. Upload it to your admincp directory, delete when done.

Secure the Hole
Parts of this were done by closing the hole but there are still things to do here.
	1. Keep notes of all changes you make to the system - what templates and phrases you change, what files belong to which addons, what plugins do the addons install.
	2. Consider using a separate Super Admin who has access to admin logs in the AdminCP. There should be only one Super Admin.
	3. Create a lower permission Administrator for every day use.
	4. Review your permissions in the system.
	5. Block off access to the includes, modcp, packages and vb folders via .htaccess. Deny All can work here, unless you use the ModCP. You need user authorization there.
	6. Move your attachments outside the forum root directory.
	7. Create a complete backup of your site. Make database backups weekly.

Vigilance
You need to keep active on the security of the site.
	1. Give out the fewest permissions necessary for anyone to do their job
	2. Make sure your hosting provider updates the software.
	3. Update to the latest vBulletin when it is released.
	4. Make sure your addons are always up to date.

#vbulletin4

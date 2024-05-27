After downloading your backup files from the vBulletin Servers, there are several steps needed to configure your site for self-hosting.

## Restore Database and Files

- Import the SQL into your database.
- create a new directory in your `%vbulletin_root%` named attachments and set its permissions to 0777.
- Unzip your attachments into this directory.
- Create a new directory in the `/core/` directory named customavatars and set its permissions to 0777.
- Unzip your customavatars into this directory.
- Unzip your smilies into `/core/images/smilies`.
- If you use images for User Ranks, copy those images into `/core/images/ranks`.

## Update URL

Use tools.php to update the URL of your site to its new address, if necessary.

## Administrator Permissions

### Create a Super Admin

- Add your admin user to the Super Admins list in your `/core/includes/config.php` file.
- Edit your Admin User Permissions under Usergroups → Adminstrator Permissions. Set all permissions to Yes.

### Delete ibadmin user

This user was created for technical support reasons on vBulletin Cloud. You can delete them after promoting your own administrator user to Super Admin. To do this log into the AdminCP and then go to Users → Search for Users. Search for ibadmin and select "Delete User" from the Quick Links drop down at the top of the page.

## Restore external file access.

When using vBulletin Cloud, attachments and custom avatars will be stored in a separate directory. These are usually denoted with a path like '/var/www/vbsaas/files/attachments/0/0/0/0/9/2'. Each Cloud site has their own custom directory.

In order to view your attachments and custom avatars, you will need to update the paths for these items. To do this, you need to place your site in <a href="https://www.vbulletin.com/go/vb5debug">Debug Mode</a>.
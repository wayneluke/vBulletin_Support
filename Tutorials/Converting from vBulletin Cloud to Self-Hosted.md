After downloading your backup files from the vBulletin Servers, there are several steps needed to configure your site for self-hosting.

## Restore Database and Files

- Import the SQL into your database.
- create a new directory in your `%vbulletin_root` named attachments and set its permissions to 0777.
- Unzip your attachments into this directory.
- Create a new directory in the `/core/` directory named customavatars and set its permissions to 0777.
- Unzip your customavatars into this directory.

## Update URL

Use tools.php to update the URL of your site to its new address, if necessary.

## Administrator Permissions

### Create a Super Admin

- Add your admin user to the Super Admins list in your `/core/includes/config.php` file.
- Edit your Admin User Permissions under Usergroups → Adminstrator Permissions. Set all permissions to Yes.

## Delete ibadmin user.
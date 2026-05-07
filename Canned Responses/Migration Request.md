
Hello,  
  
Since you did not receive the other ticket, please see below to get started:  
  
  
Thank you for your interest in migrating to the vBulletin Cloud product. To get started we need some information from you as well as access to a copy of your database and ONLY the below noted files via SFTP/FTP or, if SFTP/FTP is unavailable, a link to the relevant ZIP files hosted on your server/a file sharing site.  
  
The first step is to close your forum to new posts/registrations via AdminCP. The reason for this is simple - we can't do partial imports, only a FULL database import. If you don't close your forum before backing up, any new threads, posts or new registrations will NOT be moved over to your Cloud site as they will not be included in the backup you give us.  
  
**If your attachments, custom avatars and custom smilies are stored in the database, these should be moved into the file system before backing up you database and also be made available via SFTP/FTP.**  
  
The file(s) should be named as follows:  
  
Database: {sitename}_{CustomerNumber}_{YEAR}{MONTH}{DAY}.extension  
  
If your attachments and avatars are stored in the filesystem, we would also need these files. Additionally, if you have added any custom smilies and post icons, please provide these as below*:  
  
Attachments: {sitename}_{CustomerNumber}_attachments_{YEAR}{MONTH}{DAY}.extension  
Avatars: {sitename}_{CustomerNumber}_avatars_{YEAR}{MONTH}{DAY}.extension  
Post Icons: {sitename}_{CustomerNumber}_posticons_{YEAR}{MONTH}{DAY}.extension  
Signature Pictures: {sitename}_{CustomerNumber}_signatures_{YEAR}{MONTH}{DAY}.extension  
Smilies: {sitename}_{CustomerNumber}_smilies_{YEAR}{MONTH}{DAY}.extension  
  
*If you only use the default smilies and post icons, these are NOT required.  
  
We accept backups in ZIP and GZIP formats. The database ZIP/GZIP file should contain a .sql file and should not be double compressed. If your attachments are stored in the database and your database is larger than 1 Gigabyte in size, the attachments should be moved to the file system.  
  
The additional information that we need includes the following:  
  
1) User ID of the Admin User on your existing vBulletin site. This is the *user number* (NOT the user name) and is needed for the importer to operate properly.  
  
2) Any prefix the vBulletin tables have in your database  
  
3) Whether or not you've create style customizations on your cloud site already.  
  
Please note that custom styles that are not Style Variable and CSS changes ONLY (i.e. third party styles with custom images) and plugins will not be migrated. Custom styles and plugins are not compatible with vBulletin Cloud.

Hello,  
  
Thank you for contacting vBulletin Support. They attachments and customavatars are optional but based on your vBulletin Configuration.  
  
If you do not know where these items are stored, then the most likely scenario is that they are stored in your database. However, you can verify this in your vBulletin AdminCP.  
  
In your AdminCP go to Attachments → Attachment Storage type, it it says "Attachments are currently stored in the file system" then you should provide a ZIP file of the path listed underneath. You can create this in cPanel's File Manager, right-clicking on the Directory name and choosing "Compress" off the context menu.  
  
Custom Avatars are similar. In your AdminCP go to Settings → User Picture Storage Type. It will tell you if custom avatars are stored in the file system or database. if in the file system, we need a ZIP file of the directory created from cPanel's File Manager. The default path will be located at /core/customavatars in your vBulletin installation.  
  
Custom Images for Post Icons and Smilies are stored in /core/images/. We need a ZIP file of each of those directories.  
  
Signature Pictures in vBulletin are equivalent to Attachments and will be included in the ZIP file of Attachments.
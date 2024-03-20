[note]It is recommended to always perform a test upgrade before upgrading your live site. This will limit the disruption caused for your end users.[/note]  
  
Now that you've been using vBulletin Connect for a while, a new version has become available and you're thinking "How do I upgrade this?" That is what this tutorial is for. We will step you through upgrading vBulletin and making sure that your site has as little downtime as possible.  
  
Before starting an upgrade make sure your server meets the [vBulletin System Requirements](https://forum.vbulletin.com/node/4387853).  
  
**Tools needed to upgrade vBulletin Connect on your server**

- A text editor that understands Linux linefeeds. Suggested editors are [Atom](https://atom.io/), [Visual Studio Code](https://code.visualstudio.com/), and [Notepad++](https://notepad-plus-plus.org/).
- ZIP Management Utility.
- SFTP Client. We suggest [Filezilla](https://filezilla-project.org/).

  
A moderate knowledge of [HTML](https://www.w3schools.com/html/default.asp) and [CSS](https://www.w3schools.com/css/default.asp) will be beneficial in customizing your site but is not necessary for basic customizations.  
  
**Terms**  
  
A couple of definitions before we get started:

- %yourdomain% should be replace with the domain name you are using for your site.
- %forumroot% refers to the directory where vBulletin Connect is installed. If you install vBulletin Connect in the public_html or www directory, this value would be empty.

**Upgrading from previous versions of vBulletin 5 and vBulletin 6.**

1. Turn your vBulletin Connect site off so that users do not try to add content while you are updating the software. You can do this in the AdminCP under Settings → Options → Turn Your vBulletin On or Off.
2. Using the tools provided by your hosting provider, make a backup of your current database.
3. Using your SFTP client, upload the new files to your server. When prompted tell it to overwrite all files in the current transfer queue.
4. With your web browser run the Upgrade Wizard. The location will be [https://%yourdomain/%forumroot%/install/upgrade.php](https://%yourdomain/%forumroot%/install/upgrade.php)
5. When the Upgrade Wizard is complete, you will need to delete the install folder within /core/ on your server to proceed.
6. Log into your site and review the upgrade.
7. When everything appears satisfactory, turn your site back on in the AdminCP under Settings → Options → Turn Your vBulletin On or Off.

**Upgrading via the Command Line Interface**  
If you have a larger site, then you may want to run the upgrade scripts from the Command Line Interface (CLI). vBulletin can support this. After you have prepared your files using the steps above then you can log into your command line interface, usually SSH. From your SSH terminal, change into the %forumroot%/core/install directory. Then run the upgrade utility with this command line:  
[code]php -f upgrade.php[/code]  
  
**Upgrading from Older Versions of vBulletin**  
  
**Preparing for your upgrade**  
If you are using an older version of vBulletin. It is recommended that you download and upgrade to the vBulletin 4.X Forums/Publishing Suite before proceeding to vBulletin 6. This will make sure your system is at the most compatible level to be converted. Please follow these tips for the best migration:

1. Uninstall all third-party addons in the AdminCP under Plugins & Products →Product Manager.
2. For the Publishing Suite, leave the vBulletin Blog and vBulletin CMS products installed.
3. All other Products are incompatible.
4. Download your logo to be reused.
5. Read why we recommend using a test server for the initial upgrade (below)
6. Make a backup of your database to store locally.
7. Delete all vBulletin 4.X files. Maintain your attachment, and customavatar directories in their current locations. Read Below…
8. Upgrade the server's PHP to 7.4 or higher.
9. Follow the Upgrade Steps below.

**What files should I keep?**

- If your attachment directory is specified as a directory relative to your vBulletin install, then it should be located within the proper location of the vBulletin directory.
- If the attachment directory is specified as an absolute directory from the root of your drive, then it doesn't need to be copied over if still accessible.
- The customavatar directory should be copied into the /core/ directory. This directory will not be created by copying current vBulletin 5 files.
- The customprofilepic directory is not used in vBulletin 5 and can be discarded.
- The signaturepic directory is not used in vBulletin 5 upgrades due to a bug and does not need to be copied.

​  
**Using a Test Server for the Initial Upgrade**  
vBulletin Connect is more than an upgrade from older versions of vBulletin. It reimagines how a lot of the system functions to achieve various goals. These goals include standardized functionality across content creation, mobile device support, modularity, security, and updating programming standards. This requires a different code structure than previous versions of vBulletin and comes with a new database structure. When upgrading to vBulletin Connect, the process is more of a migration of data rather than the generally simply upgrades. For this reason we recommend upgrading a test copy first. This will allow your older version of vBulletin to remain live while you test and verify that the ugprade was successful. It will also give you and your team time to familiarize yourself with the new software so you can provide support to your end-users.  
  
You can read how to utilize a test server in our online manual here: [https://www.vbulletin.com/go/testserver](https://www.vbulletin.com/go/testserver)  
  
**Upgrade to vBulletin 5.**  
Now that you have prepared your vBulletin 4.2.5 data to be upgraded to vBulletin Connect you can follow these steps.

1. After Purchasing, download vBulletin Connect from the your [Member's Area](https://members.vbulletin.com).
2. Unzip the downloaded package on your local machine. Depending on your hosting provider and internet connection this can take some time.
3. In your vBulletin files there will be a directory called upload. Enter it.
4. Rename config.php.bkp to config.php (mv config.php.bkp config.php)
5. Enter the /upload/core/includes directory.
6. Rename config.php.new to config.php (mv config.php.new config.php)
7. Edit config.php and change these values to match your information.
    - $config['Database']['dbname'] = 'databasename';
    - $config['Database']['tableprefix'] = '';
    - $config['Database']['technicalemail'] = 'dbmaster@example.com';
    - $config['MasterServer']['servername'] = 'localhost'; // may be referred to as a host name
    - $config['MasterServer']['port'] = 3306;
    - $config['MasterServer']['username'] = 'username';
    - $config['MasterServer']['password'] = 'password';
    - Make sure that all values are to the right of the equal sign (=) and between the single quotes ('). If you do not know these values they can be obtained from your hosting provider.
    - No other values need to be changed in this file for a basic installation of vBulletin Connect.
8. Using your SFTP Client, upload the contents of the upload directory (including all sub-directories and files) to your server. Place these files in the directory where you want to install vBulletin. **If upgrading from vBulletin 3 or 4, this directory should be empty.**
9. If you store file attachments and custom avatars in the file system (both recommended), then you will need to copy these to your new directory as well.
10. **Rename htaccess.txt to .htaccess (the leading period is required).** If you are using Filezilla, you can do this by right-clicking on the file and choosing rename on the context menu. This can also be done from the Windows Command Line before uploading the files to the server.
11. Load the Upgrade Wizard in your browser. The URL should be [https://%yourdomain%/%forumroot%/install/upgrade.php](https://%yourdomain%/%forumroot%/install/upgrade.php)
12. The Upgrade Wizard will ask for your Customer ID. This can be found in your Member's Area after logging in.
13. Process all the steps in the Wizard. Some steps make take a long time.

  
**Upgrading from Older Versions of vBulletin**  
For the best upgrade scenarios, we recommend that you first upgrade to vBulletin 4.2.5 and then follow the steps above.  
  
**After Upgrading**  
  
During the upgrade process from vBulletin 3 and vBulletin 4, the search index is not created. This improves upgrade times significantly. After upgrading, you will need to rebuild your search index. Your site can be live during the search engine rebuild but there may be performance issues while indexing occurs. There are two ways to index your site for keyword based searches.

1. Within the AdminCP at Maintenance → General Update Tools → Rebuild Search Index.
2. Using the searchindex.php located in the do_not_upload directory of your download package. The file should be placed in your %forumroot% directory and then executed from the command line. When indexing is completed, the file should be deleted from your server.

---

  
  
**cPanel Uploads**  
  
You can improve file upload speeds when using a cPanel server by using the File Manager. Using the File Manager allows you to compress the upload directory on your local computer and upload the files as a single entity. Once the file is uploaded, you can right-click on it in cPanel's File Manager and extract it.

1. Download vBulletin as usual.
2. Unzip the download package onto your local machine.
3. Enter the Upload directory.
4. Select all files (CTRL-A on Windows/Linux CMD+A on Macs)
5. Compress the selected files. This can be done with a right-click on most operating systems.
6. This can be done with a right-click on most operating systems.
    - This will create a file that is usually called upload.zip. Though, you can name it anything.
7. Log into your site's cPanel.
8. Click on File Manager.
9. Navigate to your forum directory.
10. Click "Upload" in the File Manager controls.
11. Upload the file "upload.zip" via drag and drop.
12. Once the upload is finished, click back to the file manager.
13. Right-click on upload.zip.
14. Choose "Extract"
    - The new files should overwrite the existing files.

  
This can save a lot of time over uploading individual files. It will also get around some server limitations on opening and closing connections via SFTP/FSTP/FTP.  
  
[More information on cPanel's Filemanager.](https://docs.cpanel.net/cpanel/files/file-manager/)

---

  
  
**File Cleanup**  
  
Often when we refactor functionality within the system, it requires the removal of files that become obsolete. Due to the upgrade process, these files can build up on your server. In addition to this, each version includes its own set of javascript files with unique version stamped names. While these files shouldn't cause issues, they will take up space on your server. We recommend deleting these obsolete files from your server in order to maintain a clean file set. This requires a few steps to complete.  
  
1. Delete rollup javascript files that do not include your version number in the file name.  
  
2. Use the Suspect File Version tool in the AdminCP to delete all obsolete PHP files.

1. In the AdminCP go to Maintenance → Diagnostics.
2. Run the Suspect File Versions tool.
3. It will scan the vBulletin directories and list all files not part of vBulletin.
4. Review these files to make sure they aren't part of a customization. If they aren't needed, then delete them with your SFTP client.
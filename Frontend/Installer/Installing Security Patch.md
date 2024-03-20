From time to time, it's necessary to issue a Security Patch (or Patch Level) release for vBulletin software. This differs from the normal upgrade routine so this short article will clarify exactly what needs to be done when we announce a Patch Level (PL) release.  
  
A patch level release contains fixes for only the most critical issues in the previous release. In most cases, these are released to address a security issue. However they can be released for data integrity issues as well.  
  
A patch level is designed to be installed directly over top of your existing installation, with _no other action_. Normally, you do _not_ need to run any upgrade scripts.  

> Note: Patch Level Releases are only supported for their targeted version. If you are using a previous version, you will need to perform a complete upgrade for full functionality and support. Patch Levels will only be released for the latest versions in an active vBulletin series.
  
## Download The Patch
  
A Patch Level release doesn't come as a full set of files. As such, it doesn't appear in the normal download location. To access the Patch Release, first login to the vBulletin Members Area. In the left hand navigation within the 'Support Services' section, click on the [Patches/Security Patches](http://members.vbulletin.com/patches.php) link and you will see a screen showing all Patch Level releases for your Licenses.  
  
Patch Packages are cumulative so you only need the latest one available for your version. **You cannot use a Patch to upgrade your site.**  
  
Simply click on the Patch for the version you're currently running and you will be taken to the download page, where you will be given options for how to download the Patch.  
  
When you have set the download options you can click the **Download** button to start the download. When the download prompt window appears, you should choose the **Save** option and choose a directory on your computer in which to save the package.  
  
## Updating Files On Your Server
  
With Patch Level releases, the preparation work is very small - simply extract the ZIP package to your local machine! Once you've done this, you will notice that there is no **upload** folder. A Patch Level release only contains the files that are being fixed so will not see a complete installation package  
  
Before you do this **you should close your forums**. This will help eliminate any potential database errors as people attempt to access your forums before the patch is complete.  
  
It will also be a good idea at this point to take a backup of your site and database. While the database won't be updated with a Patch Level release, it's useful to have an up-to-date backup in any case. For more information on backing up your database, please see this section of the Online Manual.  
  
Connect to your FTP server using your FTP client of choice. Select the Patch Level files in the local pane and open the existing old files in the remote pane, then drag the new folders/files to the remote window.  
  
You will most likely be prompted by the FTP client at this point to ask if you want to overwrite the existing files. You should confirm this prompt, telling the FTP client that yes, you do want to overwrite the existing files. If the prompt gives you the option to overwrite all existing files without prompting again, use this option.  
  
Once the files are uploaded, that's your installation patched! There are no scripts to run and you can re-open your forums to users again.  
  
This is not a full upgrade. You do not need to run any upgrade scripts to complete the upgrade.  
  


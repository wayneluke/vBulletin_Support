You would have to change the permissions of the md5_sums_vbulletin.php file to 0644 or 0755 (depending on your server) so you can upload the newer version. This will eliminate the file mismatches you're seeing. You can usually change file permissions via your SFTP program or Web Control Panel provided by your hosting provider. If neither of those work, you can use the CHMOD command via SSH or contact your hosting provider.  
  
You can find information on CHMOD using the man command on your server or by visiting: [https://cheat.sh/chmod](https://cheat.sh/chmod)  
  
After running the upgrade you can reset the file back to 0444 so it is not writable.

#sftp #file_transfer

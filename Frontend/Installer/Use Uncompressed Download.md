In this situation, I recommend using the I recommend using the uncompressed version of vBulletin at this time for this functionality. To do this:  
  
- Download a new copy of vBulletin from the Member's Area.  
- On the Download Page, click "More Download Options."  
- Under File Options set "Use Compressed PHP Archive" to No.  
  
The resulting download package will be slightly larger. The main difference is that the /core/vb directory will contain individual files and directories instead of a compressed PHAR file.  
  
Delete the `/core/vb` directory on your server and replace it with the `/core/vb` directory in the new download package.

#members_area

To move your site:

1. Make sure the server meets the [Minimum Requirements](https://forum.vbulletin.com/node/4387853) for vBulletin 5.7.5
2. Copy all of your files to the new server.
    - If stored as files, make sure to copy your attachments and customavatars to the new server.
3. Edit your `core/includes/config.php` file to connect to the new database.
4. Your site should be accessible now if you are not changing the domain name and your DNS has been updated.
5. If Attachments are stored as Files, you will need to make them accessible. To make your attachments accessible:
    1. Put your site into [Debug Mode](https://www.vbulletin.com/go/vb5debug).
    2. Login to the Admin
    3. Go to Settings → Options → Version Info and Other Untouchables.
    4. Update the File Attachment Path to where your attachments are stored on the new server.
    5. Save this page.

  
  
To back up and restore your database:

- Talk to your old hosting company about how to backup a database on your old server.
- Talk to your new hosting company about how to restore a database backup on your new server.
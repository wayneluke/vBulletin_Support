To implement this functionality, you must have command line access to your server.

## Enabling Related Topics

1. Configure [vbcron.php](https://forum.vbulletin.com/node/4489007) and [vbevents.php](https://forum.vbulletin.com/node/4489008) to run on your server.
2. Make sure the `core/cache/relatedtopics` is writable the command is: 
	- `chmod +w /path/to/vbulletin/core/cache/relatedtopics`
3. In the AdminCP enable this function under Settings → Options → Related Topics.
4. Go to Scheduled Tasks → Scheduled Tasks Manager. 
5. Find the Related Topics (Full) task in the list.
6. Click "Run Now".

This will queue the events needed to rebuild your related topics information in the `noderelated` table. However, the rebuild will not be instant. It will be run when the event is the next in line for `vbevents.php`. The time needeed to complete these tasks will depend on your configuation of `vbeevents.php`.

## Displaying Related Topics

Once Related Topics is enabled, you can add the module to your Discussion pages. To do this follow these steps:

1. Visit a forum topic on the frontend of your site.
2. If Necessary, click the Edit Site toggle.
3. Click Edit Page in the Site Builder menu.
4. Under Modules → Content, find the Related Topics module.
5. Drag it into position on the page.
6. Save the page.
7. When asked, you should overwrite the Page Template so this change is applied to all topics.

The module is configured so that it is not displayed if there is no content.

	
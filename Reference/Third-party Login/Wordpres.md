Wordpress OAuth

WordPress.com's free instances do not allow plugins, and plugins are required for this because WordPress doesn't support OAuth 2 out of the box. 

## Configure WordPress
  
[Download](https://wordpress.org/download/) and install WordPress on your server if necessary.
 
Using the built-in wp-admin plugin page (wp-admin/plugin-install.php), find either or both of the following plugins, install, and activate:

- WP OAuth Server (OAuth Authentication) by Jayson T Cote (OR wp-oauth.com, both are the same): [https://wordpress.org/plugins/oauth2-provider/](https://wordpress.org/plugins/oauth2-provider/)
- WP OAuth Server ( Login with WordPress ) by miniOrange: [https://wordpress.org/plugins/miniorange-oauth-20-server/](https://wordpress.org/plugins/miniorange-oauth-20-server/) -- make sure to get the SERVER, not Client.

Either plugin should work, and their setup is similar. After installing the plugin, you should have either "OAuth Server" or "miniOrange OAuth Server" in the left column of wp-admin.

### OAuth Server

- Go to Settings (wp-admin/admin.php?page=wo_settings), check "Enable OAuth Server", then click Save Changes.
- Add a new client. Go to Clients (wp-admin/admin.php?page=wo_manage_clients) > Add New Client
	- Client Name: Anything, like "vBulletin"
	- Redirect URI: {vbulletin's frontendurl}/oauth2/callback
- Check the "Authorization Code" checkbox at the top left, and click "Create Client."
- Copy the client ID & Client secret that will be are generated on the next page.

> Make note of the endpoint URLs: https://wp-oauth.com/docs/general/endpoints/. However, you may need to use the ?oauth=authorize|token|me formats instead if you haven't changed the "Permalink" option in WordPress 


### miniOrange (recommended)

- Go to Advanced Settings (wp-admin/admin.php?page=mo_oauth_server_settings&tab=advance_settings).
- Ensure that "Master Switch" is on (Green) and toggle it on if it's off. 
- Scroll down a tiny bit and click "Save Settings" in the middle of that page. 
- Configure your Application (wp-admin/admin.php?page=mo_oauth_server_settings&tab=config)
	- Select "WordPress" as the application on the next form.
	- Client Name: Anything you want, like "vBulletin sign in"
	- Callback/Redirect URI: {vbulletin's frontendurl}/oauth2/callback
- Click "Save Client"
- On the next page, note the Client ID & Secret. Then scroll down a bit and make note of the Endpoints.



## Configuring vBulletin
  
In vBulletin, go to `AdminCP → Settings → Options → Third Party Login Options` (options.php?do=options&dogroup=externallogin&advanced=0) and fill in the "Wordpress" options. Please refer to the inline help to get more information. 
  
Make sure that the 3 Endpoint URLs are correct, these are a common place for mistakes, and we can't automate this due to the nature of WordPress plugins & settings, causing multiple possible endpoint URLs

> If you are using the Jayson T Cote OAuth plugin, the endpoints are not provided for easy copy-pasting like they are in the miniOrange plugin. You have to construct them yourself. 
  
After saving, this should log in like every other OAuth 2.0 integration
- Log in to a vBulletin user, go to User Settings > Account (settings/account)
- Scroll down to Third-party Login Providers, click on "Connect to {Wordpress Site Name}"
- Confirm the pop-up. 
- Log out, and try logging in by clicking on the relevant WordPress icon in the login dropdown. 

You should be able to log in via the WordPress account now. Note that, depending on the plugin, you may get another authorization pop-up. If you do get a pop-up, confirm.  
  
vBulletin's "Register" feature should work like any other. Clicking on the "Connect to ..." button should fill out the registration form with the username and email pulled from the WordPress account.

#feature

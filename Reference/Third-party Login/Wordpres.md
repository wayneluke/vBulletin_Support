wordpress.com's free instances do not allow for plugins, and plugins are required for this because wordpress doesn't support OAuth 2 out of the box. I ended up just running a local instance.  

## Configure Wordpress
  
Download wordpress: [https://wordpress.org/download/](https://wordpress.org/download/)  
  
Install it somewhere that the vBulletin instance can access. I did it locally and used ngrok to get around some curl cert issues, but you might be able to get both working locally.  
  
Using the built in wp-admin plugin page (wp-admin/plugin-install.php), find either or both of the following plugins, install and activate:

- WP OAuth Server (OAuth Authentication) by Jayson T Cote (OR wp-oauth.com, both are the same): [https://wordpress.org/plugins/oauth2-provider/](https://wordpress.org/plugins/oauth2-provider/)
- WP OAuth Server ( Login with WordPress ) by miniOrange: [https://wordpress.org/plugins/miniorange-oauth-20-server/](https://wordpress.org/plugins/miniorange-oauth-20-server/) -- make sure to get the SERVER, not Client.

  
  
Either plugin should work, and their setup are pretty similar. After installing the plugin, you should have either "OAuth Server" or "miniOrange OAuth Server" in the left column of wp-admin.

```
OAuth Server:
Settings (wp-admin/admin.php?page=wo_settings) :
Check "Enable OAuth Server", click Save Changes.

Clients (wp-admin/admin.php?page=wo_manage_clients) > Add New Client
Client Name: Anything, like "vBulletin"
Redirect URI: {vbulletin's frontendurl}/oauth2/callback

Check "Authorization Code" checkbox to the top left, click "Create Client"
Copy the client ID & client secret that are generated on the next page.

Also note the endpoint URLs: https://wp-oauth.com/docs/general/endpoints/
but you may need to use the ?oauth=authorize|token|me formats instead if you 
haven't changed the "Permalink" option in wordpress (see my big comment above).
```

  
  

```
miniOrange: 
Advance Settings (wp-admin/admin.php?page=mo_oauth_server_settings&tab=advance_settings):
Ensure that "Master Switch" is on (Green) and toggle it on if it's off. 
Scroll down a tiny bit and click "Save Settings" on the middle of that page 
(easy to miss above the "Premium Features" block).

Configure your Application (wp-admin/admin.php?page=mo_oauth_server_settings&tab=config)
 > Select "WordPress" as the 
application, on the next form:
Client Name: Anything you want, like "vBulletin signin"
Callback/Redirect URI: {vbulletin's frontendurl}/oauth2/callback
Click "Save Client"

On the next page, note the Client ID & Secret, and scroll down a bit and
also note the Endpoints.
```


## Configure vBulletin
  
In vBulletin, go to `AdminCP → Settings → Options → Third Party Login Options` (options.php?do=options&dogroup=externallogin&advanced=0) and fill in the "Wordpress" options. Please refer to the inline help to get more information. 
  
Make sure to that the 3 Endpoint URLs are correct, these are a common place for mistakes and we can't automate this due to the nature of wordpress plugins & settings causing multiple possible endpoint URLs -- this is also where it gets a bit annoying for the Jayson T Cote version because AFAIK the endpoints are not provided for easy copy pasting like the miniOrange version, so you have to construct them yourself. Again, see my comment above for the possible URLs and try the query param versions if you get a resource not found message.  
  
After saving, this should work like every other oauth2 integration: Log into a vBulletin user, go to User Settings > Account (settings/account), scroll down to Third-party Login Providers, click on "Connect to {Wordpress Site Name}", confirm the popup. Log out, and try logging in via clicking on the relevant wordpress icon in the login dropdown. You should be able to login via the wordpress account now. Note that depending on the plugin, you may or may not get another authorize popup. If you do get a popup, confirm.  
  
The "register" feature should work as any other as well -- clicking on the "Connect to ..." button should fill the registration form with the username & email pulled form the wordpress account.
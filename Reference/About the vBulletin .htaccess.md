`.htaccess` is a configuration file for the Apache Web Server. It allows you to customize how your server works. Depending on how your hosting provider has the server configured, you can redirect people to different locations, secure directories and files, tell browsers how long to cache files,  update PHP variables, and more. vBulletin comes with a pretty extensive `.htaccess` file that does a these things for you.

## Location

vBulletin comes with a file named `htaccess.txt` in the original download. When you install the software for the first time, you renamed this file `.htaccess`. It resides in your `vbulletin root` directory. This is the file referenced in this document.

When you upgrade your vBulletin, the new `htaccess.txt` will not overwrite any changes because of the filename change.

## Comments

Lines that begin with a 'number sign' or hashmark signifies a comment within `.htaccess`. Removing this leading symbol will cause the Apache webserver to process the line as a directive.

Lines that read in simple English should remain commented out. 

## Rewrites or Redirection

The most common change that you'll most likely make in your .htacces file are additions or changes to how rewrites or redirected rules behave. Below are some basic changes people may want to make.

### Terms:

- RewriteBase - Rewrite rules and conditions are inherited from parent directories. This tells the server to forget inheritance and start over with the rules and conditions in the specified directory.
- RewriteCond - Basically an IF test on the URL the browser requests. If this tests to true, then then the RewriteRule will be applied.
- RewriteRule - The changes to the requested URL applied after any conditions are met.
- 301 Redirect [R=301]  - This tells the server to return a 301 - Permanently Moved header back to the client. This is important for search engines to update their rankings over time.

### Override `.htaccess` in Parent Directories

Sometimes, it is necessary to override the rewrite directives of a parent directory. An example would be if you have a copy of WordPress in the root of your website and want to install vBulletin within a sub-directory. The control to do this would be to set the RewriteBase directive at the top of your vBulletin `.htaccess` file. The file includes this code but it is commented out. 

```
	# In some cases where you have other mod_rewrite rules, you may need to remove the 
	# comment on the following RewriteBase line and change it to match your folder name. 
	# This resets the other mod_rewrite rules for just this directory
	# If your site was www.example.com/forum, the setting would be /forum/
	#RewriteBase /
```

Comment the line with `#RewriteBase /` and follow the instructions above it.

### Handle vBulletin 4 'Friendly URLs'

Find this block of code in your `.htaccess` file and uncomment the necessary lines:

```
	#If you used friendly urls in vB4, then uncommenting the following rules will redirect the #
	#old vB4 urls to a similar location in vB5.  This is unnecesary for a new vB5 install.
	#RewriteRule ^threads/.* showthread.php [QSA]
	#RewriteRule ^forums/.* forumdisplay.php [QSA]
	#RewriteRule ^members/.* member.php [QSA]
	#RewriteRule ^blogs/.* blog.php [QSA]
	#RewriteRule ^entries/.* entry.php [QSA]
```

### Redirect to HTTPS

It is recommended that you use a security certificate with your site. This tells the browser to encrypt any data sent by it to the server. It also includes a key so the encryption is unique to your server. When the server receives the packet, it will automatically decrypt it in the background. This process keeps data from your users safer.

This is another block included in the default `.htaccess` file. You merely have to uncomment the directives.

```
	#To redirect users to the secure version of your site, uncomment the lines below 
	#RewriteCond %{HTTPS} !=on
	#RewriteRule .* https://%{SERVER_NAME}%{REQUEST_URI} [R=301,L]
```

If this change doesn't work on your server, you will need to contact your hosting provider.

### Other Redirects

Sometimes, you need to add additional redirects. It could be that your site ran under a different domain in the past or you have reconfigured your web site to use sub-domains instead of directories. These redirects will come in handy.

#### Redirect non-www to www (or other subdomain)

```
RewriteCond %{HTTP_HOST} !^www.example.com$ [NC]
RewriteRule ^(.*)$ http://www.example.com/$1 [R=301,L]
```

#### Redirect www (or other subdomain) to Top Level Domain

```
RewriteCond %{HTTP_HOST} ^www\.example\.com$
RewriteRule ^/?$ "http\:\/\/example\.com\/" [R=301,L]
```

If you're using a security certificate, it is recommended to change the destination in the Rewrite Rule lines to https and place this directive above the redirect to HTTP already in the `.htaccess` file. This will help reduce the number of redirects.

## Addhandler

This directive does not exist in the default `htaccess.txt` file. However, on shared hosting you may see an "AddHandler" directive at the bottom of the your `.htaccess`. This is commonly added to specify a specific version of PHP to be used with that directory and is very common on cPanel driven sites that support many versions of PHP

It will look like this: `AddHandler application/x-httpd-php8 .php`

If this exists in your `.htaccess`, it is very important to leave it there. It is not generally malware or some sort of exploit. If you are concerned about an AddHandler directive, contact your hosting provider.

## Set PHP Variables

On some servers, you can set PHP Variables within the .htaccess file. This can be useful if you do not have access to a php.ini file to edit. To do this, you would add one variable per line in the format of: `php_value <key> <val>`

- key is the variable you want to change.
- val is the value you want to set.

Example: `php_value memory_limit 1024M`

## Other directives

### mod_deflate

This tells the server to look at the file type and if it is being sent to the browser, gzip it first. The browser will automatically unzip the files before displaying them. This will reduce bandwidth.

### mod_expires

This tells the browser to cache the files for a specific period of time. Usually two weeks for static files including images, fonts, javascript, and CSS.

### mod_headers

vBulletin uses this directive for the same purpose as mod_expires but can be used for different purposes as well. This is just a failsafe in case the server does not have mod_expires installed.

### files_match

This is used to prevent the download of specific files that can contain sensitive data on your server. Generally this is used as a failsafe if you leave a database backup in an inappropriate directory within a vBulletin install.

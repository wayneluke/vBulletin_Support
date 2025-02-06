
## Setting Up The Server

### Create Virtual Hosts

Create the virtual host subdomain to handle your vBulletin Site.  My example Apache conf file looks like this:

```
<VirtualHost *:80>
	DocumentRoot "/Volumes/Secondary/Sites/vBulletin/demo"
	ServerName demo.vbulletin.test
	ErrorLog "/Volumes/Secondary/Sites/vBulletin/demo/Logs/httpd_error.log"
	CustomLog "/Volumes/Secondary/Sites/vBulletin/demo/Logs/httpd_access.log" common
	php_flag log_errors on
	php_flag display_errors off
	php_value error_reporting 2147483647
	php_value error_log /Volumes/Secondary/Sites/vBulletin/Demo/Logs/php_error.log

	<Directory "/Volumes/Secondary/Sites/vBulletin/demo">
		AllowOverride All
		Require all granted
	</Directory>
</VirtualHost>
```

Create the virtual host subdomain to handle your CDN Site. Example conf file:

```
<VirtualHost *:80>
	DocumentRoot "/Volumes/Secondary/Sites/vBulletin/cdn"
	ServerName cdn.vbulletin.test
	ErrorLog "/Volumes/Secondary/Sites/vBulletin/cdn/Logs/httpd_error.log"
	CustomLog "/Volumes/Secondary/Sites/vBulletin/cdn/Logs/httpd_access.log" common

	php_flag log_errors on
	php_flag display_errors off
	php_value error_reporting 2147483647
	php_value error_log /Volumes/Secondary/Sites/vBulletin/cdn/Logs/php_error.log

	<Directory "/Volumes/Secondary/Sites/vBulletin/cdn">
		AllowOverride All
		Require all granted
	</Directory>
</VirtualHost>
```

On a hosting platform, you can usually do this within the control panel they provide.

After creating the above virtual host configurations, I restarted Apache. This is probably automatic on a hosting platform with a tool like cPanel but consult your hosting provider.

### Configure vBulletin (if necessary)

Then on my local machine, the demo directory already existed so I only had to create the cdn directory for Apache. However, I had to set my vBulletin to use the new demo subdomain. To do this, I went to the AdminCP at the old URL of http://vbulletin.test/demo/admincp and updated. the Forum URL and Core URL settings under Settings → Options → Site URLs and Routing.

### Test vBulletin

After changing the URLs, I visited the site at its new URL and verified that everything is working.

![](CleanShot%202025-01-22%20at%2011.26.13.png)

To test the CDN subdomain, I created a new index.html file in the directory and went to its address.

![](CleanShot%202025-01-22%20at%2011.27.50.png)

> Note: Since this is running on my local Mac workstation, I had to add the domain names to my hosts file. With a standard domain setup, you would control this via DNS.
## Setting Up the CDN

### Copy Files

To set up the files, I asked ChatGPT to create a script that could sync the following directories from my main site into my new CDN subdomain.

- core/customavatars
- core/cache/css
- fonts
- images
- js

After a little tweaking, I got the script set up for my specific machine. And ran it. Everything seemed to copy over. I've attached the script below. However, it will need editing to your specific directories.

### Turning It On

The last step was to enable the CDN within vBulletin. This is done in the AdminCP under Settings → Options → Server Settings and Optimization Options. On this page, I entered in the CDN URL of http://cdn.vbulletin.test and saved the options.

After this, I tested my demo site again and didn't see anything functionally wrong with it. Can navigate, can post, can edit, add reactions, etc…
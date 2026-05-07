This is caused by URL Rewrites not being implemented on the server. From the readme.html file:

Important! In your vbulletin_root find the file named htaccess.txt. Rename it to .htacces using your FTP client or the server's command line interface.

If the rewrites do not work after this, contact your server administrator and make sure that "Allow Overrides" is set to All for your virtual host. Or they can add the contents of the .htaccess file to your virtual host configuration.

---------

If you are not using Apache then you will need to configure your server to handle URL Rewrites.

- For IIS add and configure the URL Rewrite module from Microsoft. This will automatically read the web.config file in the directory after the web server is restarted. If you have further issues, contact the server administrator.

- For NGINX you need to update the server block for the site. The instructions that your looking for are in the do_not_upload/nginx_php7.vhost file. You will need to reconfigure the server block to include those rewrites. If you have further issues, contact the server administrator.
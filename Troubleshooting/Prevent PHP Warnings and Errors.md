
It is recommended that you run vBulletin with display_errors off on production servers. This can be set in your php.ini file.  
  
You can edit these lines in your php.ini file or place the lines below at the end of the file:  
  
~~~
display_errors = Off  
log_errors = On  
error_reporting = E_ALL & ~E_NOTICE & ~E_WARNING
~~~
​  
If you do not have access to the php.ini file, you can use add these lines in your /core/includes/config.php file to configure this:  
  
~~~
ini_set('display_errors', 0);  
ini_set('log_errors',1);  
ini_set("error_log", "/pathtologdirectory/php_error.log");  
error_reporting(E_ALL & ~E_NOTICE & ~E_WARNING);
~~~

#troubleshooting #config_php 
Please increase the memory allowed for PHP Scripts. You should allow a minimum of 128M. Though, 256M seems to be a good sweet spot for many sites. Larger sites will need more memory to deal with larger data arrays.  
  
You can do this in three ways…   
  
## Edit INI File  
  
You can edit your php.ini file. This will be a server wide change and affect all sites. You can see the location of this file within vBulletin's AdminCP under Maintenance → View PHP Information. Find the `memory_limit` variable and change it to 128M or 256M. Once done, you may have to restart your web server so the new value takes effect.  
  
## Use cPanel Multi-PHP Editor   

If you're on a cPanel server, you can update this in your Multi-PHP Editor within cPanel. This method is helpful if you have different requirements for different domains under the same cPanel account. After you make your changes, cPanel will either update your .htaccess or create a php.ini file in your web directory. Which depends on the version of cPanel and the configuration of the server.  
  
## Edit vBulletin Directly  
​​​​​​​
Most servers allow you to increase this value in your code. You can add a line to your vBulletin's configuration file to increase memory. In the /core/includes/config.php file add the following line anywhere after the opening `<?php line`:  
  
```php
ini_set('memory_limit', '256M');
```
  
If your server doesn't allow this due to PHP's disabled functions system you will know once you save the file. The system will most likely show a fatal error. Remove the line and try one of the other methods or discuss the issue with your hosting provider.

#reference #php_settings #tutorial  #how-to 
These are the steps that I go through for advanced troubleshooting. Using these steps will often give more information more than debug mode alone.

## Tools Needed

- Modern Text Editor with syntax highlighting. Examples are Visual Studio Code, Codeium, Sublime Text, ZED.
- PHP Linter to pinpoint errors in files.
- .htaccess Linter to pinpoint errors in files.

## Restrict Debug Mode Access.

Debug mode can provide too much information to site visitors so it is best to limit who can see this. Previously I have documented two two ways of implementing this. 

1. [[Debug Mode by IP]]
2. [[Debug Mode by Lock File]]

Use the one that suits your needs the best.

## Force Error Logging

Adding these lines to the site's core/includes/config.php will force error logging:

```php 
ini_set('display_errors', 0);
//ini_set('display_errors',1) //uncomment to display errors on the screen. Can be very messy
ini_set('log_errors',1);
ini_set("error_log", dirname(__DIR__,2) . "/logs/php_error.log");
```

You will need to create the `/logs/` directory in the vBulletin root directory.
## Enable Route Tracing

You can enable route tracing the PHP error log. This looks like this:

```
## phar:///home/www/sitename/forum/core/vb/vb.phar/database.php(2) Exception Thrown  
#0 phar:///home/www/sitename/forum/core/vb/vb.phar/database/mysqli.php(2): vB_Database->halt()  
#1 phar:///home/www/sitename/forum/core/vb/vb.phar/database.php(2): vB_Database_MySQLi->execute_query()  
#2 phar:///home/www/sitename/forum/core/vb/vb.phar/db/result.php(2): vB_Database->query_read()  
#3 phar:///home/www/sitename/forum/core/vb/vb.phar/db/result.php(2): vB_dB_Result->rewind()  
#4 /home/www/sitename/forum/core/packages/vbforum/db/mysql/querydefs.php(6535): vB_dB_Result->__construct()  
#5 phar:///home/www/sitename/forum/core/vb/vb.phar/db/query/method.php(2): vBForum_dB_MYSQL_QueryDefs->getFullContent()  
#6 phar:///home/www/sitename/forum/core/vb/vb.phar/db/assertor.php(2): vB_dB_Query_Method->execSQL()  
#7 phar:///home/www/sitename/forum/core/vb/vb.phar/db/assertor.php(2): vB_dB_Assertor->assertQuery()  
#8 phar:///home/www/sitename/forum/core/vb/vb.phar/library/content.php(2): vB_dB_Assertor->getRows()  
#9 phar:///home/www/sitename/forum/core/vb/vb.phar/library/content.php(2): vB_Library_Content->getRawContent()  
#10 phar:///home/www/sitename/forum/core/vb/vb.phar/library/content/channel.php(2): vB_Library_Content->getBareContent()  
#11 /home/www/sitename/forum/core/vb5/route/channel.php(26): vB_Library_Content_Channel->getBareContent()  
#12 /home/www/sitename/forum/core/vb5/route.php(1590): vB5_Route_Channel->__construct()  
#13 /home/www/sitename/forum/core/includes/adminfunctions_template.php(999): vB5_Route::buildUrl()  
#14 /home/www/sitename/forum/core/includes/adminfunctions_template.php(908): print_style_header_row()  
#15 /home/www/sitename/forum/core/admincp/template.php(2964): print_style()  
#16 /home/www/sitename/forum/includes/api/interface/collapsed.php(149): require_once('/home/www/sitename/...')  
#17 /home/www/sitename/forum/includes/vb5/frontend/controller/relay.php(33): Api_Interface_Collapsed->relay()  
#18 /home/www/sitename/forum/index.php(65): vB5_Frontend_Controller_Relay->admincp()  
#19 {main}
```

If you do not see this data in your PHP Error log, you may have to [install](https://xdebug.org/docs/install) Xdebug and restart the webserver and/or PHP.
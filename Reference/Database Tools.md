> Warning: These tools should be run on a duplicate of your live database for testing prior to modifying your production systems..

The vBulletin Database Tools are a series of command line scripts that allow you to quickly make modifications to your database in order to provide performance fixes and update them to UTF8 standards.

> IMPORTANT- These files must be run via the command line, either if you have local access to the server or ssh access. If you are on shared hosting your access may be limited. You may ask your host for ssh access. If they say it is not available ask if they will run the commands for you.

These scripts are located in the /do_not_upload/dbtools/ folder.

## Using these Tools

1. Rename vbutil_config.php.new to vbutil_config.php
2. Edit vbutil_config.php with a code editor and enter your database credentials. If unsure of the database credentials they can be found in the /core/includes/config.php file.
3. Upload the utf8_db_tools directory to your server. They do not need to be in your vBulletin directory. They do need to be accessible from the command line.

## MyISAMFIX

This tool will convert vBulletin 5 tables to INNODB from MyISAM. This change will generally provide a performance boost to a website. In addition it can help prevent table crashes and improve replication services. Before running this, use your database tool to check if it is needed. If your tables are already INNODB, there is no need to run this. This file will only convert default vBulletin 5 tables. Tables from previous versions or addon products will remain untouched.

Run this command on the server: `php myisamfix.phar -dofix`

## UTF8TableFix

This script is only useful if you're converting an English Language database to UTF-8 (see instructions below). It has no parameters or options. The command is:

```bash
php utf8tablefix.phar
```

## UTF8Convert

For sites in other encodings or with multiple languages you need UTF8Convert (see instructions below). This script has several parameters. We recommend using UTF8MB4 with MySQL and MariaDB. This will allow you to use multiple languages properly as well as the popular UTF-8 Emoticon standard. This file will attempt to convert your actual data.

```bash
php utf8convert.phar --options
```

Required options are --connectionCharset and --charset. e.g.

```bash
php utf8convert.phar --connectionCharset=latin1 --charset=utf8mb4
```

### All Options

- --connectionCharset=[value] (required): This refers to whatever the previous site used. Commonly older sites will have latin1 and newer sites will have utf8, but it might be something different. This is the value from config.php for $config['Mysqli']['charset'], if specified. If the value is not specified in your `/core/includes/config.php` file it can be determined by running this query:

```sql
SHOW SESSION VARIABLES LIKE 'character\_set\_client';
```

- --charset=[value] (required) : This is the new charset, and should always be 'utf8mb4'
- --wipeSearch=1 (optional) : If set the utility will truncate all the searchtowords tables before converting. I recommend you always set this, for two reasons. First, there are often words that are NOT duplicates in one encoding but ARE duplicates in a different encoding. By far the easiest way to avoid these problems is to wipe the data. Second, the conversion process is time consuming for anything over a few hundred thousand posts, and setting this makes it quicker.
- --collateCI=[value] (optional) : This will default to utf8mb4_unicode_ci. This is the recommended collation.
- -–collatebin=[value] (optional) : This will default to 'bin' added to the charset.

> **Please Note**: When running MySQL queries, you need to use the `mysql` command line or a tool like phpMyAdmin, Adminer, HeidiSQL, or DBeaver

## Database Compare

This is a database repair tool. It will compare two databases and create a list of queries to help synchronize the structures between them. This script should work with any version of vBulletin. To use it, set the Source values in the vbutil_config.php file to match a clean installation of vBulletin. This installation should match the version you want to compare with. The standard database options in the vbutil_config.php file should point to the database that is currently experiencing issues.

```bash
php dbcompare.phar indexscript > update.sql
```

You can run the queries by importing them in any tool that allows you to run MySQL Queries

Example:

```bash
mysql -u%user% -p %databas% < update.sql
```

Replace %user% and %database% as appropriate.

## Update vBulletin 5.7.5+ tables to InnoDB and UTF8

Each script is listed under these steps with specific information for that script.

1. Rename vbutil_config.php.new to vbutil_config.php
2. Edit vbutil_config.php with a code editor and enter your database credentials. If unsure of the database credentials they can be found in the /core/includes/config.php file.
3. Upload the utf8_db_tools directory to your server. They do not need to be in your vBulletin directory. They do need to be accessible from the command line.
4. In forum Admin CP turn off vBulletin under Settings -> Options -> Turn your Forum On/Off
5. **Take a full backup of the forum database.**
6. Reread step 4. This cannot be skipped. I actually recommend using a full copy of your database for the first run.
7. With command line change the directory to the directory where you placed the files.
8. If you are not using INNODB tables, Run the MyISAM fix script listed above.
    - **This is only necessary if your are not using INNODB tables.**
9. If you are using English on your site, then you would run the UTF8Tablefix script.
    - **If you are not using English, do not use this script.**
10. For all other languages, run the UTF8Convert script.
    - Wait again, this can take a long time, especially the node table.
11. Go to your Admin CP and open Languages & Phrases -> Language Manager
12. Edit the settings of each language. Check the HTML Character Set setting and if it isn't UTF-8 change it to UTF-8.
13. Rebuild your search engine.
14. Check forum, make sure it is working as expected.
15. When you are finished, delete the utf8_db_tools directory from your server.
16. Turn your vBulletin back on in the AdminCP Settings.
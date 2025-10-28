
### Upgrade an Arabic vbulletin 3.x to 5.x and convert it's mysql data from cp1256/latin1 to utf8

- [March 28, 2023](https://www.mohammedh.io/2023/03/upgrade-arabic-vbulletin-3x-to-5x-and.html "permanent link")

Back in 2009 internet was full of community forums to the point where every person would install forum and make his own community especially here in Iraq. a lot of communities were powered by vbulletin software and most of them died. however there are some sites that still up today.

Last week I was tasked to upgrade one of those sites from vbulletin 3.8 to vbulletin 5.7 . so I grabbed a copy of its database, Started an upgrade simulation and BOOM nothing works as intended.

Let me explain a step by step process, first of all the vbulletin 5.7 requires mysql 8.0 to actually work but vbulletin 3.8 won't work on mysql 8.0 because it sets utf-8 chraset on new connections so you have edit vbulletin 3.8 config file located here

```
includes/config.php
```

Uncomment and modify this line as shown below

```
$config['Mysqli']['charset'] = 'latin1';
```

  
The above line shall run your vbulletin 3.8 on mysql 8.0 without gibberish characters.

### Why latin1 ?

Simply because that was the default charset collation used by mysql 4.x/5.x back in 2009 and vbulletin back then would just inherit whatever charset your database is using .

At this point if you upgrade to vbulletin 5.x the upgrade will succeed but you will end up this error :

```
Warning mb_convert_encoding() Unknown encoding "WINDOWS-1256"
```

And this issue is because vbulletin 5.x started to convert strings based on language settings saved in 'languages' table using mbstring library which don't support cp1256 for some reason.

Anyway it got so messy to the point I pulled may hair, searching the web didn't get me anything, actually the solutions on stackoverflow were giving me different results because they are for old versions mostly.

However mixing different use cases from other people issues finally got me a solution that worked perfectly and hope it will work for you too :

You can follow this steps either before or after vbulletin 5 upgrade, the idea is to convert database to utf8 from latin1/cp1256 charset .

- Create a mysqldump of the database schema (using --no-data) using below command :

```
mysqldump -u DB_USER -p --no-data OLD_DB_NAME > OLD_DB_NAME_SCHEMA.sql
```

it will ask for password of DB_USER

- Edit the `OLD_DB_NAME_SCHEMA.sql` file and Replace every occurrence of CHARSET=latin1 by CHARSET=utf8 using vim you would run this command :

```
%s/CHARSET=latin1/CHARSET=utf8/g
```

- Create new database with UTF-8 as default collation then restore `OLD_DB_NAME_SCHEMA.sql` to it using this command :

```
mysql -u DB_USER -p NEW_DB_NAME < OLD_DB_NAME_SCHEMA.sql
```

- Using new version phpMyAdmin go to the new created database -> Operations scroll down and from Collation section change it to utf8mb3_unicode_ci and check both check boxes like shown in below screenshot .  
      
    
    [![](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgz4JN1pfRjpGn1KHwdQ0ZwW6pNxnh06iR6RvtONdry0GUC6aEatrB2dvUrJgXvyuu0oh2-2n9B-NtBJuhtrJiIfJOIydjhRKmkdqEUf0715jlZWuJq0rjJ3AUqYiwJKSIPNpnzN8-axrP8_YFT9As0DQUNxY8aYvnHSkeMgAMTDgAqoNJ4rYXnQ2uj/s320-rw/firefox_EdOZL3lpN3.png)](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgz4JN1pfRjpGn1KHwdQ0ZwW6pNxnh06iR6RvtONdry0GUC6aEatrB2dvUrJgXvyuu0oh2-2n9B-NtBJuhtrJiIfJOIydjhRKmkdqEUf0715jlZWuJq0rjJ3AUqYiwJKSIPNpnzN8-axrP8_YFT9As0DQUNxY8aYvnHSkeMgAMTDgAqoNJ4rYXnQ2uj/s471/firefox_EdOZL3lpN3.png)
    
      
    
- you can use this loop too if you don't want to use phpmyadmin (however it requires you to set user and password in environment variable and that is out of this tutorial scope) :

```
echo 'SHOW TABLES;' \
| mysql NEW_DB_NAME \
| awk '!/^Tables_in_/ {print "ALTER TABLE `"$0"` DEFAULT CHARACTER SET utf8 COLLATE utf8mb3_unicode_ci;"}' \
| column -t \
| mysql NEW_DB_NAME
```

- Once that done use mysqldump to create a new copy of data only without schema using this command :

```
mysqldump -u DB_USER -p -t --skip-set-charset --default-character-set=latin1 OLD_DB_NAME > OLD_DB_NAME_DATA.sql
```

- Then we use iconv to convert latin1 characters into real utf8 Arabic characters using this command :

```
iconv -c -f WINDOWS-1256 -t UTF8 OLD_DB_NAME_DATA.sql -o NEW_DB_NAME_DATA.sql
```

- Last thing you have to restore the converted data into our new database using this queries in mysql console :

```
mysql -u DB_USER -p
use NEW_DB_NAME;
source /path/to/NEW_DB_NAME_DATA.sql;
exit
```

I think this same procedure would work with any mysql database that was created back in 200X and would like to migrate to new mysql 8 and utf-8 .

Best of luck


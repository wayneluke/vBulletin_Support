
A vBulletin 5 or 6 database will be larger than a vBulletin 3 or 4 database. This is due to trying to optimize speed over data normalization. vBulletin's queries are very quick behind the scenes because large objects are in their own tables. However, this creates redundant data throughout the system.  
  
2.8 GB isn't very large to be honest. Some customers have 200 GB or larger databases without cache or attachments stored in them. The only constraint on your database size are the ones created by your hosting company. This is because larger databases simply require more resources to backup and maintain over time. However, there are some things that may help you control this (in order from least to greatest benefit)…  
## Search Indexing

You can try switching to Full Text search in the AdminCP under Settings → Search Type and rebuild your search index. This may save you space and overhead compared to the content of the words and all the searchtowords_* tables. If you do switch to Full Text, make sure to truncate all the searchtowords_* tables after rebuilding your search index.  
  
## Orphaned Data

In vBulletin 3 and 4, if you deleted a forum before deleting the threads/topics then it could result in orphaned posts. There are tools to remove orphaned topics and posts in the AdminCP under Maintenance → General Update Tools.  
  
Due to the lack of referential integrity within vBulletin there can be orphaned data from previous upgrades, content deletion, and so forth. It doesn't use referential integrity because MyISAM did not support foreign keys. I am told that implementing them now after 20+ years of data changes and development brings its own problems. However, the developers work to enforce data integrity in the PHP code but may miss something.When orphans are found, there are usually tools added to delete them. Either in the AdminCP or in an upgrade step.​  
  
## Cache Control

In vBulletin 6+, you can control the size of your database cache using the core/includes/config.php file. Specifically this section here:  
  

```php
//vB keeps a copy of all items loaded from the cache in local memory.
//Normally this is cleared at the end of a page load, but for some long running
//operations -- particularly command line scripts -- this can cause out of memory errors.
//Setting these will cause vB to clear out old cache entries to mitigate these problems.
//These values will be applied to all caches.

$config['Cache']['maxmemoryitems'] = 10000; //Number of items allowed in memory per cache. 0/null/unset is unlimited
$config['Cache']['memorycheckinterval'] = 1000; //The number of item writes between checks. Lower number means more frequent checks.

// If these are not set they default to 0 .
//$config['Cache']['maxtablesize'] = 500; //When clearing expired cache items if the cache table exceed this size (in Mb) additonal items will be removed. If 0 then cache is unlimited.
//$config['Cache']['maxtabledeletecount'] = 0; //Number of (unexpired) records to remove when the cache tables are too big. If 0 then empty the cache.​
```


If your core/includes/config.php does not have these options in the caching section, it is out of date and should be updated to the latest version. However, the cache isn't really an issue on the majority of sites in terms of database size. Which leads us to…  
  
## Avatars and Attachments
  
This is the data that that can create larger databases than warranted. Binary Large OBjects (blobs) like (images, word documents, PDFs, etc...) really shouldn't be stored in the database as it isn't optimized and MySQL just stores blobs individually in its file space anyway. vBulletin defaults to storing them in the database in the interest of: simplifying the installation process, getting customer's site online quicker, and most customers do not know how to handle unix/linux file systems. This doesn't mean it is the best method.  
  
It is recommended to move these to the file system.  
  
### Custom Avatars

1. Create a directory within core called customavatars.
    - Note: this is just the easiest location. You can put it anywhere you want and used more absolute URLS.
    - However, this directory must be within your web root (i.e. public_html/core) so browsers can access it.
2. Set the permissions on this a minimum of read and write for your PHP User. This would be something like `chmod u+rw customavatars`.
    - If that doesn't work then it is easiest to just set it to `chmod 777 ./customavatars`. Or ask your hosting provider.
3. In the AdminCP go to Settings → User Picture Storage Type.
4. Tell it to move the files by clicking the "Go" button.

### Attachments

1. Create a directory to hold your attachments. The default assumes ./attachments.
2. The easiest to place this in the base of your vBulletin install where index.php is location.
    - This directory does not need to be within your web root (i.e. public_html).
3. Change the permissions on this directory so that it is readable and writable. `chmod u+rw attachments`.
    - If that doesn't work then it is easiest to just set it to `chmod 777 ./customavatars`. Or ask your hosting provider.
4. In the AdminCP go to Attachments → Attachment Storage Type
5. If you just created attachments within your vBulletin Directory then all you should have to do is click the Go button twice.
6. If you put it in a different location then you would have to set the path to your attachment directory before clicking Go a second time.
    - I recommend using a full absolute path here. You can find this by typing `pwd` on unix/linux systems. On Windows you can type `cd`.

Please note that MacOS is a Unix operating system. However, I don't know of any commercial web hosting companies using it for this purposes.
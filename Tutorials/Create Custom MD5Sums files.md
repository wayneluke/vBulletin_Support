This file shouldn't be modified. Each addon should have its own md5_sums_xxxx.php file. They should follow the format of this file and then be placed in /core/includes.  
  
The "asdfrqrt14526" value is an MD5 hash of the file.  
  
So if your addon is in /addons/ then your file could look something like this:  
  

```php
<?php
$md5_sums = array(
'/addons' => array(
'ads.php' => 'F5473073D24F4FE513F7473347538ACB',
    )
);
$md5_sum_softwareid = 'vb5_connect';
$md5_sum_versions['vb5_connect'] = '5.6.0';
$scanRoot = DIR . '/..';
```

There are a number of tools to generate MD5 hashes of files.  
  
Talking to one of the developers, this will not work with all files. Many files created in Windows use a \n\r as the carriage return. These are stripped out by the checker and replaced with a Linux carriage return of \n. Your files would have to use the \n format.
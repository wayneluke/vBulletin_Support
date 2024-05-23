You can control the maximum allowed pixel size of images in your `core/includes/config.php`. This is pixel size only and does not supersede the limits put in place by PHP or MySQL. A new default installation limits the maximum pixel size of images to 6000 X 6000. Any image with more pixels will create an error stating the file is too large.

> For information on large file size uploads see [[Large File Uploads]].

In your `core/includes/config.php` look for these lines to change the values:

```php
// ******** IMAGE PROCESSING OPTIONS ********
// Images that exceed either dimension below will not be resized by vBulletin.
// If you need to resize larger images, alter these settings.

$config['Misc']['maxwidth'] = 6000;
$config['Misc']['maxheight'] = 6000;
```
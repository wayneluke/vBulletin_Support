This script will handle running the vbulletin schedule tasks (see the Scheduled Tasks menu in the Admincp). This avoids having users trigger ajax calls when hitting the site. It also avoids the problem where the scheduled tasks fail to run because there is not enough site traffic to trigger all of the scripts in a timely fashion.

To use do the following

1. Copy the script to your webserver. Preferable outside of the webroot directory.
2. Set the $core variable to the path to your vb core directory
3. Add an entry to your system cron to run the script (recommend running every minute)

`php /path/to/file/vbcron.php`

#tutorial #how-to #command-line-tools

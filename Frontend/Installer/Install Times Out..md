On some servers, the web based installer will time out during the final upgrade steps. We have tried to work around this extensively but sometimes we cannot avoid server limits.

If this happens on your installation then follow these steps:

1. Do not refresh the screen. This will simply start the installation over.
2. In your browser's address bar replace "install.php" with "upgrade.php".
3. Press Return on your keyboard, not Refresh (F5 or CMD+R).

The upgrade script will take over for these final steps and pick up where you left off. If you time out again, then you can press refresh. However, make sure the Address/URL is upgrade.php and not install.php.
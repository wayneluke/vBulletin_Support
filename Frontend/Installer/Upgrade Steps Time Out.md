If an upgrade step times out using the Web Interface, it is recommended to switch to the [[CLI upgrade]] scripts for upgrading. If you cannot gain access to the command line on your server, you can adjust the batch sizes to try and work around this issue.

1. Open the file /core/install/upgrade_options.php
2. Look for the line `'masterslider' => 1.0,`
3. Change the 1.0 to a smaller number like 0.75 or 0.5

Start the upgrade script over. The system will determine where you timed out previously and continue from that point.
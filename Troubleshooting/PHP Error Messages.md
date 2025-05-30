
- **Warning**: Runtime messages about the state of the PHP script. Could be a bad reference to another file or an undeclared variable. This does not stop the operation of the script. In vBulletin, these can generall be ignored.
- **Notice**: Similar to Warning but it is a little more serious in that it could indicate an error.
- **Deprecated**: indicates code or a variable construct that will cause errors in a future version of PHP. These should be reported as bugs in the vBulletin Bug Tracker if they occur on the latest version of vBulletin.
- **Fatal Error**: Kills the script. This would be invalid code or an upstream error. If it indicates a missing function/method, then make sure the server meets the minimum requirements.

## Error Log Location

The location of the error log can often be found in the PHP Info output. You can see this in vBulletin within the AdminCP under Maintenance → View PHP Info. The path will be listed with the error_log variable.
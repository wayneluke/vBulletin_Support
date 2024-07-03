Hello,

This issue is due to bug created when adding 1-Click Unsubscribe to Emails. You can work around it in one of the following manners:

## Skip this step.

You can skip this step by adding this to the URL of upgrade.php:

?version=517a3&step=16

However, I can't guarantee that other steps won't try to send email under this bug.

## Upgrade to an earlier version

1. Go to https://members.vbulletin.com
2. Click the Download vBulletin 6 link.
3. Click the More Download Options button.
4. Change the Version to vBulletin 6.0.4
5. Upload these files and run the upgrade scripts.

Once that is completed you can upgrade to vBulletin 6.0.5.

## Restore your vBulletin 4.2.5 site.

1. Restore your database backup from vBulletin 4.2.5
2. Restore your vBulletin 4.2.5 files.
3. Log into the AdminCP.
4. Go to Settings → Options → Email Options.
5. Set Enable Email to No.
6. Save these options.
7. Proceed to upgrade to vBulletin 6.0.5.

## Wait for vBulletin 6.0.6

We will be releasing the first Alpha of vBulletin 6.0.6 soon. This version will have the fix for this bug within it and allow a straight upgrade.

For reference here is the bug report: https://tracker.vbulletin.com/vbulletin6/issues/VB6-647
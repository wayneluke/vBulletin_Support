```sql
UPDATE `node` set `publishdate`=UNIX_TIMESTAMP('YYYY-MM-DD HH:MM:SS'), `created`=UNIX_TIMESTAMP('YYYY-MM-DD HH:MM:SS'), `lastcontent`=UNIX_TIMESTAMP('YYYY-MM-DD HH:MM:SS'), `lastupdate`=UNIX_TIMESTAMP('YYYY-MM-DD HH:MM:SS')
   WHERE `nodeid`=XXXXX;

UPDATE `node` set `publishdate`=UNIX_TIMESTAMP('YYYY-MM-DD HH:MM:SS'), `created`=UNIX_TIMESTAMP('YYYY-MM-DD HH:MM:SS'), `lastcontent`=UNIX_TIMESTAMP('YYYY-MM-DD HH:MM:SS'), `lastupdate`=UNIX_TIMESTAMP('YYYY-MM-DD HH:MM:SS')
   WHERE `parentid`=XXXXX;
```

```sql
update node
  set
     publishdate = unix_timestamp(date_sub(from_unixtime(publishdate), interval 10 year)),
     created = unix_timestamp(date_sub(from_unixtime(created), interval 10 year)),
     lastcontent = unix_timestamp(date_sub(from_unixtime(lastcontent), interval 10 year))
where nodeid = XXXXX;

update node
  set
     publishdate = unix_timestamp(date_sub(from_unixtime(publishdate), interval 10 year)),
     created = unix_timestamp(date_sub(from_unixtime(created), interval 10 year)),
     lastcontent = unix_timestamp(date_sub(from_unixtime(lastcontent), interval 10 year))
where parentid = XXXXX;
```

node: https://forum.vbulletin.com/node/4501541

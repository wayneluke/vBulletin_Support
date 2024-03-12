
~~~
ALTER TABLE `user` ALTER `birthday_search` DROP DEFAULT, ALTER `passworddate` DROP Default;  
UPDATE `user` SET `passworddate`='1000-01-01' WHERE `passworddate` < '1000-01-01';  
UPDATE `user` SET `birthday_search`='1000-01-01' WHERE `birthday_search` < '1000-01-01';  
ALTER TABLE `user` ALTER `passworddate` SET DEFAULT '1000-01-01', ALTER `birthday_search` SET DEFAULT '1000-01-01';
~~~
#database

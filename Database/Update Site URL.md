The preferred method to update the Site URL settings is to use tools.php. However, if that is not possible then the queries below can update these values. Make sure to update the `@SITEURL` variable to reflect the URL required.  
  
```  
SET @SITEURL ='http://vbulletin/vb5_live';  
UPDATE setting SET value=@SITEURL WHERE varname='frontendurl';  
UPDATE setting SET value=@SITEURL WHERE varname='frontendurl_login';  
UPDATE setting SET value=CONCAT(@SITEURL,'/core') WHERE varname='bburl';  
DELETE FROM datastore WHERE title IN ('miscoptions','options','publicoptions')  
```

#database 
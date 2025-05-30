
/config.php  
  
```  
// add IPs here (include the quotes and separate with comma)  
$ips = array('97.93.33.00', '201e0c:20d7');  
if (in_array($_SERVER['REMOTE_ADDR'], $ips) === TRUE)  
{  
$config['debug'] = true;  
}  
```  
  
/core/includes/config.php  
  
```  
// add IPs here (include the quotes and separate with comma)
$ips = array('97.93.33.00', '201e0c:20d7');  
if (in_array($_SERVER['REMOTE_ADDR'], $ips) === TRUE)  
{  
$config['Misc']['debug'] = true;  
}  
```

#troubleshooting #config_php 

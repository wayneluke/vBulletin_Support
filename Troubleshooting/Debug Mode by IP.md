
/config.php  
  
```  
// add IPs here (include the quotes and separate with comma)  
$ips = array('97.93.33.89', '2600:6c51:467f:88d5:68b4:847d:1e0c:20d7');  
if (in_array($_SERVER['REMOTE_ADDR'], $ips) === TRUE)  
{  
$config['debug'] = true;  
}  
```  
  
/core/includes/config.php  
  
```  
// add IPs here (include the quotes and separate with comma)  
$ips = array('97.93.33.89', '2600:6c51:467f:88d5:68b4:847d:1e0c:20d7');  
if (in_array($_SERVER['REMOTE_ADDR'], $ips) === TRUE)  
{  
$config['Misc']['debug'] = true;  
}  
```

#troubleshooting #config_php 
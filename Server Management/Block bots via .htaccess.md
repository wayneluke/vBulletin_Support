
~~~sh
# Start - Deny and Allow bots by User-Agent  
SetEnvIfNoCase User-Agent "bot|crawler|fetcher|headlesschrome|inspect|search|spider" bad_bot  
SetEnvIfNoCase User-Agent "bingbot|duckduckgo|googlebot|yahoo" good_bot  
Deny from env=bad_bot  
Allow from env=good_bot  
# End - Deny and Allow bots by User-Agent
~~~

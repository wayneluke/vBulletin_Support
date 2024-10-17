Original: https://forum.vbulletin.com/node/4496192

It's up and working! This is a very good solution to recommend to people in the same boat, if vbcloud prefers not to handle the redirects. Set up a free account at cloudflare, and set up the domain there (don't need to move it there). Have it pull the DNS records from where they are now. Set up a redirect rule, like this:  
  
Request URL:  
`https://www.ninjette.org/forums/*`  
  
Target URL:  
`https://www.ninjette.org/${1}`  
  
and make sure that in the Cloudflare DNS records, the CNAME for the vbulletin site is proxied (along with any of the A records for the main IP's, but not sure if that's critical). Turn off proxying for pretty much every other DNS record, as it can cause issues with things like other mail servers. (Proxy these 1 by 1 until you're sure that there isn't an issue) Then go to where your domain is hosted, and point the DNS servers to the Cloudflare hosted ones, and wait a little bit.  
  
Now links that are showing up either in search results or anywhere else like this: [https://www.ninjette.org/forums/show....php?p=1208419](https://www.ninjette.org/forums/showthread.php?p=1208419)  
  
get successfully rewritten to [https://www.ninjette.org/showthread.php?p=1208419](https://www.ninjette.org/showthread.php?p=1208419) ,  
which vbulletin then successfully bumps it to [https://www.ninjette.org/node/309525#post1854517](https://www.ninjette.org/node/309525#post1854517)  
  
At this point I could probably remove the replacement variable, but there's no real reason to other than simplicity. If it is pointing people to the more correct link already, it's that small bit faster than having Cloudflare have to do it first.

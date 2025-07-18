
Here are the instructions to create redirects.  
  
**For Self-Hosted Licenses:**  
  
The easiest way to do this is via the .htaccess file. Add these two lines under `#RewriteRule .* https://%{SERVER_NAME}%{REQUEST_URI} [R=301,L]`:  
  

```.htaccess
RewriteCond %{HTTP_HOST} ^domain.com [NC]
RewriteRule ^(.*)$ http://www.domain.com/$1 [L,R=301]
```


Replace domain.com with your domain name.  
  
**For Cloud Licenses:**  
  
You will have to create a URL redirect for your domain at your registrar.  
  
Examples:

- [https://www.godaddy.com/help/forward...y-domain-12123](https://www.godaddy.com/help/forward-my-godaddy-domain-12123)
- [https://www.namecheap.com/support/kn...-for-a-domain/](https://www.namecheap.com/support/knowledgebase/article.aspx/385/2237/how-to-set-up-a-url-redirect-for-a-domain/)
- [https://www.enom.com/blog/redirectin...ain-made-easy/](https://www.enom.com/blog/redirecting-a-domain-made-easy/)
- [https://support.hover.com/support/so...ain-forwarding](https://support.hover.com/support/solutions/articles/201000064747-managing-domain-forwarding)
- [https://developers.cloudflare.com/ru...ate-dashboard/](https://developers.cloudflare.com/rules/url-forwarding/single-redirects/create-dashboard/)

Unformatted:
```
- https://www.godaddy.com/help/forward-my-godaddy-domain-12123
- https://www.namecheap.com/support/knowledgebase/article.aspx/385/2237/how-to-set-up-a-url-redirect-for-a-domain/
- https://www.enom.com/blog/redirecting-a-domain-made-easy/
- https://support.hover.com/support/solutions/articles/201000064747-managing-domain-forwarding
- https://developers.cloudflare.com/rules/url-forwarding/single-redirects/create-dashboard/
```
  
**For Cloud Licenses with a domain name through vBulletin:**  
  
The redirect should be automatically created when you sign up.

vBulletin Cloud users must use a CNAME Redirect in order to use a custom domain. If they purchase their domain name via vBulletin, this will be created automatically. If they are using a previous domain through a third-party registrar, then they must manually create this redirect.

## What the CNAME does

A CNAME redirects a sub-domain to a different location or server and allows the browser to keep the website's identity in the address bar. This makes branding easier for the customer and allows them to use different subdomains for different purposes.

In the case of vBulletin Cloud, this will redirect the end user to a url like `0a1234567b12-001234.vbulletin.net`

### What is a Sub-domain

This is any portion of a domain name before the TLD. Take the TLD of example.com for example. Common sub-domains that can be used for it are `www.example.com, mail.example.com, ftp.example.com, shop.example.com forums.example.com, etc...` Any text can be used as a sub-domain.

### Frequently Asked Questions

- Can I use an A Record - No. This is not allowed. We do not maintain a DNS server for vBulletin Cloud and do not use Static IP addresses for Cloud services.
- How can I use example.com instead of subdomain.example.com? - We do not explicitly support this with third-party custom domains. A redirect will need to be created via the Domain Registrar, a service like CloudFlare, or by using .htaccess on your existing webserver.

## Canned Response

To try and provide some guidance, we have a canned response that provides basic instructions and directs customers to contact their registrars if they have problems. Unfortunately, each registrar can implement configuration differently.

```
vBulletin Cloud does not provide a DNS service. Due to this, you will not need to make changes to your A or MX Records. Instead, you will redirect the subdomain of your choice to the URL provided when you sign via a CNAME Redirect. Using a CNAME Redirect allows you to remain in control over your custom domain name and use different subdomains for other services.

Managing your CNAME Record

Updating your CNAME record allows you to point your custom domain (e.g., myvbulletincloud.com) to the sub-domain assigned to your account. To do this, you’ll need to visit your domain name registrar and update the records on their site. You must redirect a sub-domain if you also use the domain for a regular site (e.g., forums.myvbulletincloud.com).

To add a CNAME record:

1.	Login into your domain name registrar’s management panel.
2.	Select the domain name you want to manage.
3.	Choose Manage Host Names, Host Name Records, or DNS Records
4.	Update the CNAME record to point to the subdomain assigned to your forum. This address looks like a2398af32123.vbulletin.net. Your onboarding email shows the address.
5.	Save your records.
6.	Wait for the records to propagate. Propagation can take up to 24 hours.

Specific Registrars

Individual registrars will have their own steps to follow to set this up, some more complex than others. Here is a list of various registrars and hosting providers. If your provider isn’t listed, you will need to contact them directly for help.

Registrars

•	123-Reg: http://www.123-reg.co.uk/support/answers/Domains/Domain-Configuration/how-do-i-set-up-a-cname-record-on-my-domain-name-1198/
•	Namecheap: https://www.namecheap.com/support/knowledgebase/article.aspx/9646/10/how-can-i-set-up-a-cname-record-for-my-domain
•	GoDaddy: https://www.godaddy.com/help/manage-dns-records-680
•	Register.com: http://support.launchrock.co/knowledgebase/articles/137754-register-com-cname-record-instructions
•	Enom (and its affiliates): http://www.enomcentral.com/help/dnsdemo.asp
•	Network Solutions: http://www.networksolutions.com/support/cname-records-host-aliases/

Hosting Providers

•	IONOS: https://www.ionos.com/help/domains/configuring-cname-records-for-subdomains/configuring-a-cname-record-for-a-subdomain
•	Hostgator: http://support.hostgator.com/articles/cpanel/how-to-change-dns-zones-mx-cname-and-a-records
•	HostMonster: https://my.hostmonster.com/cgi/help/cname

If you need help finding your vBulletin Cloud subdomain, contact vBulletin Support.

Contact your registrar or hosting provider if you need help changing your CNAME record.
```


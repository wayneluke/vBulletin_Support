Once your site is approved for Advertising by Google, you need to enable this in vBulletin.

## Using Auto Ads

Once your account is verified and your site is added to your site list at Google, you can use Auto(matic) Ads from Google. This requires that you add text to the head element of every page. To do this, follow these steps:

1. Log into you vBulletin AdminCP.
2. Navigate to Settings → Options → Search Engine and Ad Integration.
3. Paste the code provided by Google into the Head section of these options.

Example Code:
```javascript
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1234567890123456" crossorigin="anonymous"></script>
```

When using Auto Ads, Google will scan your page and automatically insert ads where it feels they will perform the best. Auto Ads will work alongside any Ad Units that are manually placed on your vBulletin pages. If you do not want to use Auto Ads, you must turn them off in Google's site management interface.

## Placing Ad Unit on Pages

You can also create ad units within Google's Adsense interface and show individual ads across your site. To place these on your pages, use Site Builder.

To place an ad follow these steps:

1. If necessary, enable Site Builder by clicking the Edit Site toggle next to your username.
2. Navigate to the page that you want to add the Ad to. 
3. Click "Edit Site".
4. Drag the Ad module to the location you want the unit to appear.
5. Click the Edit icon for the module.
6. Click Edit next to "Config Ad"
7. Click "Add New Ad"
8. Paste your Ad Unit Code into the ad.
9. Give the ad an identifiable name.
10. Mark the Ad as active.
11. Save the Ad.
12. Save the Module.
13. Save the Page.

### Reusing Ads

Alternatively, you can choose a pre-existing ad unit with the Ad module. Simply select your existing ad unit from the list shown.

### Global Ads

If you would like to have an Ad shown on all pages, place it in one of the global sections on the page. There are two Global sections per page and are labeled as such. Global sections are also shown with a blue background while editing a Page.

Example Code:
```javascript
script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-1234567890123456" crossorigin="anonymous"></script>   <!-- Homepage Leaderboard -->   <ins class="adsbygoogle"   style="display:inline-block;width:728px;height:90px"   data-ad-client="ca-pub-1234567890123456"   data-ad-slot="1234567890"></ins>   <script>   (adsbygoogle = window.adsbygoogle || []).push({});   </script>
```


Reference: https://support.google.com/adsense/answer/9189015?hl=en&ref_topic=28893&sjid=16341883433310115878-NC
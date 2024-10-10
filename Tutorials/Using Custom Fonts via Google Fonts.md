
Find your font.  Using Suse in this example.
Create new template. 
Copy the Google Font Embed code into the template.
```
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=SUSE:wght@100..800&display=swap" rel="stylesheet">
```

Connect your new custom template to header_head hook.

use font in style variables or custom CSS. The Google Embed page will show examples:

```
// <uniquifier>: Use a unique and descriptive class name
// <weight>: Use a value from 100 to 800

.suse-<uniquifier> {
  font-family: "SUSE", sans-serif;
  font-optical-sizing: auto;
  font-weight: <weight>;
  font-style: normal;
}
```


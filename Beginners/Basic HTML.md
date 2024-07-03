Sometimes, you want to format your content using HTML. This will be particularly handy in many of the AdminCP fields. For example creating ads, notices,  holidays, ranks, and other locations require a basic knowledge of HTML. 

If you want a full class on using HTML and all of its tags, I recommend visiting the HTML Tutorial at [W3Schools](https://www.w3schools.com/html/default.asp)

However, here are a few basic tips that will get you started.

1. Do not use the following tags in your code: doctype, head, body, title. vBulletin will automatically create these tags when it renders each page.
2. If you are trying to integrate third-party code into the header or footer of your pages, then enter it into Settings → Options → Search Engine and Ad Integration. There are fields there for each of these locations.
3. Please note the structure of each tag. Some tags require to be closed with a corresponding tag. Some like img do not.

## Headers

Headers allow you to break up a long page of text to make it easier to read. There are six levels of headings available in HTML. You would use them with the `<h#>` tag where # is equal to 1-6.  These should be used in order when creating sections so that pages are readable. You don't want to skip from an H1 to H4. In vBulletin the Page Title module is always an H1.

Example: `<h2>Your Privacy</h2>`
## Paragraphs

HTML does not respect new line characters so to make content easy to read, you should include paragraph tags. This tag is `<p>` and should be closed with `</p>`. You will generally use these tags in Static HTML blocks, custom phrasing (i.e. privacy policies), longer notices, and descriptions.

Example: 
```
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eu libero ac magna laoreet lacinia. Duis augue dolor, ultrices vitae condimentum eget, bibendum et quam. Mauris lacinia justo arcu, sed congue tortor sagittis sed. Suspendisse posuere lorem non vehicula lacinia. Duis at lobortis tellus, non pharetra arcu.</p>
```
## Inline Text


## Images


## Adding CSS to tags



- Click Edit Site
- Click "New Page"
- select the Layout tab and set the layout to "Full"
- add the page title module.
- Add a search module.
  - Name it "Latest Topics"
  - Set these key options:
    - Date Range: 30
    - Sort by: Date - Last Update
    - Order: Descending
    - View: Topics
- Save Page.
  - Page Name: Latest Topics
  - Page URL: latest-topics
  - Template Name: latest-topics

## Some Cleanup

The resulting page is 
- Optional CSS
  - Remove the header. 
    - Search Modules don't have the option to hide the header. You can remove it with some CSS. Right-click the header on the page and chooose "Inpsect". 
    - Look at the source code and a few lines above the cursor there should be an id with widget_XXX. In the highlighted example code below, this is widget_160. (insert image)
    - Using this code we can add some CSS to remove the header from the display. 
        - Add the following code to your css_additional.css template: `#widget_160 .widget-header{ display: none}`
	- Remove Border
		- Using the same ID, you can remove the border of the module with this CSS: `#widget_160 {border: 0px;}`
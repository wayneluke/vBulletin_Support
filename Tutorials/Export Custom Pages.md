Custom Page Product.  
  
- Put your site into debug mode.  
- Using Site Builder create your Page(s)  
- In the AdminCP go to Products & Hooks -> Manage Products  
- Click "Add/Import Product"  
- Fill out the Add New Product Form.  
- Product ID should be unique all lower case and no spaces. Use dash instead of space. I used `custom_pages`.  
- Title is the value you'll see in the AdminCP. I used `Custom Pages`.  
- Version is just the version that you want it to be. I used `1.0`  
- Description is used to describe the product in the future.  
- The last two are only useful if you're going to distribute your product.  
  
Now you can add stuff to your product. For the next steps, you'll need a database UI like phpMyAdmin.  
  
- On the front-end of your site, go to your custom page.  
- Select "View Page Source" in your browser.  
- Scroll to or Find the Body tag.  
- Within the class attribute look for pageXX. The XX is the id of your page.  
- Run this query: `select * from page where pageid=XX`  
- Edit this record.  
- Update the title and meta description fields.  
- Update the product field to be the name of the product that you created before. I used `custom_pages`  
- Make a note of the pagetemplatid value.  
- Make a note of the routeid value.  
- Run this query: `select * from pagetemplate where pagetemplateid=YY'. YY should be the pagetemplateid from the previous query.  
- Update the record so the product is your custom product (i.e. `custom_pages`).  
- Run this query: `select * from routenew where routeid=ZZ`. ZZ should be the routeid of the page from the query above.  
- Update the record so the product field is your custom product (i.e. `custom_pages`)  
  
Notes:  
  
- If you have custom templates, you can update the product for them in the AdminCP by editing the template in Debug Mode.  
- If you have custom phrases, you can update the product for them by editing the master phrase in the AdminCP while in debug mode.  
  
Once everything is assigned, then in the AdminCP go to Products & Hooks -> Manage Products. Select "Export" for your custom product. This will create a `product_custom_pages.xml` file in your browser's download directory.  
  
This XML file can be imported into other installations to recreate the pages.  
  
If you have custom PHP in a core/packages directory, you can place this XML file in the /core/packages/your_package/xml directory.

#tutorial #how-to 
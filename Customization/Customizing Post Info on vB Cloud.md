Editing the default templates is not allowed on vBulletin Cloud. You can use limited custom templates on the system.  
  
**To show Custom Profile Fields in the Post Info:**

1. Log into the AdminCP
2. Go to User Profile Fields -> User Profile Field Manager.
3. Edit a field you want to show.
4. Set the "Show on Post" to Yes.
5. Repeat for all other fields.

**To change the width of the Post Info:**

1. Log into the AdminCP.
2. Go to Styles -> Style Manager
3. Select Style Variable Editor from the Choose Action drop down of your style.
4. Scroll down to Posts and Comments in the Style Variable Editor and click on this.
5. Select post_user_info_width.
6. Change the pixel value.
7. Save the Style Variable.

You can use the other style variables in this section to change the look of other aspects as well.  
  
**Using Custom CSS:**  
  
You can use the css_additional.css template found in Site Builder in the Styles tab to add your own custom CSS to elements.  
  
**Using Template Hooks:**  
  
vBulletin Cloud users can implement limited Template Hooks. These can include the vBulletin markup tags of <vb:every> (loop processing), <vb:group>, <vb:stylevar>, <vb:comment>, and <vb:literal>. These can allow you to display additional information in the Post Info using the conversation display hooks. We can help you with these templates if you need it.
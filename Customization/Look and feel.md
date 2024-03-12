 You can customize the styles and create your own in the Style Manager within the AdminCP.

## Style Variables

To access the Style Variables in the AdminCP, go to `Styles -> Style Manager` then select `Style Variable Editor` from the Choose Action drop down on the style you want to edit.

Style Variables are different variables applied to specific areas on the site to control placement, colors, fonts, and other aspects of the look and feel of a site. The system uses the Style Variables to build the CSS for each Style provided. Any changes here will be preserved through upgrades.

## css_additional.css Template

You can add your custom CSS to the css_additional.css template. This

CSS is loaded last so will override any previous CSS. You can access the template list by clicking on the <<>> button for your style in the Style Manager or by choosing "Edit Templates" from the Choose Action drop down. This style ships empty on most styles and is designed for the specific purpose of customizing your site. You can use any CSS here however, you will need to make sure any external resources are available to the browser.

This template is also available in Site Builder by clicking the Style button in the Site Builder menu and then the CSS tab.

## Templates

You have full access to the templates. This functionality allows you to revert changes and maintains a history. For the most part, your changes will be maintained through upgrades. However, if the upgrade system cannot merge changes in the default templates with your custom edits, it may harm functionality of the software.

## Additional Notes

Icons in vBulletin are displayed via SVG. These have their own svg CSS template in the template list and a set of "icon" style variables to change their colors globally. If you wish to change the status icons for individual forum channels, you can do this in the Channel Manager under Channel Management. Edit your forum channel and you can upload new icons for each channel.
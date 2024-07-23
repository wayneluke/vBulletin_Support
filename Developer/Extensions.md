**Products & Extensions**

  

vB5 templates need to get data from the core, and they do this by making API calls.

  

There are many API classes such as User, Site, Node, Page etc, and they all reside in the core/vb/api folder.

  

The concept of API extensions was developed to allow developers a way to add their own custom API calls to their products, or even to modify the results of core calls. 

  

This is achieved by the use of “packages”.  

  

Each product (modification) should have its own folder in the core/packages directory, and inside that sit the and required folders and files, for example, api, xml etc.

  

  

The xml folder is where standard xml files for the product should reside (such as cpnav files, bitfield files, hook files etc.

  

The db folder is where any custom asserter queries should be located.

  

The api folder is where the api extension classes for the product are located.

  

Note that if a product has no need of any of these, i.e. its function can be achieve purely by the upload of a product xml then it is not necessary for it to have a packages folder. However, as will be detailed later, it could be an advantage, as you can set a package to auto-install a product xml it contains.

**API Extensions**

When any API call is made, several things happen, in order.

  

First, an attempt is made to call the class/method from the core API. If this succeeds, the returned value is stored, otherwise the overall result is set to null.

  

Next, the loaded extension classes for the called class are checked (in order) and if any of them contain the same method, that method is called. 

  

The stored result from the previous call is passed to the method as the first parameter. If the method returns a result (other than null) then the overall stored result is updated, otherwise it remains as it was.

  

This is repeated for each extension of the same class. Once all relevant extensions have been called, the overall result is passed back as the final result of the API call.

  

  

An example of how this works is as follows;

  

There is a method in the API user class called fetchusername(), you pass it a userid, and it returns the username for the userid. So lets assume that when we pass it userid 1, it returns the value “Admin”.

  

We now add three new products, each with API user extensions defined in them, and in each product extension we define our own version of fetchusername. We set them to run in order p1, p2 and then p3.

  

In product 1, we code this to check the userid, if its equal to 1, we return “User 1”, otherwise we return “Qwerty”.

  

In product 2, we check if the userid is equal to 2, if yes, we return “User 2”, otherwise we do nothing.

  

In product 3, we check the current result, if its set to “Qwerty”, we return “Unknown”, otherwise we do nothing.

  

If we now call fetchusername(1), we will get “User 1” returned.  This is because product 1 saw userid 1 and returned “User 1”, overriding the original call that returned “Admin”. The other products did not return anything to override this.

  

If we call fetchusername(2), we will get “User 2” retuned (via product 2), product 1 will have returned “Qwerty” but product 2 then overrides this again.

  

If we call fetchusername(3) we will get “Unknown” returned, product 1 overrides “Admin” with “Qwerty”, product 2 does nothing, product 3 sees the current result is “Qwerty” and returns “Unknown”. 

  

Note that that it should be possible to create your own API extension class that isn’t related to any of the core classes. When ever an API call is made specifying your custom class and method, the system will follow the same process, but obviously no core method will be called first as none exists, but it will then continue and try any custom classes that match.**Extension classes**

  

All extension classes should follow certain rules. The basic set-up of a class is shown below ;

  

**class** Myprod1_Api_User **extends** vB_Api_Extensions

{

**public** $product = 'myprod1';

**public** $version = '5.0.0';

**public** $developer = 'Paul Marsden';

**public** $title = 'Test 1 Module for vB5';

  

**public** $minver = '5.0.0 Alpha 11';

**public** $maxver = '5.0.1';

  

**public** $infourl = 'www.test.com/myprod1';

**public** $checkurl = 'www.test.com/check.php?id=myprod1';

  

**public** $AutoInstall = 0;

**public** $extensionOrder = 9;

  

**public** **function** myMethod($prev, $param1, $param2)

{

vbstop($**this**->$product." : User : $prev, $param1, $param2", 0, 0);

}

}

  

This class belongs to the package (product) called myprod1, and this file is for extensions to the core API ‘User’ class.  It contains a new method (myMethod). The variously defined variables are listed below. 

  

|   |   |
|---|---|
|**$product**|The product id – identifies the product and should be the same as the package name.|
|**$version**|The current version number of the class. <br><br>For information only.|
|**$developer**|The name of the developer.<br><br>For information only.|
|**$title**|The title of the extension class.<br><br>For information only.|
|**$minver**|The minimum vB version that can use this class.<br><br>If your vB version is less than this value, the class will not be used.|
|**$maxver**|The maximum vB version that can use this class.<br><br>If your vB version is greater than this value, the class will not be used.|
|**$infourl**|URL link for information on the class / product.<br><br>For information only atm.|
|**$checkurl**|URL of the version checker for this class / product.<br><br>For information only atm.|
|**$extensionOrder**|This value is used by vB to determine in what order identical extension methods are called.<br><br>The system default value is 10.|
|**$AutoInstall**|Auto install specifies that when the extension class is first loaded, the system should check for an associated product in the XML folder. If that product exists, and isn’t already loaded, it will be imported.|

  

**Custom Function (Note)**

  

For the methods in any extension class, as previously mentioned, the current result value of the call is passed into each extension method as the first parameter, and then each of the original arguments are passed in after that – so every extension method needs to take this into account.

  

The first parameter is always the current value of any previous calls (or null if not previously set).

  

So if you make an API call to somefunction(param1, param 2, param 3), then you must remember to define it in your extension as 

  

function somefunction($current, $ param 1, $ param 2, $ param 3)

  

$ param 1, $ param 2 & $ param 3 will contain the values of the original arguments passed to the call, while $current will contain the current value of any previous calls (to either the core function or any previous API extensions). 

  

  

**Autoinstall**

  

As mentioned above, if you set autoinstall to 1 in an extension class, then when that class is first loaded it will check if the product associated with the class is loaded, if it isn’t, it will check if one exists in your xml folder, and if it does, it will auto import it.  A few things to note. 

  

An extension class will not be loaded if nothing makes a call to the class. So if you only have autoinstall set in a rarely used class, its probably not going to be loaded.

  

This autoinstall can also be used to save people having to import a product themselves, even if your product doesn’t need any extensions as such. You can include the product xml in an extension package, and create a dummy API class that simply defines the basic variables, with autoinstall set to 1, and this will cause vB to install your product when that dummy extension is loaded.

  

The options API is generally always the first API class called, so you just create a dummy options class

  

**class** Myprod2_Api_Options **extends** vB_Api_Extensions

{

**public** $product = 'myprod1';

**public** $version = '5.0.0';

**public** $developer = 'Paul Marsden';

**public** $title = 'Test 1 Module for vB5';

  

**public** $minver = '5.0.0 Alpha 11';

**public** $maxver = '5.0.1';

  

**public** $infourl = 'www.test.com/myprod1';

**public** $checkurl = 'www.test.com/check.php?id=myprod1';

  

**public** $AutoInstall = 1;

**public** $extensionOrder = 9;

}

  

This then does nothing other than trip the autoinstall check to load your product.

  

  

**Product XML Name**

  

One thing worth pointing out is that the standard for product xml filenames has changed in vB5.

  

In vB3 & vB4 they were called product-myprodid.xml – in vB5 the standard is product_myprodid.xml

  

The difference if you didn’t spot it is the use of underscore ‘_‘ rather than a dash ‘-‘.

**Extensions List.**

  

You can view all custom extensions in the ACP by choosing the List Extensions option.

  

  

  

This will display all detected extension classes, even if they are not compatible or active.

  

Those classes highlighted in green are active and compatible, so **will** be used. The class highlighted in red is active, but not compatible (with Alpha 33) so **will not** be used. The blue class is complatible but not active, it **will not** be used. 

  

Details for the various columns are give below, most values are taken from the defined variables in the class.

  

|   |   |
|---|---|
|**Package**|This is the header for a section, showing the package name (i.e. the package directory name).|
|**Title (Version)**|The title and version of the extension class.<br><br>Hovering over the version will display the developer.|
|**Class**|The name of the extension class.|
|**Active**|Is the extension active. If an extension is associated with a product, and that product is disabled, active will be No.|
|**Min Version**|The minimum vB version required for this class.|
|**Max Version**|The maximum vB version this class will work with.|
|**Compatible**|Is the extension compatible with the currently running vB versions based on the Min & Max version values.|
|**Order**|The execution order of the extension class.|

  

**Calling the API**

  

To call the API from templates you use the vb:data tag

  

{vb:data varname, apiClass, methodName, argument1, argument2}

  

  

For example, this is the call in the footer template that gets the styles

  

**{vb:data styles, style, fetchStyles, 1, 1}**

  

Which is then used to display the style choices 

  

<**select** class="**stylechooser**">

<**vb:each** from="**styles**" value="**style**">

<**option** value="**{vb:raw style.styleid}**"<**vb:if** condition="**$style['styleid'] == $vboptions['styleid']**"> **selected="selected"**</**vb:if**>**>{vb:var style.title}**</**option**>

</**vb:each**>

</**select**>

  

  

You can also call one API from another (in php);

  

$userApi = vB_Api::instance('user');

  

$userInfo = $userApi->fetchUserinfo($userid);

  

or

  

$modGroup = vB_Api::instance('usergroup')->getModeratorGroupId();


  

Much of the presentation work in vB5 is done in the templates, which have much more extended functionality than in vB4. For instance they can set variables, and they can retrieve data by making calls to the core via the vB5 API. Templates can also load other templates directly, and this is where template hooks come into play.

  

Template hooks allow you to load your own custom template at the point they are located, allowing you to do additional processing and output additional display items, a sort of cross between the old vB4 template hooks, which were just a variables that got displayed, and the old php hooks which did processing.

  

  

Template hooks are defined in the Admin CP, and are associated with products, much like plugins were in vB4. You access them via the Products & Hooks section. They allow you to insert custom template calls where they are located.

  

|   |   |
|---|---|
||Manage Hooks is for Template Hooks<br><br>  <br><br>Manage Products does the same as in vB4<br><br>  <br><br>List Extensions will list all active and inactive extensions found.|

  

  

Once you click on this you will see a list of your installed hooks, just like plugins in vB4

  

  

  

  

**Hook Properties**

  

Template hooks have the following properties you can set or edit

  

Those properties are listed in the table below.

  

|   |   |
|---|---|
|**Product**|This is the product that the hook is associated with, it is a dropdown list.|
|**Active**|Enables or disables the hook.|
|**Hook Location**|This is the name given to the hook in the template its located. It is a dropdown list.|
|**Title**|The title of the hook. This is purely for reference, it isn’t used for anything.|
|**Execution Order**|Multiple hooks attached to the same location will be run in execution order, the default is 10.|
|**Template Name**|The name of the template to be loaded, this can be a custom template or an existing template.|
|**Hook Arguments**|This is a list of variables to be passed from the calling template to the called template, rather like you would register variables to be passed in vB4. Each variable assignment goes on a new line as "varname=var-to-pass". E.g. userinfo=userinfo or userid=userinfo.userid. Only variables that exist in the calling template can be passed.<br><br>For array elements you use the dot syntax.|

  

  

**Import & Export**

  

Hooks are imported and exported as part of a product in the normal manner using the product manager.
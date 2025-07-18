This document assumes that you are running your code in the context of a vBulletin page, for instance by adding code via a {vb:js} call in a template or adding it via the Header Code or Footer Code options.  

## The vBulletin AJAX function

The main way to call the vBulletin API is with the vBulletin.AJAX function.  This will access the vBulletin server with the permissions of the currently logged in user and will automatically handle the security token that prevents posts from third party sites.

At its simplest you need to call the API function with the name of the function and the parameters called using the parameter names.  Optional parameters in the PHP signatures don't need to be specified but required parameters must be provided.  Order doesn't matter here.

  
```javascript
vBulletin.AJAX({

	call: '/ajax/api/node/getNode',
		data: { 
			'nodeid' : 6  
		}
});

```

This node 6 but isn't especially useful as written because you presumably want to do something with it.  Which you can do by providing a success callback.

  
```javascript
vBulletin.AJAX({

	call: '/ajax/api/node/getNode',
		data: {
			'nodeid' : 6  
	},

	success: (result) => 

	{
		alert(result.title);  
	},

});
```

The variable passed to the success function in the result of the vBulletin Api function (translated to a Javascript object).  As the name suggests this is only called if the API call succeeds. If an error occurs that will be handled by default by displaying an error dialog to the user with an error message corresponding to the error return.  By default the title of the dialog says "Error" but you can provide a more explanatory title for clarity.

  
```javascript
vBulletin.AJAX({

	call: '/ajax/api/node/getNode',
		data: {
		'nodeid' : 6  
	},

	success: (result) => 

	{
		alert(result.title);  
	},

	title_phrase: 'my_error_phrase',
});
```
  

The title_phrase is a vBulletin phrase defined in the admincp and will be used as the title for the error dialogs.

## Other AJAX calls.

In addition to the API functions you can call the front end controllers 

```javascript
vBulletin.AJAX({
	call: '/mycontroller/some-controller-action',
	data: {
		title: 'mytitle',
		text: 'some text value',
	},
}
```

This will call the the vB5_Frontend_Controller_Mycontroller class function "actionSomeControllerAction(...)".  In this case the data parameter will be posted as form data that can be read via the php $_POST array in the controller code.  Any JSON output from the controller will be passed to the success function as the result parameter.
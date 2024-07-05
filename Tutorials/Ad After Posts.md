Using a custom template with your ad unit (i.e. Google Ad Sense code) and a template hook allows you to easily insert ads between posts.
## Creating your template

1. In the admincp go to Styles -> Style Manager
2. On the Choose Action... drop down, select Add New Template
3. Give your new template a unique name. I am going to name mine "ad_after_post"
4. Add your HTML code to the template. I am using this code:
	`<img src="https://www.adspeed.com/placeholder-728x90-Test.gif" />`

![[ad_after_post.png]]

> Note: If you are on vBulletin Cloud, you will need to make sure the template type is set to Limited for this to work.
## Attach to Template Hook

1. While still in the AdminCP, go to Products & Hooks → Manage Template Hooks.
2. Click "Add New Hook" at the bottom.
3. Choose a Hook Location. Since I want my ad under posts, I choose "conversation_post_below"
4. Give your new hook a title. I just choose the same name as the template, 'ad_after_post'
5. Add in the title of your template.
6. Click Save.

The form should look like this before saving:
![[add_template_hook.png]]


## The Current Result

This will show an ad after every post. 

![[ad_initial_results.png]]

## Refining the Result

Showing an ad after every post may be overwhelming. This can be limited with the <vb:every> markup tag. 

>

Let's go back to our custom template and add this. In the AdminCP go to Styles → Style Manager. Select "Edit Templates" for your style. Double click on your custom template to edit it.

My new template code looks like this: 

```html
<vb:every index="post" count=3 start=0>
<li>
	<img src="https://www.adspeed.com/placeholder-728x90-Test.gif" />
</li>
</vb:every>
```

In this code, 
- `index` is a variable that I am passing from the template hook. We will set that up next. 
- `count` is how many times I skip before displaying. In this case it will be every 3 replies. 
- `start` is when to start counting. The listing of posts actually starts at 0 internally.

I also added `<li>` tags to make it format a little better for browsers. Here is what the updated template looks like in the AdminCP:

![[updated _template_for_hook.png]]

## Updating the Hook

Since the template doesn't know what the post variable is referencing in the <vb:every> tag, nothing should be showing at the moment. To fix that we have to edit our Template Hook.

1. Go to Products & Hooks → Manage Template Hooks again.
2. Click the Edit link for your custom hook.
3. In the Hook Arguments field add this text: `post=postIndex`. This is case sensitive and it tells our hook what value to look at for the index. 


## The Final Result

After these changes, the ad looks like this:

![[ad_final_results.png]]

Introduced in version 4.0 the vBulletin Markup system includes a rich of tags and shortcodes for creating dynamic [[templates]]. The template syntax was designed to retrieve and format information from vBulletin without having to write PHP Code. Used alongside HTML, CSS, and Javascript, it allows a developer to create dynamic experiences within vBulletin. vBulletin's Template Syntax will take into account the user's settings such as chosen Style and Language

When saving your templates, the vBulletin engine will convert the shortcodes/methods and tags into the appropriate PHP code for runtime purposes.

## vb:tags

All vb:tags make use of the vb namespace for ease of identification and parsing.

The following tags are available:

### literal

Any code inside vb:literal tags will be treated as plain HTML. No shortcode or vb:tag markup will be evaluated.

**Example**

`<vb:literal>misc code</vb:literal>`

### if

If the expression specified in condition is true, the contents of the vb:if tags will be output, otherwise nothing will be output.

`<vb:if condition="condition">true result</vb:if>`

### elseif

Used in conjunction with vb:if, this allows a secondary condition to be checked and the true result to be output if the condition is met.

`<vb:elseif condition="condition" />true result`

### else

Used in conjunction with vb:if, the true result will be output if the vb:if condition failed, and so did any vb:elseif checks.

`<vb:else />true result`

### comment

In cases where a comment is necessary but the usual <!-- comment --> syntax is undesirable, the vb:comment tag allows its contents to be completely removed upon compiling, so they will not be delivered to the browser. Useful for internal commenting.

`<vb:comment>a comment</vb:comment>`
### each

This tag will iterate through an existing array, in a similar manner to foreach.

`<vb:each from="array" key="key" value="value">...</vb:each>`

## Shortcodes (curly methods)

The general syntax here is

`{vb:method arg1[, arg2...]}`

Inside shortcodes, variables can be accessed without using a separate set of surrounding braces. For example,

- Do this: `{vb:method variable}`
- Not this: `{vb:method {variable}} // unneccessary extra braces`

### Handling Variables

#### var

Variables accessed in this manner are 'made safe' by being run through htmlspecialchars() as they are output.
  
Format: `{vb:var variable}`

To access array elements, use a dot operator, rather than using the standard PHP array format:

`{vb:var variable.foo} // accesses htmlspecialchars($variable['foo'])`

`{vb:var variable.$varkey} // accesses htmlspecialchars($variable[$varkey])`
#### raw

> **Raw variables should be used with caution. They main contain unsanitized HTML code.**

To access variables in the legacy fashion. Use the following syntax: `{vb:raw variable}`

This is equivalent to simply accessing $variable in the legacy syntax. No sanitization is applied to the variable. Accessing array elements uses the the same dot operator as {var}.
#### set

Format: `{vb:set var, value}`

{vb:set} is used to assign additional variables during the execution of a template.

| Position | Parameter | Type | Required | Description |
| :-------:| :-------- | :--- | :------: | :---------- |
| 1 | variable | string | Yes | The name of the variable being assigned |
| 2 | value | compilable code |Yes | The value being assigned |

- Declaration: `{vb:set name, 'Adrian'}`
- Template code: `The value of $name is {vb:raw name}.`
- The above example will output: `The value of $name is Adrian.`

#### data

{vb:data} is used for setting an API class and method return value to the given variable.  It can also be used to get information from your own [[Custom API]] and display the data in a template.

|   |   |   |   |   |
|---|---|---|---|---|
|**Parameter Position**|**Parameter** **Name**|**Type**|**Required**|**Description**|
|1|variable|string|Yes|The name of the variable being assigned|
|2|controller|string|Yes|The name of the called controller|
|3|method|string|Yes|The name of the called method|
|4...∞|argument|compilable code|No|Variable to pass to called method|

```
{vb:data unread, content_privatemessage, getUnreadInboxCount}
{vb:raw unread}

```

This will call the method vB_Api_Content_Privatemessage->**getUnreadInboxCount**()  and assign its result to the unread variable.
  
The above example will output the count of undeleted notifications.

### Using Phrases

#### phrase

`{vb:phrase phrase_name[, arguments for phrase...]}`

Inserts the specified phrase. If arguments are provided, they will be run through htmlspecialchars.

Example: `{vb:phrase welcome}`

#### rawphrase

`{vb:rawphrase phrase_name[, arguments for phrase...]}`

As above, though arguments bypass htmlspecialchars.

Example: `{vb:rawphrase message_by_x_on_y_at_z, {vb:link member, {vb:raw postinfo}}, {vb:raw postinfo.username}, {vb:raw postinfo.postdate}, {vb:raw postinfo.posttime}}`

### Formatting Output

#### date

`{vb:date timestamp[, format]}`

Formats a UNIX timestamp using the default date format for the active language. A format may also be explicitly specified.

Timezone will be corrected based on the user's settings.
#### time

`{vb:time timestamp[, format]}`

As above, though uses the default time format instead of date format.
#### number

`{vb:number number[, decimals]}`

Outputs a number having run through vb_number_format for correct locale formatting. The number of decimal places to display can be optionally specified.

Additional Shortcodes
#### escapejs

`{vb:escapejs variable}`

Returns the variable prepared for use as a Javascript single-quoted string instead of running htmlspecialchars.
#### urlencode

`{vb:urlencode variable}`

Escapes the variable using urlencode.

#### if

`{vb:if condition, true[, false]}`

Use this in instances where the full <vb:if> tag can not be used, such as within HTML tags.

Example: `<div class="{vb:if $forumid==1, forum1, forum}">...</div>`

#### link

`{vb:link type, info[, extra-info]}`

Used to build a hyperlink URL of the specified type and into the correct 'friendly' format.

For more information see: Link Syntax
#### math

`{vb:math expression}`

Primarily used within CSS, this is used to evaluate the result of the mathematical expression specified.
#### stylevar

`{vb:stylevar name[.sub-part]}`

This will output the value of a style variable from the style system. No escaping is performed. Generally used to insert style variables into CSS Templates. To access just one part of a style variable definition, add the sub-part at the end.

#### template

{vb:template} is used for including other templates in the current template.  

##### Parameters

|Position|Name|Type|Required|Description|
| :-------:| :-------- | :--- | :------: | :---------- |
|1|template|string|Yes|The name of the template to include|
|2...∞|[var=value]|compilable code|No|Variable to pass local to template|

##### Example

**Template**:

~~~HTML
This is {vb:raw arg1}. Today is {vb:raw arg2}
~~~

**Code**:  
`{vb:template template, arg1="an example", arg2="Sunday"}`

The above example will output:  
> This is an example. Today is Sunday

#intermediate
#custom_development


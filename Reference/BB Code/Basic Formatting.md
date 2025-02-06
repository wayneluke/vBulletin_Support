Basic BBCode allows the basics of document formatting. The BBCode included here are font, color, size, bold, italic, underline, and alignment.

|Font|   |
|---|---|
|This tag allows you to change the font or type style of your text.  <br>Available Fonts: Arial, Comic Sans MS, Courier New, Georgia, Lucida Sans Unicode, Tahoma, Times New Roman, Trebuchet MS, Verdana.|   |
|Usage:|[font=option]value[/font]|
|Example Usage:|[font=Georgia]This text is in the Georgia type style.[/font]|
|Example Output:|This text is in the Georgia type style.|

| Bold, Italic and Underline                         |                                                                                               |
| -------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| These codes provide basic formatting to your text. |                                                                                               |
| Usage:                                             | [b]value[/b]  <br>[i]value[/i]  <br>[u]value[/u]                                              |
| Example Usage:                                     | [b]This is bold text.[/b]  <br>[i]This is italic text[/i]  <br>[u]This is underlined text[/u] |
| Example Output:                                    | **This is bold text.**  <br>_This is italic text_  <br>This is underlined text.               |
 
|Color|   |
|---|---|
|Allows you to color your text. You can use any named color or hex value. Colors can also be selected using the built-in color palette tool.|   |
|Usage:|[color=option]value[/color]|
|Example Usage:|[color=blue]This text is blue.[/color]|
|Example Output:|This text is blue.|

  

|Size|   |
|---|---|
|Allows you to change the size of your text. Allows font sizes from 8 pixels to 72 pixels in size.|   |
|Usage:|[size=option]value[/size]|
|Example Usage:|[size=18]This text is 18 pixels tall[/size]|
|Example Output:|This text is 18 pixels tall|
 
| Left / Right / Center Justification                             |                                                                                                                                         |
| --------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| Allows you to align or justify your text for different effects. |                                                                                                                                         |
| Usage:                                                          | [left]value[/left]  <br>[center]value[/center]  <br>[right]value[/right]                                                                |
| Example Usage:                                                  | [left]this text is left-aligned[/left]  <br>[center]this text is center-aligned[/center]  <br>[right]this text is right-aligned[/right] |
| Example Output:                                                 | this text is left-aligned<br><br>this text is center-aligned<br><br>this text is right-aligned                                          |
  
|Indent|   |
|---|---|
|Allows you to indent your text within a blockquote element.|   |
|Usage:|[indent]value[/indent]|
|Example Usage:|[indent]This text is indented.[/indent]|
|Example Output:|> This text is indented.|
 
|noparse|   |
|---|---|
|Tells the system to not parse BBCODE|   |
|Usage:|[noparse][b]option[b][/noparse]|
|Example Usage:|[noparse][b]Lorem ipsum dolor sit amet[/b][/noparse]|
|Example Output:|[b]Lorem ipsum dolor sit amet[/b]|

|User Mentions|   |
|---|---|
|Allows you to mention and link another user to the conversation. The mentioned user will get a notification about the mention. This BBCode works off the @ nomenclature popular by Twitter and Facebook. However you can use it as a standard BBCODE as well. Using the @ format in WYSIWYG mode, will trigger an auto-suggestion dropdown. For names with spaces, use double quotes to clarify your meaning.|   |
|Usage:|@%username%  <br>[user]value[/user]|
|Example Usage:|@"John Doe"  <br>@John Doe  <br>[user]John Doe[/user]|
|Example Output:|@[John Doe](file:///Volumes/Secondary/Sites/vBulletin/demo/generators/output/userhelp/bbcode-reference/bbcode-basic.html#)  <br>@[John](file:///Volumes/Secondary/Sites/vBulletin/demo/generators/output/userhelp/bbcode-reference/bbcode-basic.html#) Doe  <br>@[John Doe](file:///Volumes/Secondary/Sites/vBulletin/demo/generators/output/userhelp/bbcode-reference/bbcode-basic.html#)|
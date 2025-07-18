This is a list of legacy functions that can be used within templates in the vBulletin system. They will often simplify verifying different functionalities.

## can_moderate()

Returns whether or not the given user can perform a specific moderation action in the specified forum. This function returns `TRUE` if the action specified can be undertaken by the user.

** Parameters** 

- integer Forum ID
- string If you want to check a particular moderation permission, name it here
- integer User ID
- (optional) string comma separated list of usergroups to which the user belongs. 

`can_moderate($forumid = 0, $do = '', $userid = -1, $usergroupids = '')`

## is_browser()

Browser detection system - returns whether or not the visiting browser is the one specified. This function returns `TRUE` if the browser matches the conditions specified.

**Parameters**

* @param string Browser name (opera, ie, mozilla, firebord, firefox... etc. - see $is array)
* @param float Minimum acceptable version for true result (optional)

`is_browser($browser, $version = 0)`

## is_member_of()

Works out if a user is a member of the specified usergroup(s). This function can be overloaded to test multiple usergroups: `is_member_of($user, 1, 3, 4, 6...)`. If a match is found, the function will return `TRUE`.

The <vb:usergroup> tag can replace <vb:if> tags using this function. 

**Parameters**

* @param array User info array - must contain userid, usergroupid and membergroupids fields
* @param integer Usergroup ID to test
* @param boolean Pull result from cache (no longer used, no caching)

`is_member_of($userinfo, $usergroupid, $cache = true)`

## is_came_from_search_engine()

Checks whether or not user came from search engine. The function will check the user's referring URL from a list of search engines defined under Settings → Options → Style & Language Options. If there is a match, it will return True.

This function has no parameters. 

`is_came_from_search_engine()`

## vbdate()

Formats a UNIX timestamp into a human-readable string according to vBulletin settings.

**Parameters**

- @param string Date format string (same syntax as PHP's date() function)
- @param integer Unix time stamp. Note, if this value is 0, it will use the current time from vB::getRequest()->getTimeNow()
- @param boolean If true, attempt to show strings like "Yesterday, 12pm" instead of full date string
- @param boolean If true, and user has a language locale, use strftime() to generate
- @param boolean If true, don't adjust time to user's adjusted time .. (think gmdate instead of date!)
- @param boolean If true, uses gmstrftime() and gmdate() instead of strftime() and date()
- @param array If set, use specified info instead of $vbulletin->userinfo

-  @return string Formatted date string


`vbdate($format, $timestamp = 0, $doyestoday = false, $locale = true, $adjust = true, $gmdate = false, $userinfo = '')`
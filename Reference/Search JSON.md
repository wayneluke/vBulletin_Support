Using the advanced editor you can create powerful search modules. Following you find possible filters / parameters for using within these modules:  
The search JSON parameter has the following format:  

**Format**

`{ "filter": <value>, "filter": <value>, ... }`

<value> may be any valid string, number or JSON structure and will be interpreted by the specified filter. Filters not listed below are ignored.  

**Examples**


`{ "author":"myFriends", "date":{"from":"7"}, "type":"vBForum_Photo" }`

This will return the photos that were added by my friends in the past seven days.

`{ "featured":"1", "date":{"from":"2010/10/01","to":"31"}, "keywords":"fishing OR camping" }`

Returns everything that's been featured in the month of October, 2010 about fishing or camping.

`{ "author":"admin", "exactname":"1", "tag":["important","crucial","paramount"] }`

Gets all the posts by the user "admin" (will not match "administrator" nor "badminton") that were tagged "important", "crucial" or "paramount."

`{ "author":["fred","john"], "date":"last_visit", "channel":4 }`

Will get all the content that "fred" or "john" john posted in the channel 4 since my last visit.

`{ "author":"olly", "contenttypeid":[22,24], "sort":{"author":"asc"} }`

Fetches the content of type with id 22 or 24 that's been posted by users with usernames containing "olly" (will match Polly, Holly, hollywood, Olly) ordered alphabetically by their usernames.

`{ "keywords":"cooking", "title_only":"1", "author":[7,12], "date":{"from":"1315515930"} "sort":"relevance" }`

Gets the content about cooking (that has the word "cooking" in the title) posted by the users with ids 7 or 12 since Thu, 08 Sep 2011 21:05:30 GMT, ordered by relevance

## Search Filters

### Basic Search 

#### author 

#### keywords

- string – a list of words that you want to search for. Accepts “AND” (default), “OR” and “NOT” operators. Short, common and bad words are omitted from the search criteria.

`{ "keywords":"string bass NOT fishing" }`

#### tag 

#### title_only

#### date

#### sort

### Post Type

	- starter_only
	- reply_only
	- comment_only
	- visitor_messages_only
	- featured

### Content Type

	- channel
		- depth
		- exclude
	- contentypeid
	- type
	- exclude_type

### Prefixes

	- prefix
	- has_prefix
	- no_prefix

### Content Status

	- include_blocked
	- ignore_protected
	- deleted_only
	- exclude_deleted
	- unapproved_only
	- unread_only
	- include_attach
	- sticky_only
	- exclude_sticky
	- include_sticky

### Miscellaneous 

	- specific
	- my_following
	- view
	-  my_channels
	- exactname
	- follow
	- include_starter
	- sentto

### System

	- ignore_cache
	- nolimit
	- custom

  
## Filters
  
The valid filters / parameters are:  
  


**title_only**

- boolean - search will be reduced to the title only.

Code:

{ "title_only":"1" }

**channel**

- number – the channel id that the results should belong to.

Code:

{ "channel":"3" }

will list only the results in the channel with the id 3.  
  
**depth**

- number - used in conjunction with the channel filter.

This will match the nodes under a channel up to the level specified by the number:  
  

Code:

{ "depth":"1" }

**include_starter**

- boolean

This will also include the starter nodes in the search results:  
  

Code:

{ "include_starter":"1" }

**featured**

- boolean – filters the results to return only the featured ones.

Code:

{ "featured":"1" }

**contenttypeid**

- number – the id of the contentype – will return only this type of results.
- array – list of contentype ids – will return only the specified type results. Ex:

Code:

{ "contenttypeid":"22" }
{ "contenttypeid":[9,22] }

_See the notes for the **type** parameter for special rules that apply._  
  
**type**

- string – the name of the contentype - will return only this type of results.
- array – list of contentypes – will return only the specified type results. Ex:

Examples:  
  

Code:

{ "type":"vBForum_Gallery" }
{ "type":["vBForum_Gallery","vBForum_Poll"] }

**Notes:**

- If private messages are requested, an "include_private_messages" filter is enforced.
- If private message is the only type requested a "private_messages_only" filter is enforced instead.
- If visitor message is the only type requested a "visitor_messages_only" filter is enforced.
- If photo is the only type requested an "include_attach" filter is enforced.

_These rules apply to both "type" and "contenttypeid" filters._  
  
**exclude_type**

- number – the id of the contentype – will exclude this type from the results.
- string – the name of the contentype - will exclude this type from the results.
- array – list of contentype ids of classes – will exclude the specified type from results.

Code:

{ "exclude_type":"22" }
{ "exclude_type":"vBForum_Gallery" }

{ "exclude_type":[9,22] }

{ "exclude_type":["vBForum_Gallery","vBForum_Poll"] }

{ "exclude_type":[9,"vBForum_Poll"] }

Unless specifically excluded, private messages are always included in the results by enforcing a "include_private_messages" filter. To prevent private messages from showing up in the search results, use the "exclude_type":"vBForum_PrivateMessage" filter. Usually it makes no sense using this filter in a "channel" filter is applied.  
  
**author**

- string – the name of the user (default behavior is partial search – see exactname filter)
- array – the list of user names.
- "myFriends" – will match all the current users' friends
- "iFollow" – will match all the posts by the users the current users follows.

Code:

{ "author":"John Doe" }
{ "author":["John", "Luke", "Mark"] }

{ "author":"myFriends" }

{ "author":"iFollow" }

If only one user name is specified as an array, an "exactname" filter is enforced.  
  
**exactname**

- boolean – used in conjunction with the author filter(when a string is given) and specifies whether the author name is an exact string.

This will match "John" but not "Johnny".  
  

Code:

{ "author":"John","exactname":"1" }

**sentto**  
  
This filter is used in conjunction with the visitor message content type filter and specifies the user the message was sent to.

- number – the id of the user
- array – the list of user ids. Ex:

Code:

{ "sentto":10 }
{ "sentto":[10,12,13] }

It is similar to what you can achieve with an author filter and a type or contenttypeid filter except the sentto will return only the VMs reveived by the user specified as oppsed to VMs received AND sent by the specified user. This filter enforces a "visitor_messages_only" filter.  
  
**visitor_messages_only**

- boolean – used in conjunction with the authorid filter and will include only the visitor messages that the author sent OR received

Code:

{ "authorid":"10","visitor_messages_only":"1" }

There's no need to specify the "visitor_messages_only" filter when using the "sentto" filter as it is enforced anyway.  
  
**tag**

- string – list of tags to filter by.
- array – list of tags to filter by.

Code:

{ "tag":"tag1 tag2 tag3" }
{ "tag":["tag1","tag2","tag3"]
}

**prefix**

- string – the prefixid

Code:

{ "prefix":"interesting" }

**has_prefix**

- boolean

This will limit the search results to those that have any type of prefix specified.  
  

Code:

{ "has_prefix":"1" }

**no_prefix**

- boolean – Ex:
- array – list of prefixes to filter by Ex:

This will limit the search results to those that don't have any prefix specified  
  

Code:

{ "no_prefix":"1" }
{ "prefix":["interesting","awesome","great"]
}

**date**

- "lastVisit" – will show results from the current user's last visit
- "topicAge" – will show results starting from <"max_age_topic" setting> days
- "channelAge" – will show results starting from <"max_age_channel" setting> days
- JSON - A JSON-encoded string with the following parameters:
    - "from" with a low integer will filter the results that are newer than the number of days specified
    - "to" will filter the results that are older than the number of days specified
        - **special values for "from" and "to":**
        - lastDay - will translate to 1 day (+ or - depending of what you assigned, to "from" or "to")
        - lastWeek - will translate to 1 week
        - lastMonth - will translate to 1 month
        - lastYear - will translate to 1 year

Example of JSON with "from":  
  

Code:

{ "date":{"from":"10"} }

will show results newer than 10 days. With a timestamp will filter the results that are newer than the date specified in the timestamp Ex:  
  
Example of JSON with "from":  
  

Code:

{ "date":{"from":"1315515930"} }

will show results newer than Thu, 08 Sep 2011 21:05:30 GMT.  
  
Example of JSON with "to":  
  

Code:

{ "date":{"to":"10"} }

will show results older than 10 days. With a timestamp will filter the results that are older than the date specified in the timestamp Ex:  
  
Example of JSON with "to":  
  

Code:

{ "date":{"to":"1315515930"} }

will show results older than Thu, 08 Sep 2011 21:05:30 GMT.  
  
**exclude**

- array – list of node ids that need to be excluded from the results.
- number – the id of the node that needs to be excluded from the results.

Code:

{ "exclude":[1,2,3,4] }
{ "exclude":"24"
}

**specific**

- array – list of node ids that the search is limited to.
- number – the id of the node that the search is limited to.

Code:

{ "specific":[1,2,3,4] }
{ "specific":"24"
}

**starter_only**

- boolean

This will include the starter nodes only and will enforce a "include_starter" filter  
  

Code:

{ "starter_only":"1" }

**reply_only**

- boolean

This will include the reply nodes only and will invalidate the "include_starter" filter  
  

Code:

{ "reply_only":"1" }

**comment_only**

- boolean

This will include the comment nodes only  
  

Code:

{ "comment_only":"1" }

**follow**

- - string - the follow type, valid values are:
        - followContent - will match the content the current user is specifically following
        - followChannel - will match content from channels the current user is following
        - followMembers - will match content created by users the user current is following
        - followBoth - same as followContent and followChannel
        - followAll - matches anything the the current user is following, including posts from followed users

Code:

{ "follow":"followContent" }

- - array - has be in a form of:

Code:

{ "follow":{<follow_type>:<userid>} }

where

- - - <follow_type> is on of the types specified above
        - <userid> is the id of the user the following is based of

**my_following**

- boolean

This will match the nodes in channels that the current user is following  
  

Code:

{ "my_following":"1" }

**include_blocked**

- boolean

Code:

{ "include_blocked":"1" }

Will also include the nodes posted by people listed in the globalignore option - needs moderatorpermissions.canbanusers privileges  
Also includes posts by users in the ignorelist of the current user  
  
**ignore_protected**

- boolean

This will exclude the content marked as protected  
  

Code:

{ "ignore_protected":"1" }

**deleted_only**

- boolean

This will return only the content that has been soft deleted  
  

Code:

{ "deleted_only":"1" }

The current user has to be the author of the nodes or have moderatorpermissions.canremoveposts privileges  
  
**exclude_deleted**

- boolean

This will return exclude soft deleted content when searching with moderatorpermissions.canremoveposts privileges (that would otherwise include the deleted content)  
  

Code:

{ "exclude_delete":"1" }

**unapproved_only**

- boolean

This will return only the content that has been unapproved:  
  

Code:

{ "unapproved_only":"1" }

The current user has to be the author of the nodes or have moderatorpermissions.canmanagethreads privileges  
  
**unread_only**

- boolean

This will return only the unread content:  
  

Code:

{ "unread_only":"1" }

Works only if a database-based option is selected for the "threadmarking" (Topic/Forum Read Marking Type) setting.  
  
**include_attach**

- boolean

Code:

{ "include_attach":"1" }

If not specified or has a value of 0, will return only the inlist type content. Set it to 1 to include the attachments in the result.  
  
**sticky_only**

- boolean

This will filter nodes that are marked sticky  
  

Code:

{ "sticky_only":"1" }

**exclude_sticky**

- boolean

Code:

{ "exclude_sticky":"1" }

Will exclude nodes that are marked sticky  
  
**include_sticky**

- boolean

Code:

{ "include_sticky":"1" }

Behaves just as if no sticky filter is specified except the search results are ordered giving priority to the sticky content  
  
**view**

- string - One of the values specified below

Code:

{ "view":"activity" }

can have one of the following values:

- - activity

Only include the latest reply or comment (or the starter itself if no replies/comments yet) per starter in all the channels

- - topic

Filters out the Channel nodes from the Search API nodes results. The Topic view should only return the starter nodes for the specified channel.

- - conversation_thread

Only display the descendant nodes of (and including) the specified starter (works in conjunction with the channel filter) and filters out the Comment nodes Enforces an "include_starter" and "depth":1 filter

- - conversation_stream

Only display the descendant nodes of (and including) the specified starter (works in conjunction with the channel filter) Enforces an "include_starter" and "depth":2 filter  
  
**ignore_cache**

- boolean

Code:

{ "ignore_cache":"1" }

Will ignore the caches search results and will enforce a new search  
  
**sort**

- string – any of the following:

"user", "author", "publishdate", "created", "started", "last_post", "lastcontent", "title", "textcount", "replies", "displayorder", "rank", "relevance", and "votes" (which are likes, not poll votes). The default sort order is "desc", except for title in which case is "asc" Ex:  
  

Code:

{ "sort":"relevance" }

will sort the results by relevance, starting with the most relevant.  
  

Code:

{ "sort":"title" }

will sort the results alphabetically.  
  
JSON  
  

Code:

{ "<field>":"<direction>" }

pair, where <field> is one of the above mentioned values and <direction> is either "asc" or "desc". Ex:  
  

Code:

{ "sort":{"title":"desc"} }

or  
  

Code:

{ "sort":{"publishdate":"asc"} }

**custom**  
  

Code:

{ "custom":{"somecustomfield":{"anything":"value can be anything, including array and JSON"}} }

This criteria has no effect on search, it's just passed back in the response in the same way as it is received.  
The value can be anything that can be encoded in a JSON.  
  
**nolimit**  
  

Code:

{ "nolimit":1 }

It works in conjunction with the channel filter (you need to send a channel id). This will remove the Maximum Search Results to Return limit (setting in admincp) from the initial search query (so all the nodes will be returned and available for pagination). The intention of this filter is to be used on the topic and thread views where it's paramount to be able to paginate through all the results.  
Do not use it on the activity views or search pages/widgets.  
  
**my_channels**

- string – one of following:

"blog", "group". Ex:  
  

Code:

{ "my_channels":{"type":"group"} }

This filter will return channels of the specified "type" that the current user belongs to (i.e. has a groupintopic record for).  
  
**Examples:**  
  
  

Code:

{ "author":"myFriends", "date":{"from":"7"}, "type":"vBForum_Photo" }

will return the photos that were added by my friends in the past one week  
  

Code:

{ "featured":"1", "date":{"from":"2010/10/01","to":"31"}, "keywords":"fishing OR camping" }

returns everything that's been featured in the month of October, 2010 about fishing or camping  
  

Code:

{ "author":"admin", "exactname":"1", "tag":["important","crucial","paramount"] }

gets all the posts by the user "admin" (will not match "administrator" nor "badminton") that were tagged "important","crucial" or "paramount"  
  

Code:

{ "author":["fred","john"], "date":"last_visit", "channel":4 }

will get all the content that "fred" or "john" john posted in the channel 4 since my last visit  
  

Code:

{ "author":"olly", "contenttypeid":[22,24], "sort":{"author":"asc"} }

fetches the content of type with id 22 or 24 that's been posted by users with usernames containing "olly" (will match Polly, Holly, hollywood, Olly) ordered alphabetically by their usernames  
  

Code:

{ "keywords":"cooking", "title_only":"1", "author":[7,12], "date":{"from":"1315515930"} "sort":"relevance" }

Gets the content about cooking (that has the word "cooking" in the title) posted by the users with ids 7 or 12 since Thu, 08 Sep 2011 21:05:30 GMT, ordered by relevance
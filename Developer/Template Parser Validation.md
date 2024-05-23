The general philosophy here is to support a limited subset of PHP logic that is sufficient for most purposes.  

The default behavior is to exclude functionality unless there is a specific reason to include it.  The reason is that there are a lot of complicated expressions allowed within PHP and this makes validation more difficult to validate safety in that complexity.  In many cases there is not much benefit for the kinds of things conditionals are intended to do (string interpolation comes to mind here).  While in the past the if tags was used as a kind of generic “drop to PHP code” feature, this is precisely what this improvement is designed to prevent. 

## What is allowed

- Logic operators like AND and OR, including the “binary” versions && and || (they aren’t really binary and are only different in PHP by inexplicably having a different precedence).
- Comparison operators like `==, !=, <. <=, etc…`.
- Grouping via parentheses.
- Basic variables, including arrays.
- Basic math operators ( `+, -, *, /, %`) and string concatenation (`.`)
- Validated function calls
- Numbers, string literals, boolean literals, array literals (using both [] and array() syntax)
- Prefix operators not, negation, and identity (!,-,+).  The last is mostly useless but PHP allows it and there isn’t much reason not to.  These are different from math operators.  Example `$x == -1` or `$y == +(5 - 6)`

## What is not allowed

- Variable Assignment, including the += and other forms.
- String interpolation.
- Object references (`$x->field`)
- Variable variables
- Function calls other than via literal function names (`$fun()`, `‘fun’()`, `[$class, ‘fun’]()`, etc….)
- ternary operators (`$x ? true : false`)
- Supergobal and other problematic variables.
- Increment and decrement.  Generally anything that changes the value of a variable.
- Conditions longer than 1024 characters.  The parser wasn’t really intended to handle the text of War and Peace and hadn’t been tested on massive input so this prevents potential DOS issues.  A condition that long is better broken up into multiple tags for readability anyway.
- Pretty much anything not specifically considered 

## Disallowed variables:

- $GLOBALS
- $_SERVER
- $_GET
- $_POST
- $_FILES
- $_COOKIE
- $_SESSION
- $_REQUEST
- $_ENV 
- $this
- $final_rendered (this is the variable that holds the string being built on render)

## Validated functions

> Note: There may be additional functions allowed by {vb:php} that are not included on this list.

### Misc functions

- isset
- empty    
- defined,
- preg_match, 
- ceil

### Date functions

- date
- gmdate
- mktime
- gmmktime
- time           

### Type checking functions

- is_array
- is_numeric
- is_string

### String functions

- substr
- strpos
- strlen
- sprintf
- ltrim
- rtrim
- trim

### Array functions

-  array_reverse
- array_key_exists
- count
- size
- in_array
- current
- end
- prev
- next
- reset

### Type Casting functions

- intval
- boolval

### vBulletin-defined functions

- can_moderate
- is_browser        
- is_member_of
- is_came_from_search_engine
- vbdate
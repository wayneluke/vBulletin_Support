The API documentation is built with PHPDocumentor based on comments within the class files. 
- Navigate to the phpdocs location at /volumes/secondary/sites/phpdocs
- Run the shell script build.sh. The script will:
	- Unlink the cache and docs folders.
	- Rebuild the docs
	- link in the files under support as individual pages.
- Once the files are built, the contents of the docs folder should be copied to the repository for checkin.
- When checked into the Github Repository, the API documentation will be automatically deployed to vb5support.com via Digital Ocean.
## Current Issues

### PHP Version

Currently, have to build with PHP 8.2.

### Code Formatting

#### Improper Comments

@package should be after the class description. Verify the class comments in these files: 
- vb/library/login.php
- vb/utility/template/conditionparser.php
- vb/relatedtext/tfidf.php

#### Multiple Classes
Some files have multiple classes within them.

## Goals

- Convert to directory based packages. i.e. `@package vb\utility\templates`
- Make sure all classes are assigned to a proper package.
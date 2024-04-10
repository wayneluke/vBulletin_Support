We're using phpDoctor to generate vBulletin code documentation. We chose this tool because it is compatible with phpDoc which is a de facto standard and what we used previously. However phpDoc is outdated and performs poorly on large code bases (it cannot successfully process our code). While phpDoctor doesn't have the same range of tags that phpDoc did, it should be sufficient for our needs.

Documentation is not optional. If you write an API or Library function, write a doc block. If you write a complicated internal function, write a doc block (rule of thumb, if you can't easily fit it on one screen it should have a doc block). If you change a function, check its doc block and fix it if its wrong **even if your changes have nothing to do with why it is wrong**. Issues are going to be kicked back on code review for lack of documentation so save yourself the effort.

Essentially every function in PHP and every _named_ function in Javascript should have a corresponding doc block. Anonymous functions in Javascript usually do not warrant a doc block.

## Doc Blocks

An important note that not any comment will be interpreted as a doc block. It must begin with /** (note the extra ‘*’), otherwise it will be ignored.

Sample doc block for a function. Note that to be properly recognized, it needs to start with `/**` on its own line. To follow existing convention, it should follow the formatting shown below.

/**
 * One line description
 * 
 * Multi-line description, if 
 * it is needed.
 * 
 * @param datatype Descrption
 * @param datatype Descrption
 * @param datatype Descrption
 *
 * @return datatype Description
 */ 

## Packages

One of the important things to get right is the package definitions for files and classes. Every file should have a docblock and every class should have one. The file level document is the first docblock in the file assuming it is not followed by a documentable element. Packages should be assigned as follows (note that these are case sensitive so we need to be consistant).

- vBApi – All api classes. This is the most important one to get right as we will want to publish this separately (even if we make all of the documentation available)
- vBDatabase – All Database related classes. Asserter code, query defs, etc.
- vBDatamanager - The datamanager class and all of its subclasses.
- vBForum – Files in the vbforum package directory.
- vBCms – Files in the vbcms package directory (these will likely become entirely obsolete).
- vBPackageName – Any packages should use this format for the php doctor package.
- vBulletin – Other classes/files in the /vb directory
- vBLegacy – Any of the legacy code in the /includes directory
- vBTest - Any automated unit test files.

If there are any other categorizations that make sense, please reply with your thoughts and we can add to the list as it make sense.

## What to Document

It is *critical* that the public API and Library methods are thoroughly documented.

- What does the function do?
- What is each parameter and its type?
- What does each parameter do and what are the expected values of it?
- If the parameter is an associative array, what are *all* of the possible fields, what do they do, and which are required?
- What is the return value?
- If we return an associative array, what are the fields that we return?
- What are the common error conditions and what does the function do/return in those cases.

This is a lot of work, but we need to be able to publish the API, not just for the community but for ourselves so that this can become the main source of information on functionality already exists.

## What Not to Document

Do not use the @Author tag. We may end up releasing this document publicly (we will almost certainly make the API doc available). I don’t think we need a public record of precisely who did what, particularly one that isn’t likely to be kept reliably up to date. This isn’t intended so to obscure credit, but rather is intended to prevent particular members of the team from becoming the community’s chew toy.

In many cases we have child classes that all implement a parent class method to handle the same conceptual tasks for different situations -- for example we have multiple cache classes that all implement the same functions defined by the parent class that differ only in how the data is stored and retrieved. In this case not necessary to exhaustively document every child class function with exactly the same information. The parent class function should be documented with the expected behavior (even if its an abstract class or implements only a stub of that function). Unless there are particular quirks for a specific class that the caller needs to be aware of, then all that is required is a link to the parent documentation.

@see vB_Parent_Class::thisMethodName

Even if some local documentation is needed, its generally not required to repeat the parent class documentation. Include the @see link and provide the specific local exceptions.

Remember the docblock is documentation for the caller, not for people editing the function (which should be provided in standard comments) and should only include implementation details to the extent that it impacts people using the class or function.
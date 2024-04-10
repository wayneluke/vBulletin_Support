Definition of the Site Builder Tables in vBulletin 5 Connect.

## ERD Diagram

Error creating thumbnail: Unable to save thumbnail to destination

## page

Contains the information about individual pages.

- **fields**:
    - pageid
    - parentid
    - pagetemplateid
    - title
    - metadescription
    - routeid
    - moderatorid
    - displayorder
    - pagetype
    - product
    - guid
- **indexes**:
    - Primary Key: pageid
- **related**
    - pagetemplate:pagetemplateid - one to many.
    - product: product - one to one

## pagetemplate

Basic Screenlayout Information for individual pages.

- **fields**:
    - pagetemplateid
    - title: Name of the page template
    - screenlayoutid: corresponds to the template framework used for the page template.
    - content
    - product: product that added the pagetemplate.
    - guid
- **indexes**:
    - Primary Key: pagetemplateid
- **related**:
    - screenlayout:screenlayoutid - one to many.
    - widgetinstance:pagetemplateid - one to one.
    - product: product - one to one

## routenew

Holds all the routes used to load site content.

- **fields**:
    - routeid: Primary Key
    - name
    - redirect301
    - prefix
    - regex
    - class
    - controller
    - action
    - template
    - arguments
    - contentid
    - product
    - guid
- **indexes**
    - Primary Key - routeid
    - regex - regex
    - prefix - prefix
    - route_name - name
    - route_class_cid - class, contentid
- **related**:
    - node: routeid - many to one
    - page: routeid - one to one
    - product: routeid - one to one

## screenlayout

Defines the template frameworks for individual pages.

- **fields**:
    - screenlayoutid: Primary Key
    - varname:
    - title:
    - displayorder:
    - columncount:
    - template - Display template used in the Style Manager
    - admintemplate:
- **indexes**:
    - Primary Key: screenlayoutid
- **related**:
    - pagetemplate: screenlayoutid - many to one

## site

Holds Site title, header and footer navigation in a serialized format. Should only have one row of data on standard installs.

- **fields**:
    - siteid: Primary Key
    - title: Site Title
    - headernavbar - Header Navigation Links
    - footernavbar - Footer Navigation Links
- **indexes**:
    - Primary Key: siteid
- **related**:
    - none.

## widget

Defines the modules available in Sitebuilder

- **fields**:
    - widgetid: Primary Key
    - title: Title of the Module
    - template: Template to define the look of the module
    - admintemplate:
    - icon: Icon for the module shown in Site Builder
    - isthirdparty:
    - category: Category of the module
    - cloneable: Can this be used to create duplicate modules?
    - canbemultiple: Can you place multiple copies of this module on a page?
    - product: Product that added the module.
    - guid: Unique Identifier of the module. This is needed because the widgetid will change when upgrades occur.
- **indexes**:
    - Primary Key: Widgetid
    - product: product
- **related**:
    - widgetdefinition: widgetid - one to one
    - widgetinstance: widgetid - one to many
    - product: one to one

## widgetdefinition]

Defines the options and settings of each individual widget.

- **fields**:
    - widgetid:
    - field
    - name
    - label
    - defaultvalue
    - isusereditable
    - isrequired
    - displayorder
    - validationtype
    - validationmethod
    - product
    - data
- **indexes**:
    - widgetid: widgetid
    - product: product
- **related**:
- widget: one to one
- product: one to one

## widgetinstance

- **fields**:
    - widgetinstanceid: Primary Key
    - parent
    - pagetemplateid: Page this widget is located on.
    - widgetid: Module this widget represents
    - displaysection: column and area where the widget is placed.
    - displayorder: where on the page this widget is displayed
    - adminconfig: The options set for thie widget instance
- **indexes**:
    - Primary Key: widgetinstanceid
    - pagetemplateid: pagetemplateid
- **related**:
    - pagetemplate: pagetemplateid - many to one

  
## Unused
### widgetchannelconfig
Currently unused. Would be used to override default widgetinstances within Channels.

- **fields**:
- **indexes**:
- **related**:

### widgetuserconfig

currently unused. Meant to be used to allow users to override default Widgetinstances.

- **fields**:
- **indexes**:
- **related**:
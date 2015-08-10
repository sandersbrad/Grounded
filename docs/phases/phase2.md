# Phase 2: Viewing Blogs and Posts

## Rails
### Model

### Controllers
Api::PropertiesController (create, destroy, index, show)

### Views
* properties/show.json.jbuilder

## Backbone
### Models
* Property

### Collections
* Properties

### Views
* PropertyForm
* PropertyShow
* PropertiesIndex (composite view, contains PropertyIndexItem subviews)
* FollowPropertiesIndex (composite view, contains PropertyIndexItem subviews, this will be in a sidebar)
* PropertyIndexItem

## Gems/Libraries

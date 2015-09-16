# Grounded

[Live - www.grounded.us](www.grounded.us)

![screenshot1]
![screenshot2]
![screenshot3]

## Features
Grounded has a RESTful rails backend serving JSON to a single page Backbone app.

Users can:

- [x] Create accounts
- [x] Create sessions (log in)
- [x] Browse a marketplace
- [x] Use zillow generated charts to research potential properties
- [x] Invest in properties
- [x] Follow properties
- [x] Add new properties to the marketplace
- [x] Upload images to and edit descriptions of properties they've added
- [x] View properties on a map
- [x] Take a tour

## Gems and Libraries

* Geocoder
* HTTParty
* Figaro
* IntroJs


## Third Party APIs

* Google
* Zillow
* Cloudinary


## Implementation Timeline

### Phase 1: User Authentication, House Follows
Implented a user authentication system in Rails.  Performed database migrations for users, properties, investments, and follows.  Set up associations:

User `has_many` Properties
User `has_many` Investments
User `has_many` Follows
Property `has_many` Follows
Property `has_many` Investments
Property `has_many` Investors through Investments

[schema](https://github.com/sandersbrad/Grounded/blob/master/db/schema.rb)

### Phase 2: Viewing Properties
* Namespaced controllers under API and created routes to serve property data as JSON
* Initialized a Backbone App and added models and collections to fetch data from API
* Created Backbone view for Property Index and allowed users to follow properties
* Implemented Google maps and geocoder gem to show property locations

### Phase 3: Investment Research
* Incorporated Zillow's API to generate statistical data about all properties in the marketplace.
  * HTTParty gem makes Zillow API requests from the server
* Added Bootstrap status bars and allowed users to invest in properties

### Phase 4: User Homescreen
* Implemented a custom sidebar and Bootstrap navbar
* Created a custom sidebar to display a current user's investments / follows
* Started styling with custom CSS

### Phase 5: Adding Properties
* Created a form for a logged in user to add a property to the marketplace
  * Zillow's API will automatically fill in details.
  * Users can edit descriptions of and upload images (cloudinary) to properties they create


[screenshot1]: ./app/assets/images/readme/grounded.png
[screenshot2]: ./app/assets/images/readme/propertyindex.png
[screenshot3]: ./app/assets/images/readme/propertymodal.png

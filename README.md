# Grounded

[Heroku link][heroku]

[heroku]

![screenshot1]
![screenshot2]
![screenshot3]

## Minimum Viable Product
Grounded is a webapp that allows users to invest in real estate together. Users can:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [x] Create accounts
- [x] Create sessions (log in)
- [x] Browse a marketplace
- [x] Use zillow generated charts to research potential properties
- [x] Invest in properties
- [x] Follow properties
- [x] Add new properties to the marketplace
- [x] View properties on a map




## Design Docs
* [View Wireframes][views]
* [DB schema][schema]

[views]: ./docs/views.md
[schema]: ./docs/schema.md

## Implementation Timeline

### Phase 1: User Authentication, House Follows (~1 day)
I will implement user authentication in Rails based on the practices learned at
App Academy. I want to use e-mails as usernames and validate email address before allowing a user to sign up.  Setting up the mailer will also allow for a password reset option down the line. By the end of this phase, users will be able to log in and follow houses they are interested in. The most important part of this phase will
be pushing the app to Heroku and ensuring that everything works before moving on
to phase 2.

[Details][phase-one]

### Phase 2: Viewing Properties (~2 days)
I will add API routes to serve property data as JSON, then add Backbone
models and collections that fetch data from those routes. By the end of this
phase, users will be able to view all properties and follow properties they are interested in.  Allow users (signed in or not) to see how much more investment is needed for each property (status bar).

Allow users who have invested (or are interested?) in a property see maintain those properties in a list and follow future investments.

Also implement a form for users to post properties they are interested in investing in through Grounded.  

[Details][phase-two]

### Phase 3: Investment Research (~2 days)
In this phase I will use Zillow's API to generate statistical data about all properties in the marketplace.

[Details][phase-three]

### Phase 4: User Homescreen (~1-2 days)
I'll customize a logged-in user's page by displaying any properties they are watching in a sidebar.  

[Details][phase-four]

### Phase 5: Map (~1 day)
I'll use Google's API to add a map feature to the properties marketplace.  User's will be able to see the location of properties in San Francisco, as well as add new properties to the map.


[Details][phase-five]


[screenshot1]: ./app/assets/images/readme/grounded.png
[screenshot2]: ./app/assets/images/readme/propertyindex.png
[screenshot3]: ./app/assets/images/readme/propertymodal.png

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md

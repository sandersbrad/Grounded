# Flux-capacitr

[Heroku link][heroku]

[heroku]: http://flux-capacitr.herokuapp.com

## Minimum Viable Product
Landed is a webapp desinged with an interface to allow users to invest in real estate together. Users can:

<!-- This is a Markdown checklist. Use it to keep track of your progress! -->

- [ ] Create accounts
- [ ] Create sessions (log in)
- [ ] Learn about crowd shared real estate
- [ ] Evaluate risks
- [ ] Find answers to frequently asked questions
- [ ] See if they qualify
- [ ] Browse a marketplace
- [ ] Input income and credit score figures and get a maximum allowed investment
- [ ] Invest in properties
- [ ] Follow properties
- [ ] Send inquiries
- [ ] Search for properties by location
- [ ] Search for properties by price

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
phase, users will be able to view all properties and the properties they follow with all the relevant details (fake seeds) in place inside a single Backbone app.  Allow users (signed in or not) to see how much more investment is needed for each property (status bar).

Allow users who have invested (or are interested?) in a property see what other users have invested as well?  Not totally confident I want this feature, but its good to keep it in the front of my mind.

Also implement a form for users to post properties they are interested in investing in through Landed.  

[Details][phase-two]

### Phase 3: User Qualification and Education (~2 days)
In this phase I will create an interactive page for users to toy around with figures and see what, if at all, they are qualified to invest.  I'll use third party libraries (ie D3) to graphically display results so they are easily readable to the user.  This section will also contain a short degree of questioning to determine qualification.  I'll also use this opportunity to add any risk evaluation content that is needed in this stage.

[Details][phase-three]

### Phase 4: User Homescreen (~1-2 days)
I'll customize a logged-in user's page by displaying any properties they are watching in a sidebar.  I'll also have links to their user data (ie, qualifactions) and any other data that is relevant to a particular user.  

[Details][phase-four]

### Phase 5: Searching for Properties and more Graphical Analyses (~2 days)
Allow users to search properties by location and price and also filter results.  Add more graphical data to show investment returns over time for a user.


[Details][phase-five]

### Bonus Features (TBD)
- [ ] Pop-up pages for user log-in and sign-up
- [ ] Text message alerts
- [ ] Responsive Design
- [ ] Make listings shareable (facebook, email, etc)
- [ ] Log in with facebook
- [ ] Instant render search bar
- [ ] Multiple sessions/session management
- [ ] User avatars
- [ ] Create a backend framework for admins to add/edit properties

[phase-one]: ./docs/phases/phase1.md
[phase-two]: ./docs/phases/phase2.md
[phase-three]: ./docs/phases/phase3.md
[phase-four]: ./docs/phases/phase4.md
[phase-five]: ./docs/phases/phase5.md

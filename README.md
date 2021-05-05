# happybites_backend

- get location/all + Lihn 
- get location/id
- post location/ id

- get company/id + Aina
- get company/all
- post company/id

- get email
- post email

- get user
- post user

- get recipe
- post recipe
- get recipe/id

- get profile/user
- post profile/user

- get likes
- post likes

- get events/all + Aina
- get event/id
- post event 

# Endpoints

- users
/users - to get all Users
/users/:id - to get single user by id

- userprofile
/userprofile - to get all User_profile
/userprofile/:id - to get single User_profile by id
/userprofile/newuserprofile - to post new profile in company or user profile

- company
/company - to get all companies
/company/:id - to get single company by id

- requests/events
/requests - to get all event requests
/requests/:id - to get single event request by id/per user
/requests/requestevent - to post an new event

- favorites
/favorites - to get all favorites
/favorites/:id - to get single favorite by id
/favorites/add-to-fav - to post a new favorite

- idea
/ideas - to get all ideas
/ideas/:id - to get single idea by id
/ideas/create-idea - to post an new idea

- services
/services - to get all services
/services/:id - to get single service by id
/services/newservice - to post an new service
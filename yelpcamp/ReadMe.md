# Yelpcamp app
## App Description
A camping web application that allows users to have users book, review and publish a camping site.
#### _The app allows users to interract with a listed camping site in the following ways :_
- Create a camping site
- Reserve a place on a camping site
- View a camping site
- Leave comments and reviews on posted camping sites
- Report a camping site.
##### The publisher of a camping site is granted the permission to:
- delete the camp 
- update details of the camping site.

## Technologies used
- HTML5
- CSS
- Javascript
- Nodejs
- MongoDB
#### Dependancies
- ejs
- ejs-mate
- express
- method-override
- mongoose
___
##### Back-End
This web site is build on expressjs and Nodejs. Expressjs for routing and setting up our API endpoints and for our server-side logic, the application runs on Nodejs. The database is build in key-value pairs for each dataset. For this, Mongoose and MongoDB was used to set up and define schemas to our different datasets (campgrounds, reviews and comments, users)
___
##### Front-End
The interface is build on HTML5, CSS and vanilla javascript. Using media querries the app has different layouts implemented depending on the size of the viewport (mobile, tablet, pc). For templating our layouts, we used EJS.
___
## Implementation Process
#### Setting up the dev environment.
- Create the application folder
- Create a server file inside the application folder (server.js)
- run npm install and import all dependancies into the server file (all dependancies are listed at the _technologies used_ section.)
```markdown
npm install
```
- Then onto setting up the database for our application
#### Setting up the database
The database for our application is mongoDB, a NoSQL database management program. With mongoDB, we will use the key-value pair structure to build our documents.
we firstly define flexible schemas for the different sets of data like campgrounds comments, reviews, images etc and create models under the schemas defined.
#### Mongoose & MongoDB workflow
The interface to our application's database will be mongoose, a Node.js-based Object Data Modeling (ODM) library for MongoDB. This will enable us to connect to our database, define a schema for a set of data, create data models under the schema, and perform CRUD operations on our data right from our server.js file.

To connect to our database, have mongoDB running on the terminal, and inside the server file, use the `mongoose.connect()` method.
```
mongoose.connect('mongodb://localhost:27017/myapp', {useNewUrlParser: true, useUnifiedTopology: true})
```
Once we've created and connected to the database "myapp", we can define a schema for our documents. This is done by defining key-value pairs and stating the optional types of data to expect inside our documents. 
`Example`
```
const CampgroundSchema = new mongoose.Schema({price: {type: Number}})
```
In this line above, we defined a schema, that will expect `price` to be of type `number`. Then we make a model called `Campground` using the `CampgroundSchema` defined.
```
const Campground = mongoose.model('Campground', CampgroundSchema);
```
Then Mongoose creates a collection in mongoDB with the name "campgrounds", which will store instances of our `Campground` model. We can now create the different instances using the `Campground` model and the `new` keyword.
```
    const woodsCampground = new Campground({price: 300});
```
We can finally `save` tell mongoose to save the document we just created to our mongoDB collection `campgrounds`
``` markdown
woodsCampground.save();
```
We will follow this same workflow to create collections and carry out CRUD operations to every collection we will create with mongoose and mongoDB.
____
#### Routing (Express and Node)

For navigation across our application's pages, we will build our routing logic on Express and Node which will allow us to define RESTful API endpoints and routes for our client-server operations. 
`Import express`
``` 
const express = require('express');
```
run `express()` and save it to a variable `app` in our instance.
```
const app = express();
```
And under `app` we will have access to several methods that will help us define routes, run middleware and handle errors.
#### Defining the application's base route
Before defining a route to our application, we will bind and listen for connections on the specified host (_hosting will be on our local machine_) and port with the app.listen() method.
```
app.listen('3000', () => {
    console.log('listening on port 3000');
})
```
This code snippet is placed at the bottom of our server.js code (as the order will matter when we create our routes). 
The first route we will define is the home route. For this, we will use the get method on the app object made by express.
``` markdown
app.get('/', (req, res) => {
    res.send('Welcome to the Homepage');
) 
```
With this line, we send back "Welcome to the Homepage" whenever a `get` request is sent to our application's base URL.
In the same way, we will define additional routes to our application's pages.
#### Templating
To avoid typing out every single response to our routes, we need to make use of templating. The tools we will use for templating our web pages will be [EJS](https://ejs.co/) and [EJS-MATE](https://www.npmjs.com/package/ejs-mate).
#### Setting up EJS and EJS-Mate

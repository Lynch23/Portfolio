# API for exercise app
- MongoDB data Models
user - Accepts a username
exercise - Accepts a username, a description, a date and a duration

# Schemas
After importing mongoose in our model files (users.js and exercises.js), we define the schemas in the two model files with the following syntax.
```
const userSchema = new mongoose.Schema({
    username : {
        type: String,
        minlength: 3,
        unique: true,
        required: true
    } 
})```

# Routes
To successfully define mini-application routes for each extention ('/users' or '/exercise'), we import express, then excute express.Router() method, which returns a router object, on this router object, you can add middleware and HTTP method routes such as get, put, post... We then export the router. For instance, in the models/users.js.
```
const router = require('express').Router()

router.get('/', (req, res, next) => {
    // login goes here
    next();
});

module.exports = router;
```

And now we can import and use the router in the main server.js file for a particular root URL, in this way, we separate the routes into files or even mini-apps.
```
const userRouter = require('./routes/users');

app.use('/users', userRouter);
```
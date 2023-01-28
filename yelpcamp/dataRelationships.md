Modelling "one-to-N" data relationships and subsequently design our database. This will cover how the different types of data will relate with one another. Example, each campground will have comments and reviews,
which will be stored under different models. We will need to define a relation between a campground and the comments that are under a specific campround. 
### Mongo Relationships
1. Types of "one-to-N" data relationships
    - One to few: One to few, data can be embedded directly into the document.
    - One to many: In a One to many relationship, data is stored separately, but then store references to documents ID's somewhere inside the parent
    - One to Bajillions: With thousands or more documents, it's more efficient to store a reference to the parent on the child document. In an example, a user A with N comments, it's more efficient to store 
	to store a reference to the user on every comment. The reference ID will be stored on the N side of the relationship.
2. 6 Rules of thumb for MongoDB Schema Design.
    Side notes on database schema design.
    1. 
    
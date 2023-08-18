const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const Review = require('./review');

const CampgroundSchema = new Schema({
    title: {
        type: String
    },

    price: {
        type: Number
    },
    description: {
        type: String,
    },
    location: {
        type: String
    },
    image: {
        type: String
    },
    reviews : [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }],
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
});

CampgroundSchema.post('findOneAndDelete', async function(doc) {
    console.log(doc);
    if(doc) {
        await Review.deleteMany({
            _id: {
                $in: doc.reviews
            }
        })
    }
});

module.exports = mongoose.model('Campground', CampgroundSchema);

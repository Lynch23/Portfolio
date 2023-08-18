const express = require('express');
const catchAsync = require('../helpers/catchAsync');
const router = express.Router();
const ExpressError = require('../helpers/ExpressError');
const Campground = require('../models/campground');
const { campgroundSchema } = require('../validationSchemas.js');
const { isLoggedIn } = require('../middleware');


const validateCampground = (req, res, next) => {
    const { error } = campgroundSchema.validate(req.body);
    if (error) {
        const msg = error.details.map(el => el.message).join(',');
        console.log(msg);
        throw new ExpressError(msg, 404);
    }
    next();
};


router.post('/', isLoggedIn, validateCampground, catchAsync(async (req, res, next) => {
    const campground = new Campground(req.body.campground);
    campground.author = req.user._id;
    await campground.save();
    req.flash('success', 'Successfully made a campground!');    
    res.redirect(`/campgrounds/${campground._id}`);
}));

router.put('/:id', isLoggedIn, validateCampground, catchAsync(async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findByIdAndUpdate(id, { ...req.body.campground });
    res.redirect(`/campgrounds/${campground._id}`);
    
}));


router.delete('/:id', isLoggedIn, catchAsync(async(req, res) => {
    const { id } = req.params;
    await Campground.findByIdAndDelete(id);
    req.flash('success', 'Successfully deleted campground');
    res.redirect('/campgrounds');
}));



router.get('/', catchAsync(async (req, res) => {
    const campgrounds = await Campground.find({});
    res.render('campgrounds/index', { campgrounds });
}));

router.get('/:id/edit', isLoggedIn, catchAsync(async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findById(id);
    if(!campground) {
        req.flash('error', 'The requested campground does not exit.')
        return res.redirect('/campgrounds');
    }
    res.render('campgrounds/edit', { campground });
}));
router.get('/new', isLoggedIn, (req, res) => {
    res.render('campgrounds/new');
});

router.get('/:id', catchAsync(async (req, res) => {
    const { id } = req.params;
    const campground = await Campground.findById(id).populate('reviews').populate('author');
    if(!campground) {
        req.flash('error', 'The requested campground does not exit.')
        return res.redirect('/campgrounds');
    }
    console.log(req.user)
    res.render('campgrounds/show', { campground });
}));

module.exports = router;
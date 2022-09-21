const express = require('express');
const router = express.Router();
const db = require('../models');

// conspiracy index get route
router.get('/', (req, res) => {
    db.conspiracy.findAll()
    .then((conspiracy) => {
        res.render('conspiracy/index', {conspiracies: conspiracy})
    })
    .catch((error => {
        res.status(400).render('main/404')
    }))
});


// conspiracy post route
router.post('/', (req, res) => {
    db.conspiracy.create({
        userId: 1,
        title: req.body.title,
        description: req.body.description,
        rating: 0,
        isLive: false
    })
        .then((post) => {
            res.redirect('/profile')
        })
        .catch((error) => {
            res.status(400).render('main/404')
        })
})

router.get('/new', (req, res) => {
    res.render('conspiracy/new')
});
    



module.exports = router

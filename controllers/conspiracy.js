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

router.get('/show', (req, res) => {
    db.conspiracy.findAll({
        include: [db.user],
        where: {userId: currentUser.userId}
    })
    .then((conspiracy) => {
        res.render('conspiracy/show', {conspiracies: conspiracy})
    })
    .catch((error => {
        res.status(400).render('main/404')
    }))
});


// conspiracy post route
router.post('/', (req, res) => {
    db.conspiracy.create({
        userId: req.body.userId,
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

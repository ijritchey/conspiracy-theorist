const express = require('express');
const router = express.Router();
const db = require('../models');



router.post('/', (req, res) => {
    db.resource.create({
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

module.exports = router

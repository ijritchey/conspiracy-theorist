const express = require('express');
const router = express.Router();
const db = require('../models');

// conspiracy post route
router.post('/', (req, res) => {
    db.article.create({
        name: req.body.name,
        description: req.body.description
    })
        .then((post) => {
            res.redirect('/')
        })
        .catch((error) => {
            res.status(400).render('main/404')
        })
})

router.get('/new', (req, res) => {
    db.user_conciracies.findAll()
        .then((authors) => {
            res.render('conspiracy/new', { conspiracy: conspiracy })
        })
        .catch((error) => {
            res.status(400).render('main/404')
        })
})



module.exports = router

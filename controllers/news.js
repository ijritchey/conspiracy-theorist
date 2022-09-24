const express = require('express');
const router = express.Router();
const db = require('../models');



router.post('/', (req, res) => {
    db.resource.create({
        conspiracyId: req.body.conspiracyId,
        title: req.body.title,
        description: req.body.description,
        content: req.body.contnet,
        url: req.body.url,
        img: req.body.img,
        published: req.body.published,
        sourceName: req.body.sourceName,
        sourceUrl: req.body.sourceUrl
    })
        .then((post) => {
            res.redirect('/')
        })
        .catch((error) => {
            res.status(400).render('main/404')
        })
});

module.exports = router

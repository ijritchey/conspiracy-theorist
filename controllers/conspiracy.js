const express = require('express');
const router = express.Router();
const db = require('../models');

// conspiracy index get route
router.get('/', (req, res) => {
    db.conspiracy.findAll()
        .then((conspiracy) => {
            res.render('conspiracy/index', { conspiracies: conspiracy })
        })
        .catch((error => {
            res.status(400).render('main/404')
        }))
});

router.get('/new', (req, res) => {
    res.render('conspiracy/new')
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
});




router.get('/:id', async (req, res) => {
    let findConspiracy = await db.conspiracy.findAll({
        where: { id: req.params.id }
    })
    res.render('conspiracy/one', { conspiracies: findConspiracy })
});

router.get('/list/:id', (req, res) => {
    db.conspiracy.findAll({
        include: [db.user, db.resource],
        where: { userId: req.params.id }
    })
        .then((conspiracy) => {
            res.render('conspiracy/show', { conspiracies: conspiracy })
            // res.send(conspiracy);
        })
        .catch((error => {
            res.status(400).render('main/404')
        }))
});


router.put('/edit/:id', async (req, res, next) => {
    let updateConspiracy = await db.conspiracy.update({
            title: req.body.title,
            description: req.body.description,
            isLive: req.body.isLive
        },
        {
            where: { id: req.params.id }
        });
        res.redirect(`/edit/${req.params.id}`)
})


router.delete('/:id', async (req, res) => {
    // get conspiracy and remove

    let songsConpiracy = await db.conspiracy.destroy({
        where: { id: req.params.id }
    });
    console.log('==== this is the delete route ======');
    // console.log('Amount of songs deleted', songsConpiracy);
    res.redirect('/conspiracy');
});


module.exports = router

const express = require('express');
const router = express.Router();
const db = require('../models');

// conspiracy index get route
router.get('/', (req, res) => {
    db.conspiracy.findAll({
        order: [
            ['id', 'DESC']
        ]
    })
        .then((conspiracy) => {
            res.render('conspiracy/index', { conspiracies: conspiracy })
        })
        .catch((error => {
            res.status(400).render('main/404')
        }))
});

//create new conspiracy route

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


// conspiracy edit route

router.get('/:id', async (req, res) => {
    let findConspiracy = await db.conspiracy.findAll({
        where: { id: req.params.id }
    })
    res.render('conspiracy/one', { conspiracies: findConspiracy })
});

// personal list of conspiracies route

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


// PUT upvote/downvote route
router.put('/vote/:id', async (req, res) => {
    const vote = req.body.vote;
    if (vote === 'upvote') {
        let upvoteConspiracy = await db.conspiracy.increment('rating', { by: 1, where: { id: `${req.params.id}` } })
    } else {
        let downvoteConspiracy = await db.conspiracy.increment('rating', { by: -1, where: { id: `${req.params.id}` } })
    }
    res.redirect('/conspiracy')
});

// PUT personal conspiracy update route
router.put('/edit/:id', async (req, res) => {
    let updateConspiracy = await db.conspiracy.update({
        title: req.body.title,
        description: req.body.description,
        isLive: req.body.isLive
    },
        {
            where: { id: req.params.id }
        });
    res.redirect(`/conspiracy/${req.params.id}`)
});


router.delete('/news/:id', async (req, res) => {
    // get conspiracy and remove

    let songsConpiracy = await db.resource.destroy({
        include: [db.user],
        where: { id: req.params.id }
    });
    console.log('==== this is the delete route ======');
    res.redirect('/conspiracy');
});

// 
router.delete('/:id', async (req, res) => {
    // get conspiracy and remove

    let songsConpiracy = await db.conspiracy.destroy({
        where: { id: req.params.id }
    });
    console.log('==== this is the delete route ======');
    res.redirect('/conspiracy');
});


module.exports = router

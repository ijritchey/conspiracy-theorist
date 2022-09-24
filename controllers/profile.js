// const express = require('express');
// const router = express.Router();
// const db = require('../models');

// // profile get route to display personal conspiracies

// router.get('/profile', (req, res) => {
//     db.conspiracy.findAll({
//         incldue: [db.user],
//         where: req.body.userId
//     })
//     .then((conspiracy) => {
//         // res.render('profile', {conspiracies: conspiracy})
//         res.send(conspiracy)
//     })
//     .catch((error => {
//         res.status(400).render('main/404')
//     }))
// });
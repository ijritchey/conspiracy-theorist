require('dotenv').config();
const express = require('express');
const layouts = require('express-ejs-layouts');
const app = express();
const session = require('express-session');
const flash = require('connect-flash');
const passport = require('./config/ppConfig')
const isLoggedIn = require('./middleware/isLoggedIn');
const axios = require('axios');

const SECRET_SESSION = process.env.SECRET_SESSION;
console.log('Yoooo this the secret:', SECRET_SESSION);
const API_TOKEN = process.env.API_TOKEN;
console.log('This is the api-token:', API_TOKEN)



app.set('view engine', 'ejs');

app.use(require('morgan')('dev'));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));
app.use(layouts);

app.use(session({
  secret: SECRET_SESSION,    // What we actually will be giving the user on our site as a session cookie
  resave: false,             // Save the session even if it's modified, make this false
  saveUninitialized: true    // If we have a new session, we save it, therefore making that true
}));

app.use(flash());            // flash middleware

app.use(passport.initialize());      // Initialize passport
app.use(passport.session());         // Add a session



app.use((req, res, next) => {
  console.log(res.locals);
  res.locals.alerts = req.flash();
  res.locals.currentUser = req.user;
  next();
});

// testing axios get request


app.get('/', (req, res) => {

  axios.get(`https://gnews.io/api/v4/search?q=example&token=${API_TOKEN}`)
    .then(response => {
      // console.log(articles.data.title);
      res.send(response.data);
      res.render('main/index', { articles: response.data });
    }).catch((error) => {
      console.log(error)
      res.status(400).render('main/404')
    });
});

// access to all of the auth routes
app.use('/auth', require('./controllers/auth'));

// Add this above /auth controllers
app.get('/profile', isLoggedIn, (req, res) => {
  const { id, name, email } = req.user.get();
  res.render('profile', { id, name, email });
});

const PORT = process.env.PORT || 8000;
const server = app.listen(PORT, () => {
  console.log(`🎧 You're listening to the smooth sounds of port ${PORT} 🎧`);
});

module.exports = server;

require('dotenv').config()
const express =  require('express')
    , bodyParser = require('body-parser')
    , massive = require('massive')
    , passport = require('passport')
    , Auth0Session = require('passport-auth0')
    , session = require('express-session')

const {
  SERVER_PORT,
  CONNECTION_STRING,
  SESSION_SECRET,
  DOMAIN,
  CLIENT_ID,
  CLIENT_SECRET,
  CALLBACK_URL,
} = process.env

const app = express()

massive(CONNECTION_STRING)
  .then((db) => {
    console.log('Connected to database');
    app.set('db', db)
  })

app.use(session({
  secret: SESSION_SECRET,
  resave: false,
  saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())
passport.use(new Auth0Session({
  domain: DOMAIN,
  clientID: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  callbackURL: CALLBACK_URL,
  scope: 'openid profile'
}, (accessToken, refreshToken, extraParams, profile, done) => {
  let db = app.get('db')
  let {displayName, picture, id} = profile
  db.find_user([id])
    .then((foundUser) => {
      if(foundUser[0]){
      done(null, foundUser[0].id)
    } else{
      db.create_user([displayName, picture, id])
        .then( (user) => {
          done(null, user[0].id)
        })
    }
  })
}))

passport.serializeUser((id, done) => {
  done(null, id)
})
passport.deserializeUser((id, done) => {
  app.get('db').find_session_user([id])
    .then((user) => {
      done(null, user[0])
    })
})

app.get('/login', passport.authenticate('auth0'))
app.get('/auth/callback', passport.authenticate('auth0', {
  successRedirect: 'http://localhost:3000/#/profile'
}))
app.get('/auth/me', (req, res) => {
  if(req.user){
    res.status(200).send(req.user)
  } else {
    res.status(401).send('Please login')
  }
})

app.listen(SERVER_PORT, console.log(`🎸 Lets rock on port ${SERVER_PORT} 🎸`))
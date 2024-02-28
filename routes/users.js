const express = require('express');
const passport = require('passport');
const router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

router.post('/register', async (req, res) => {
  try {
    const { username, email, password } = req.body;
    const newUser = new User({
        username,
        email,
        password,
        favorites: [] 
    });
    const savedUser = await newUser.save();
    
    req.login(savedUser, (err) => {
      if (err) throw err;
      res.redirect('/dashboard'); 
    });
  } catch (error) {
    console.log(error);
    res.redirect('/register');
  }
});




router.post('/login', passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect: '/',
  failureFlash: true
}));


  

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;

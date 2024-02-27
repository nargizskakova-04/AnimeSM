const express = require('express');
const passport = require('passport');
const router = express.Router();
const User = require('../models/user');

router.post('/register', async (req, res) => {
  try {
    req.flash('success', 'Регистрация прошла успешно! Пожалуйста, войдите.');
    res.render('index', { message: req.flash('success') }); 
  } catch (error) {
    console.log(error);
    req.flash('error', 'Ошибка при регистрации.');
    res.render('index', { message: req.flash('error') });
  }
});
router.post('/login', passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect: '/',
  failureFlash: true
}));
router.post('/users/login', passport.authenticate('local', {
  successRedirect: '/dashboard',
  failureRedirect: '/',
  failureFlash: true
}));

  

router.get('/logout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;

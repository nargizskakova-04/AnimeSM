const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/dashboard', (req, res) => {
  if (!req.user) {
    return res.redirect('/login'); 
  }
  res.render('dashboard', { user: req.user });
});

module.exports = router;

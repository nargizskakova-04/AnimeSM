const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('index');
});

router.get('/dashboard', async (req, res) => {
  if (!req.user) {
    return res.redirect('/');
  }

  
  const user = {
    username: req.user.username,
    email: req.user.email,
    favorites: req.user.favorites
  };

  res.render('dashboard', { user: req.user});
});


module.exports = router;

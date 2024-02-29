const express = require('express');
const router = express.Router();
const User = require('../models/user'); 

router.get('/friends', async (req, res) => {
  try {
    if (!req.user) {
      return res.redirect('/login'); 
    }

    const users = await User.find({});
    res.render('friends', { 
      user: req.user, 
      users: users 
    });
  } catch (error) {
    console.error('Ошибка при получении списка пользователей:', error);
    res.status(500).send('Ошибка сервера');
  }
});

module.exports = router;

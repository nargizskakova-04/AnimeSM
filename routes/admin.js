const express = require('express');
const router = express.Router();
const User = require('../models/user'); 
const bcrypt = require('bcrypt');

router.get('/admin', async (req, res) => {
    try {
      if (!req.user) {
        return res.redirect('/login'); 
      }
  
      const users = await User.find({});
      res.render('admin', { 
        user: req.user, 
        users: users 
      });
    } catch (error) {
      console.error('Error getting list', error);
      res.status(500).send('Ошибка сервера');
    }
  });

  router.get('/admin', async (req, res) => {
    try {
      const users = await User.find(); 
      res.render('admin', { users });
    } catch (error) {
      console.error(error);
      res.send("An error occurred while fetching users.");
    }
  });

  router.post('/admin/add-user', async (req, res) => {
    const { email, username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); 
    const newUser = new User({
      email,
      username,
      password: hashedPassword,
    });
  
    try {
      await newUser.save();
      res.redirect('/admin'); 
    } catch (error) {
      console.error(error);
      res.send("Failed to add new user.");
    }
  });
  router.post('/admin/delete-user/:userId', async (req, res) => {
    try {
      await User.findByIdAndDelete(req.params.userId);
      res.redirect('/admin');
    } catch (error) {
      console.error(error);
      res.send("Failed to delete user.");
    }
  });

  router.get('/admin/edit-user/:userId', async (req, res) => {
    const { username, email, about } = req.body;
    let update = { username, email, about};
    try {
        await User.findByIdAndUpdate(req.params.id, update);
        res.redirect('/admin'); 
    } catch (error) {
        console.error(error);
        res.send("Failed to edit user.");
    }
});

  module.exports = router;

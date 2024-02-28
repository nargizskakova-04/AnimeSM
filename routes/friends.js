const express = require('express');
const router = express.Router();

router.get('/friends', async (req, res) => {
    try {
      res.render('friends', { 
        user: req.user
      });
    } catch (error) {
        console.error(error);
        res.status(500).send('Ошибка сервера');
    }
  });

module.exports = router;
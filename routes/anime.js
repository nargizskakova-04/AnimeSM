const express = require('express');
const router = express.Router();
const getAnimeList = require('../utils/animeApi');

router.get('/', (req, res) => {
  res.send('Страница аниме');
});

router.get('/', async (req, res) => {
  const animes = await getAnimeList("Naruto"); 
  res.render('animes', { animes });
});

module.exports = router;

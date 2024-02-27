const express = require('express');
const router = express.Router();
const getAnimeList = require('../utils/animeApi');
const axios = require('axios');

router.get('/search', async (req, res) => {
  try {
    const query = req.query.query;
    const response = await axios.get(`https://api.jikan.moe/v3/search/anime?q=${query}`);
    const animes = response.data.results;
    res.render('animes', { animes }); 
  } catch (error) {
    console.error(error);
    res.render('animes', { animes: [] }); 
  }
});


/*router.get('/', (req, res) => {
  res.send('Страница аниме');
});*/

/*router.get('/', async (req, res) => {
  const animes = await getAnimeList("Naruto"); 
  res.render('animes', { animes });
});
*/

router.get('/animes', async (req, res) => {
  try {
      const animes = await getAnimeList('naruto');
      res.render('animes', { animes }); 
  } catch (error) {
      console.error(error);
      res.status(500).send('Ошибка сервера');
  }
});


module.exports = router;

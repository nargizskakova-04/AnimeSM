const express = require('express');
const router = express.Router();
const fetchAnimeList = require('../utils/animeApi');
const axios = require('axios');

router.get('/search', async (req, res) => {
  try {
    const query = req.query.query;
    const response = await axios.get(`https://api.jikan.moe/v4/search/anime?q=${query}`);
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

router.get('/', async (req, res) => {
  try {
    const response = await axios.get('https://api.jikan.moe/v4/top/anime'); 
    const animes = response.data.data;
    res.render('animes', { animes });
  } catch (error) {
    console.error(error);
    res.render('animes', { animes: [] });
  }
});


 

router.post('/add-to-favorites', async (req, res) => {
  // Здесь должна быть логика добавления аниме в список избранных пользователя
});

module.exports = router;

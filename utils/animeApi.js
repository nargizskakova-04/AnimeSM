const axios = require('axios');

async function fetchAnimeList() {
    try {
      const url = 'https://api.jikan.moe/v4/top/anime'; 
      const response = await axios.get(url);
      return response.data.data;  
    } catch (error) {
      console.error('Ошибка при получении списка аниме:', error);
      return []; 
    }
  }
module.exports = fetchAnimeList;


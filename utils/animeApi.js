const axios = require('axios');

async function getAnimeList(query) {
  try {
    const response = await axios.get(`https://api.jikan.moe/v3/search/anime?q=${query}&page=1`);
    return response.data.results;
  } catch (error) {
    console.error(error);
    return [];
  }
}

module.exports = getAnimeList;

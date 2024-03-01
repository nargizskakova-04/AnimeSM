const express = require('express');
const router = express.Router();


router.get('/manga', (req, res) => {
    fetch('https://kitsu.io/api/edge/manga?page[limit]=10&sort=popularityRank')
        .then(response => response.json())
        .then(data => {
            user: req.user, 
            res.render('manga', { user: req.user, mangas: data.data });
        })
        .catch(error => {
            console.error('Error:', error);
            res.send('An error occurred');
        });
});

module.exports = router;

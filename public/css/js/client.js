document.addEventListener('DOMContentLoaded', () => {
    const favoriteButtons = document.querySelectorAll('.add-to-favorite-button');
  
    favoriteButtons.forEach(button => {
      button.addEventListener('click', (e) => {
        const animeId = e.target.dataset.animeId; 
        fetch('/add-to-favorites', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ animeId: animeId })
        })
        .then(response => {
          if (response.ok) {
          }
        })
        .catch(error => {
          console.error('Ошибка при добавлении в избранное:', error);
        });
      });
    });
  });
  
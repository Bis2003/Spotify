// Add hover effect to song cards
document.querySelectorAll('.song-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.cursor = 'pointer';
    });
});

// Add hover effect to artist cards
document.querySelectorAll('.artist-card').forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.cursor = 'pointer';
    });
});

// Search functionality
const searchInput = document.querySelector('.search-bar input');
searchInput.addEventListener('focus', () => {
    searchInput.placeholder = 'Search for songs or artists';
});

searchInput.addEventListener('blur', () => {
    searchInput.placeholder = 'What do you want to play?';
});

// Create playlist button
const createPlaylistBtn = document.querySelector('.create-btn');
createPlaylistBtn.addEventListener('click', () => {
    alert('Create playlist functionality will be implemented here');
}); 
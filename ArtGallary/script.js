document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const artDetail = document.getElementById('art-detail');
    const backButton = document.getElementById('back-button');
    const artImage = document.getElementById('art-image');
    const artTitle = document.getElementById('art-title');
    const artDescription = document.getElementById('art-description');
    const commentsList = document.getElementById('comments-list');
    const commentInput = document.getElementById('comment-input');
    const submitComment = document.getElementById('submit-comment');

    const artworks = [
        { id: 1, title: 'Artwork 1', description: 'Description of artwork 1', image: 'images/art1.jpg', comments: [] },
        { id: 2, title: 'Artwork 2', description: 'Description of artwork 2', image: 'images/art2.jpg', comments: [] },
        { id: 3, title: 'Artwork 3', description: 'Description of artwork 3', image: 'images/art3.jpg', comments: [] },
    ];

    gallery.addEventListener('click', (e) => {
        if (e.target.closest('.artwork')) {
            const artworkId = e.target.closest('.artwork').getAttribute('data-id');
            const artwork = artworks.find(art => art.id === parseInt(artworkId));
            if (artwork) {
                displayArtwork(artwork);
            }
        }
    });

    backButton.addEventListener('click', () => {
        artDetail.classList.add('hidden');
        gallery.style.display = 'flex';
    });

    submitComment.addEventListener('click', () => {
        const commentText = commentInput.value.trim();
        if (commentText) {
            const artworkId = artDetail.getAttribute('data-id');
            const artwork = artworks.find(art => art.id === parseInt(artworkId));
            if (artwork) {
                artwork.comments.push(commentText);
                commentInput.value = '';
                displayComments(artwork.comments);
            }
        }
    });

    function displayArtwork(artwork) {
        artImage.src = artwork.image;
        artTitle.textContent = artwork.title;
        artDescription.textContent = artwork.description;
        displayComments(artwork.comments);
        artDetail.setAttribute('data-id', artwork.id);
        gallery.style.display = 'none';
        artDetail.classList.remove('hidden');
    }

    function displayComments(comments) {
        commentsList.innerHTML = '';
        comments.forEach(comment => {
            const li = document.createElement('li');
            li.textContent = comment;
            commentsList.appendChild(li);
        });
    }
});

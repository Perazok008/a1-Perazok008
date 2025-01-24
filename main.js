document.addEventListener('DOMContentLoaded', function() {
    // Get all articles
    const articles = document.querySelectorAll('article');
    
    // Ensure articles exist
    if (articles.length > 0) {
        // Force browser to recognize initial state
        requestAnimationFrame(() => {
            articles.forEach((article, index) => {
                // Set initial state
                article.style.transition = 'opacity 0.2s ease-in';
                
                setTimeout(() => {
                    article.style.opacity = '1';
                }, 100 + (index * 300));
            });
        });
    }
});
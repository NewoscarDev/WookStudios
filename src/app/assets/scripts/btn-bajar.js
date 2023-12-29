function showScrollToTopButton() {
            const scrollToTopButton = document.querySelector('.scroll-to-top');
            if (window.scrollY > 100) {
                scrollToTopButton.style.display = 'block';
            } else {
                scrollToTopButton.style.display = 'none';
            }
        }

        // Reemplaza el evento de escucha del documento con setInterval
        setInterval(showScrollToTopButton, 100);

        document.querySelector('.scroll-to-top').addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
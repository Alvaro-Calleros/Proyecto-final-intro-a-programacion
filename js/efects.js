const links = document.querySelectorAll('nav a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', function(event) {

        event.preventDefault();

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});
document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll('.content-image');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const fadeInOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(fadeInOnScroll, options);

    images.forEach(image => {
        observer.observe(image);
    });
});

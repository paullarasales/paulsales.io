document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.scroll-animation');
    const skills = document.getElementById('skill');
    const skillSection = document.getElementById('section2');
    const portfolio = document.getElementById('portfolio');
    const serviceSection = document.getElementById('section3');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && entry.intersectionRatio > 0.5) {
                entry.target.classList.add('scroll-reveal');

                if (entry.target.id === 'section2') {
                    document.querySelector('.frontend').classList.add('slideInFromLeft');
                    document.querySelector('.backend').classList.add('slideInFromRight');
                }
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => {
        observer.observe(section);
    });

    skills.addEventListener('click', function() {
        skillSection.scrollIntoView({ behavior: 'smooth' });
    });

    portfolio.addEventListener('click', function() {
        serviceSection.scrollIntoView({ behavior: 'smooth' });
    });

    function toggleNav() {
        var links = document.querySelector('.links');
        links.classList.toggle('show');
    }

});
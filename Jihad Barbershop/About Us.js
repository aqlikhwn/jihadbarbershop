// JavaScript for the About Us page

document.addEventListener('DOMContentLoaded', () => {
    const aboutUsImage = document.getElementById('about-us-image');

    // Add a hover effect to the image
    aboutUsImage.addEventListener('mouseenter', () => {
        aboutUsImage.style.transform = 'scale(1.05)';
        aboutUsImage.style.transition = 'transform 0.3s ease';
    });

    aboutUsImage.addEventListener('mouseleave', () => {
        aboutUsImage.style.transform = 'scale(1)';
    });

    // Smooth scroll for navigation links
    const navLinks = document.querySelectorAll('.navbar a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').slice(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
});
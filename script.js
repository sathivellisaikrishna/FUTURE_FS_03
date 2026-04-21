// Sticky Navbar + Scroll Reveal
window.addEventListener('scroll', () => {
    const nav = document.getElementById('navbar');

    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }

    const reveals = document.querySelectorAll('.scroll-reveal');

    reveals.forEach(el => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - 150) {
            el.classList.add('active');
        }
    });
});

// Mobile Menu
const menuBtn = document.getElementById('menuBtn');
const navLinks = document.getElementById('navLinks');

if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');

        const icon = menuBtn.querySelector('i');
        icon.classList.toggle('fa-bars');
        icon.classList.toggle('fa-times');
    });
}

// Close menu on click
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// Form Submission (SAFE)
const form = document.getElementById('gymContactForm');

if (form) {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("Message sent successfully!");
        form.reset();
    });
}

// Initial scroll trigger
window.dispatchEvent(new Event('scroll'));
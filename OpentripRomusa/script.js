document.addEventListener('DOMContentLoaded', () => {
    
    // Smooth Scroll for Navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
                
                // Close mobile menu if open
                if (navLinks.classList.contains('active')) {
                    navLinks.classList.remove('active');
                }
            }
        });
    });

    // Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn) {
        mobileBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Scroll Animations (Intersection Observer)
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in-view', 'active');
                // Optional: Stop observing once revealed
                // observer.unobserve(entry.target); 
            }
        });
    }, observerOptions);

    // Elements to animate
    const animatedElements = document.querySelectorAll(
        '.fade-in-up, .fade-in-left, .fade-in-right, .reveal-text'
    );
    
    animatedElements.forEach(el => observer.observe(el));

    // Parallax Effect for Hero Image
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const heroImg = document.querySelector('.hero-img');
        
        if (heroImg && scrolled < window.innerHeight) {
            // Move image slightly slower than scroll and zoom out slightly
            heroImg.style.transform = `translateY(${scrolled * 0.4}px) scale(${1.1 - scrolled * 0.0002})`;
        }
        
        // Navbar glass effect darkening on scroll
        const navbar = document.querySelector('.navbar');
        if (scrolled > 50) {
            navbar.style.background = 'rgba(15, 17, 21, 0.95)';
            navbar.style.padding = '1rem 0';
        } else {
            navbar.style.background = 'rgba(15, 17, 21, 0.85)';
            navbar.style.padding = '1.5rem 0';
        }
    });

});

// mobile-nav.js - Mobile Navigation Functionality

document.addEventListener('DOMContentLoaded', function() {
    // Create hamburger menu element
    const header = document.querySelector('header');
    const nav = document.querySelector('.nav-links');
    
    if (window.innerWidth <= 768) {
        // Create hamburger menu button
        const hamburger = document.createElement('div');
        hamburger.className = 'hamburger-menu';
        hamburger.innerHTML = '<span></span><span></span><span></span>';
        
        // Add to navbar
        const navbar = document.querySelector('.navbar');
        navbar.appendChild(hamburger);
        
        // Toggle menu on click
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('active');
            document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
        });
        
        // Close menu when clicking on a link
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
        // Close menu when clicking outside
        document.addEventListener('click', function(event) {
            if (!navbar.contains(event.target) && nav.classList.contains('active')) {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    // Handle window resize
    window.addEventListener('resize', function() {
        if (window.innerWidth > 768) {
            const hamburger = document.querySelector('.hamburger-menu');
            if (hamburger) {
                hamburger.remove();
                nav.classList.remove('active');
                document.body.style.overflow = '';
            }
        } else if (window.innerWidth <= 768 && !document.querySelector('.hamburger-menu')) {
            // Re-add hamburger if resized down
            location.reload(); // Simple solution - reload page
        }
    });
    
    // Improve search input on mobile
    const searchInput = document.getElementById('searchInput');
    if (searchInput && window.innerWidth <= 768) {
        searchInput.setAttribute('autocapitalize', 'off');
        searchInput.setAttribute('autocorrect', 'off');
        
        // Prevent zoom on focus (iOS)
        searchInput.addEventListener('focus', function() {
            this.style.fontSize = '16px';
        });
    }
    
    // Improve map interaction on mobile
    if (typeof map !== 'undefined' && window.innerWidth <= 768) {
        map.dragging.disable();
        map.touchZoom.disable();
        map.doubleClickZoom.disable();
        map.scrollWheelZoom.disable();
        
        // Re-enable some controls with tap
        map.on('click', function() {
            if (!map.dragging.enabled()) {
                map.dragging.enable();
                map.touchZoom.enable();
            }
        });
    }
});
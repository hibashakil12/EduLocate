

document.addEventListener('DOMContentLoaded', function() {

    const header = document.querySelector('header');
    const nav = document.querySelector('.nav-links');
    
    if (window.innerWidth <= 768) {
      
        const hamburger = document.createElement('div');
        hamburger.className = 'hamburger-menu';
        hamburger.innerHTML = '<span></span><span></span><span></span>';
        

        const navbar = document.querySelector('.navbar');
        navbar.appendChild(hamburger);
        
      
        hamburger.addEventListener('click', function() {
            this.classList.toggle('active');
            nav.classList.toggle('active');
            document.body.style.overflow = nav.classList.contains('active') ? 'hidden' : '';
        });
        
        
        nav.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
                document.body.style.overflow = '';
            });
        });
        
    
        document.addEventListener('click', function(event) {
            if (!navbar.contains(event.target) && nav.classList.contains('active')) {
                hamburger.classList.remove('active');
                nav.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
   
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
    
 
    const searchInput = document.getElementById('searchInput');
    if (searchInput && window.innerWidth <= 768) {
        searchInput.setAttribute('autocapitalize', 'off');
        searchInput.setAttribute('autocorrect', 'off');
        
       
        searchInput.addEventListener('focus', function() {
            this.style.fontSize = '16px';
        });
    }
 
    if (typeof map !== 'undefined' && window.innerWidth <= 768) {
        map.dragging.disable();
        map.touchZoom.disable();
        map.doubleClickZoom.disable();
        map.scrollWheelZoom.disable();
        
  
        map.on('click', function() {
            if (!map.dragging.enabled()) {
                map.dragging.enable();
                map.touchZoom.enable();
            }
        });
    }
});

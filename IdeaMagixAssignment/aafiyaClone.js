

$(window).on('load', function() {
    $('#page-loader').fadeOut('slow', function() {
        $(this).remove();
    });
});


  
$(document).ready(function() {
    $("#patient-stories").owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true
    });
});

$(document).ready(function() {
    $("#doctor-carousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        nav: true,
        dots: true,  
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true
    });
});

$(document).ready(function() {
    $("#hospital-carousel").owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        nav: true,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: true
    });
});





// Toggle menu on mobile
document.addEventListener('DOMContentLoaded', function() {
   
    console.log("Clicked")
    document.querySelector('.main-menu-toggle').addEventListener('click', function() {
        const navLinks = document.querySelector('.main-nav-links');
        navLinks.classList.toggle('active');
    });

   
    document.querySelectorAll('.main-nav-links a').forEach(function(anchor) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({ behavior: 'smooth' });

               
                document.querySelectorAll('.main-nav-links a').forEach(function(link) {
                    link.classList.remove('active');
                });

               
                this.classList.add('active');

               
                document.querySelector('.main-nav-links').classList.remove('active');
            }
        });
    });
});





document.addEventListener('DOMContentLoaded', function() {
    var headers = document.querySelectorAll('.accordion-header');
    
    headers.forEach(function(header) {
        header.addEventListener('click', function() {
            var icon = header.querySelector('.icon');
            var content = header.nextElementSibling;
            var isOpen = content.classList.contains('open');

            // Close all open accordions
            document.querySelectorAll('.accordion-content.open').forEach(function(openContent) {
                openContent.classList.remove('open');
                openContent.previousElementSibling.querySelector('.icon').textContent = '+';
            });

         
            if (isOpen) {
                content.classList.remove('open');
                icon.textContent = '+';
            } else {
                content.classList.add('open');
                icon.textContent = '-';
            }
        });
    });
});

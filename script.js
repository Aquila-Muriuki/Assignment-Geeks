/*--menu toggle--*/

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

if (menuIcon) {
    menuIcon.onclick = () => { 
        menuIcon.classList.toggle('bx-x');
        navbar.classList.toggle('active');
    };
}






let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header  nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header   nav a[href*=' + id + ']').classList.add('active');
            });
        
        }
    })


    
         /*----sticy navbar-----*/

        let header = document.querySelector('header');

         header.classList.toggle('sticky', window.scrollY >100);



         /*remove menu toggle on scroll*/


         menuIcon.classList.remove('bx-x');
         navbar.classList.remove('active');

};

/*---scroll revel------*/


ScrollReveal
({ reset: true,
    distance:'80px',
    duration:2000,
    delay:200,
 });

 ScrollReveal().reveal('.home-content, .heading', { origin:'top' });
 ScrollReveal().reveal('.home-image, .service-container, .portfolio-container, .contact form, .blog-container',  { origin:'bottom' });
 
 ScrollReveal().reveal('.home-content h1, .about-img , .blog-img', { origin:'left' });
 ScrollReveal().reveal('.home-content p, .about-content, .blog-content', { origin:'right' });
 /*===========typed js===========*/

 const typed = new Typed('.multple-text', {
    strings: ['full-stack developer!', 'Ethical-hacker', 'Software-engineer', 'Mobile-developer', 'Data-analyst'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
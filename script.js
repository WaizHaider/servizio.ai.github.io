
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x')
    navbar.classList.toggle('active')
};

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () =>{
    sections.forEach(sec=>{
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >=  offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY > 100);
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

ScrollReveal(
    {
        reset: true,
        distance: '80px',
        duration: 2000,
        delay: 200
    });
ScrollReveal().reveal('.home-content , .heading' ,{origin:'top'});
ScrollReveal().reveal('.home-img , .services-container , .portfolio-box , .contact form' ,{origin:'bottom'});
ScrollReveal().reveal('.home-content h1 , .about-img' ,{origin:'left'});
ScrollReveal().reveal('.home-content p , .about-content' ,{origin:'right'});

const typed = new Typed('.multiple-text',{
    strings:['Flutter Applications','Native Applications','AI and ML Models','MERN Stack Development','and Data Analytics'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay:1000,
    loop: true
});
// JavaScript code to handle form submission
emailjs.init("lCVuvECWF9sBG2Vis");

    // JavaScript code to handle form submission
    const contactForm = document.getElementById('contactForm');

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent form submission

        // Retrieve form field values
        const fullName = document.getElementById('fullName').value;
        const email = document.getElementById('email').value;
        const mobileNumber = document.getElementById('mobileNumber').value;
        const emailSubject = document.getElementById('emailSubject').value;
        const message = document.getElementById('message').value;

        // Prepare the email template parameters
        const templateParams = {
            fullName: fullName,
            email: email,
            mobileNumber: mobileNumber,
            emailSubject: emailSubject,
            message: message
        };

        // Send the email
        emailjs.send("service_0jmnqic", "template_8vzyqey", templateParams)
            .then(function(response) {
                console.log('Email sent successfully!', response.status, response.text);
                // Reset form fields after successful submission
                contactForm.reset();
            }, function(error) {
                console.error('Error sending email:', error);
            });
    });

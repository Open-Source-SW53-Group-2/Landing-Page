
let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.header .navbar');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active')
}

window.onscroll = () => {
    menu.classList.remove('fa-times');
    navbar.classList.remove('active')
}

document.getElementById('joinForm').addEventListener('submit', function(event) {
    const emailInput = document.getElementById('emailInput');
    const email = emailInput.value;
    // Patrón para validar el formato u#########@upc.edu.pe (9 dígitos)
    const emailPattern = /^[uU]\d{9}@upc\.edu\.pe$/;

    if (!emailPattern.test(email)) {
        alert('Por favor, ingresa un correo institucional válido');
        emailInput.focus();
        event.preventDefault(); // Evita que el formulario se envíe si la validación falla
    }
});

document.querySelectorAll('.navbar a').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
        e.preventDefault(); // Evitar el comportamiento predeterminado del enlace
        const seccionDestino = document.querySelector(this.getAttribute('href'));
        seccionDestino.scrollIntoView({
            behavior: 'smooth'
        });
    });
});


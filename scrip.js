// Smooth scrolling para enlaces internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Validación del formulario de contacto
document.getElementById('contactForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validar campos
    const nombre = this.querySelector('input[type="text"]').value.trim();
    const email = this.querySelector('input[type="email"]').value.trim();
    const telefono = this.querySelector('input[type="tel"]').value.trim();
    const mensaje = this.querySelector('textarea').value.trim();
    
    // Validaciones
    if (!nombre || !email || !telefono || !mensaje) {
        alert('Por favor completa todos los campos del formulario.');
    } else if (!validateEmail(email)) {
        alert('Por favor ingresa un email válido.');
    } else if (!validatePhone(telefono)) {
        alert('Por favor ingresa un número de teléfono válido.');
    } else {
        alert('¡Gracias por tu mensaje! Nos pondremos en contacto contigo pronto.');
        this.reset();
    }
});

// Función para validar email
function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(String(email).toLowerCase());
}

// Función para validar teléfono
function validatePhone(phone) {
    const re = /^[0-9]{9}$/; // Asegura que el teléfono tenga 9 dígitos
    return re.test(String(phone));
}

// Mostrar año actual en el footer
document.addEventListener('DOMContentLoaded', function() {
    const yearSpan = document.getElementById('currentYear');
    if(yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});

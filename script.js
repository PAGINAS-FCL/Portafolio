// Puedes agregar aquí cualquier animación adicional o funcionalidad personalizada.
console.log("Archivo de JavaScript cargado correctamente.");

// JavaScript para animaciones al hacer scroll
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => {
        observer.observe(section);
    });
});

// Añadir la clase visible con una animación
document.addEventListener('DOMContentLoaded', () => {
    const style = document.createElement('style');
    style.innerHTML = `
        section.visible {
            opacity: 1;
            transform: translateY(0);
            transition: opacity 1s, transform 1s;
        }
    `;
    document.head.appendChild(style2);
});

document.addEventListener("DOMContentLoaded", () => {
    const contenedores = document.querySelectorAll('.transition');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const elemento = entry.target;

                // Reinicia la animación
                elemento.style.animation = 'none'; // Elimina la animación actual
                void elemento.offsetWidth;        // Fuerza un reflow
                elemento.style.animation = '';    // Reactiva la animación definida en CSS

                observer.unobserve(elemento); // Si quieres que se ejecute solo una vez, desactiva el observador
            }
        });
    }, {
        threshold: 0.1 // Detecta cuando el 10% del elemento esté visible
    });

    contenedores.forEach(contenedor => observer.observe(contenedor));
});

/* carousel 0 */


const slides = document.querySelector('.slides');
const slide = document.querySelectorAll('.slide');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const indicators = document.querySelectorAll('.indicator');

let currentIndex = 0;

// Función para actualizar el slider
function updateCarousel(index) {
    slides.style.transform = `translateX(-${index * 100}%)`;
    indicators.forEach((indicator, i) => {
        indicator.classList.toggle('active', i === index);
    });
}

// Eventos de los botones
prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slide.length - 1;
    updateCarousel(currentIndex);
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex < slide.length - 1) ? currentIndex + 1 : 0;
    updateCarousel(currentIndex);
});

// Eventos de los indicadores
indicators.forEach((indicator, index) => {
    indicator.addEventListener('click', () => {
        currentIndex = index;
        updateCarousel(currentIndex);
    });
});

/* carousel 1 */

const slides1 = document.querySelector('.slides1');
const slide1 = document.querySelectorAll('.slide1');
const prevButton1 = document.querySelector('.prev1');
const nextButton1 = document.querySelector('.next1');
const indicators1 = document.querySelectorAll('.indicator1');

let currentIndex1 = 0;

// Función para actualizar el slider
function updateCarousel1(index) {
    slides1.style.transform = `translateX(-${index * 100}%)`;
    indicators1.forEach((indicator1, i) => {
        indicator1.classList.toggle('active', i === index);
    });
}

// Eventos de los botones
prevButton1.addEventListener('click', () => {
    currentIndex1 = (currentIndex1 > 0) ? currentIndex1 - 1 : slide1.length - 1;
    updateCarousel1(currentIndex1);
});

nextButton1.addEventListener('click', () => {
    currentIndex1 = (currentIndex1 < slide1.length - 1) ? currentIndex1 + 1 : 0;
    updateCarousel1(currentIndex1);
});

// Eventos de los indicadores
indicators1.forEach((indicator1, index) => {
    indicator1.addEventListener('click', () => {
        currentIndex1 = index;
        updateCarousel1(currentIndex1);
    });
});
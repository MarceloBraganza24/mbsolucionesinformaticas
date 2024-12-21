const header = document.getElementById('header');
const headerMobile = document.getElementById('headerMobile');

const btnHomeHeader = document.getElementById('btnHomeHeader');
const btnHomeHeaderMobile = document.getElementById('btnHomeHeaderMobile');

const btnServicesHeader = document.getElementById('btnServicesHeader');
const btnServicesHeaderMobile = document.getElementById('btnServicesHeaderMobile');
const servicesSection = document.getElementById('servicesSection');

const btnContactHeader = document.getElementById('btnContactHeader');
const btnContactHeaderMobile = document.getElementById('btnContactHeaderMobile');
const contactSection = document.getElementById('contactSection');

btnHomeHeader.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Desplazamiento suave
    });
});
  btnHomeHeaderMobile.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Desplazamiento suave
    });
    document.getElementById('menuOptionsContainer').style.display = 'none';
});

btnServicesHeader.addEventListener('click', () => {
    servicesSection.scrollIntoView({
      behavior: 'smooth', 
      block: 'start' 
    });
  });
btnServicesHeaderMobile.addEventListener('click', () => {
    servicesSection.scrollIntoView({
      behavior: 'smooth', 
      block: 'start' 
    });
    document.getElementById('menuOptionsContainer').style.display = 'none';
});

btnContactHeader.addEventListener('click', () => {
    contactSection.scrollIntoView({
      behavior: 'smooth', 
      block: 'start' 
    });
  });
btnContactHeaderMobile.addEventListener('click', () => {
    contactSection.scrollIntoView({
      behavior: 'smooth', 
      block: 'start' 
    });
    document.getElementById('menuOptionsContainer').style.display = 'none';
});

let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {

      header.style.top = '-18vh';
      header.style.backgroundColor = "rgba(0, 0, 0, 0.85)";
      headerMobile.style.top = '-12vh';
      headerMobile.style.backgroundColor = "rgba(0, 0, 0, 0.85)";
      document.getElementById('menuOptionsContainer').style.display = 'none';

    } else {

      header.style.top = '0';
      headerMobile.style.top = '0';

    }

    if (window.scrollY === 0) {

      header.style.backgroundColor = "transparent";
      headerMobile.style.backgroundColor = "transparent";

    }
  
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
});

document.getElementById('hmenu').addEventListener('click', function () {
    if(document.getElementById('menuOptionsContainer').style.display == 'none') {
      document.getElementById('menuOptionsContainer').style.display = 'block';
    } else {
      document.getElementById('menuOptionsContainer').style.display = 'none';
    }
});

// Selecciona los elementos que quieres animar
const elementsToAnimate = document.querySelectorAll('.animate-on-scroll');

// Configura el observador
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Reinicia la animación eliminando y volviendo a agregar la clase
      const animationType = entry.target.dataset.animation;
      entry.target.classList.remove(animationType); // Elimina la clase
      void entry.target.offsetWidth; // Fuerza un reflow para reiniciar la animación
      entry.target.classList.add(animationType); // Vuelve a agregar la clase
    }
  });
}, {
  threshold: 0.1, // 10% del elemento visible para activar la animación
});

// Asocia el observador a cada elemento
elementsToAnimate.forEach(element => observer.observe(element));
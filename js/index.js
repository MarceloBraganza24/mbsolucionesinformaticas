emailjs.init('EayN_WhMM0ojL_olQ'); // Reemplaza con tu User ID de EmailJS

const inputPhoneContactForm = document.getElementById('inputPhoneContactForm');
inputPhoneContactForm.addEventListener('input', (event) => {
  const value = event.target.value;
  event.target.value = value.replace(/[^0-9]/g, '');
});
const inputFirstNameContactForm = document.getElementById('inputFirstNameContactForm');
    inputFirstNameContactForm.addEventListener('input', (event) => {
    const regex = /^[a-zA-Z]*$/;
    const value = event.target.value;
    if (!regex.test(value)) {
      event.target.value = value.replace(/[^a-zA-Z]/g, '');
    }
});
const inputLastNameContactForm = document.getElementById('inputLastNameContactForm');
inputLastNameContactForm.addEventListener('input', (event) => {
    const regex = /^[a-zA-Z]*$/;
    const value = event.target.value;
    if (!regex.test(value)) {
        event.target.value = value.replace(/[^a-zA-Z]/g, '');
    }
});
const inputEmailContactForm = document.getElementById('inputEmailContactForm');
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

document.getElementById("btnSubmitContactForm").addEventListener("click", () => {

    const inputFirstNameContactForm = document.getElementById('inputFirstNameContactForm').value;
    const inputLastNameContactForm = document.getElementById('inputLastNameContactForm').value;
    const inputEmailContactForm = document.getElementById('inputEmailContactForm').value;
    const inputPhoneContactForm = document.getElementById('inputPhoneContactForm').value;
    const inputTextAreaContactForm = document.getElementById('inputTextAreaContactForm').value;

    if(inputFirstNameContactForm == '' || inputLastNameContactForm == '' || inputEmailContactForm == '' || inputPhoneContactForm == '' || inputTextAreaContactForm == '') {
        alert('¡Debes completar todos los campos!');
    } else if (inputEmailContactForm && !emailRegex.test(inputEmailContactForm)) {
          alert('El formato del correo no es válido, ingrese otro');
    } else {
        emailjs.send('service_yx7qyog', 'template_43m480h', {
            first_name: inputFirstNameContactForm,
            last_name: inputLastNameContactForm,
            email: inputEmailContactForm,
            phone: inputPhoneContactForm,
            message: inputTextAreaContactForm
        })
        .then(function(response) {
            console.log('Mensaje enviado:', response);
            document.getElementById('inputFirstNameContactForm').value = '';
            document.getElementById('inputLastNameContactForm').value = '';
            document.getElementById('inputEmailContactForm').value = '';
            document.getElementById('inputPhoneContactForm').value = '';
            document.getElementById('inputTextAreaContactForm').value = '';
            alert('¡Tu mensaje ha sido enviado correctamente!');
        }, function(error) {
            console.log('Error al enviar el mensaje:', error);
            alert('Hubo un problema al enviar tu mensaje. Intenta nuevamente.');
        });
    }

});

const header = document.getElementById('header');
const headerMobile = document.getElementById('headerMobile');

const btnHomeHeader = document.getElementById('btnHomeHeader');
const btnHomeHeaderMobile = document.getElementById('btnHomeHeaderMobile');
const btnHomeFooter = document.getElementById('btnHomeFooter');

const btnServicesHeader = document.getElementById('btnServicesHeader');
const btnServicesHeaderMobile = document.getElementById('btnServicesHeaderMobile');
const btnServicesFooter = document.getElementById('btnServicesFooter');
const servicesSection = document.getElementById('servicesSection');

const btnContactHeader = document.getElementById('btnContactHeader');
const btnContactHeaderMobile = document.getElementById('btnContactHeaderMobile');
const btnContactFooter = document.getElementById('btnContactFooter');
const contactSection = document.getElementById('contactSection');

btnHomeHeader.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth' // Desplazamiento suave
    });
});
btnHomeFooter.addEventListener('click', () => {
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
    //document.getElementById('menuOptionsContainer').style.display = 'none';
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
});
btnServicesFooter.addEventListener('click', () => {
    servicesSection.scrollIntoView({
      behavior: 'smooth', 
      block: 'start' 
    });
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
});
btnContactFooter.addEventListener('click', () => {
    contactSection.scrollIntoView({
      behavior: 'smooth', 
      block: 'start' 
    });
});
let lastScrollTop = 0;
window.addEventListener('scroll', () => {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {

      header.style.top = '-18vh';
      header.style.backgroundColor = "rgba(0, 0, 0, 0.85)";
      headerMobile.style.top = '-12vh';
      headerMobile.style.backgroundColor = "rgba(0, 0, 0, 0.85)";
      
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

document.getElementById('logoWhatsapp').addEventListener('click', function () {
  window.open("https://wa.me/5492926459172", "_blank");
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

document.addEventListener('DOMContentLoaded', () => {
    const hmenu = document.getElementById('hmenu');
    const menuOptionsContainer = document.getElementById('menuOptionsContainer');
  
    // Variable para rastrear si el div está activo
    let isActive = false;
  
    // Evento para mostrar/ocultar el div al presionar el botón
    hmenu.addEventListener('click', () => {
      isActive = !isActive;
      if (isActive) {
        menuOptionsContainer.classList.add('active');
      } else {
        menuOptionsContainer.classList.remove('active');
      }
    });
  
    // Evento para ocultar el div al hacer scroll
    window.addEventListener('scroll', () => {
      if (isActive) {
        menuOptionsContainer.classList.remove('active');
        isActive = false; // Actualiza el estado
      }
    });
  });
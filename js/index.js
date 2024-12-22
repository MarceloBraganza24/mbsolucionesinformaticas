// Inicializar EmailJS con tu User ID
emailjs.init('EayN_WhMM0ojL_olQ'); // Reemplaza con tu User ID de EmailJS
//emailjs.init('3EsGxzFJtiB3fdytUPGTk'); // Reemplaza con tu User ID de EmailJS
const inputFirstNameContactForm = document.getElementById('inputFirstNameContactForm').value;
const inputLastNameContactForm = document.getElementById('inputLastNameContactForm').value;
const inputEmailContactForm = document.getElementById('inputEmailContactForm').value;
const inputPhoneContactForm = document.getElementById('inputPhoneContactForm').value;
const inputTextAreaContactForm = document.getElementById('inputTextAreaContactForm').value;
//console.log(`${inputFirstNameContactForm}`)


document.getElementById("btnSubmitContactForm").addEventListener("click", () => {
  const inputFirstNameContactForm = document.getElementById('inputFirstNameContactForm').value;
  const inputLastNameContactForm = document.getElementById('inputLastNameContactForm').value;
  const inputEmailContactForm = document.getElementById('inputEmailContactForm').value;
  const inputPhoneContactForm = document.getElementById('inputPhoneContactForm').value;
  const inputTextAreaContactForm = document.getElementById('inputTextAreaContactForm').value;

  // console.log("Valores del formulario:");
  // console.log("Nombre:", inputFirstNameContactForm);
  // console.log("Apellido:", inputLastNameContactForm);
  // console.log("Email:", inputEmailContactForm);
  // console.log("Teléfono:", inputPhoneContactForm);
  // console.log("Mensaje:", inputTextAreaContactForm);
  if(inputFirstNameContactForm == '' || inputLastNameContactForm == '' || inputEmailContactForm == '' || inputPhoneContactForm == '' || inputTextAreaContactForm == '') {
    alert('¡Debes completar todos los campos!');
  } else {
    emailjs.send('service_yx7qyog', 'template_43m480h', {
      nombre: inputFirstNameContactForm,
      apellido: inputLastNameContactForm,
      email: inputEmailContactForm,
      telefono: inputPhoneContactForm,
      mensaje: inputTextAreaContactForm
    })
    .then(function(response) {
      console.log('Mensaje enviado:', response);
      alert('¡Tu mensaje ha sido enviado correctamente!');
    }, function(error) {
      console.log('Error al enviar el mensaje:', error);
      alert('Hubo un problema al enviar tu mensaje. Intenta nuevamente.');
    });
  }


});

// Obtener el formulario y agregar el evento de envío
// document.getElementById('contact-form').addEventListener('submit', function (event) {
//   event.preventDefault(); // Evitar el comportamiento predeterminado de recargar la página

//   // Obtener los valores del formulario
//   const nombre = document.getElementById('nombre').value;
//   const apellido = document.getElementById('apellido').value;
//   const email = document.getElementById('email').value;
//   const telefono = document.getElementById('telefono').value;
//   const mensaje = document.getElementById('mensaje').value;

//   // Usar EmailJS para enviar el correo
//   emailjs.send('tu_service_id', 'tu_template_id', {
//     nombre: nombre,
//     apellido: apellido,
//     email: email,
//     telefono: telefono,
//     mensaje: mensaje
//   })
//   .then(function(response) {
//     console.log('Mensaje enviado:', response);
//     alert('¡Tu mensaje ha sido enviado correctamente!');
//   }, function(error) {
//     console.log('Error al enviar el mensaje:', error);
//     alert('Hubo un problema al enviar tu mensaje. Intenta nuevamente.');
//   });
// });


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
    document.getElementById('menuOptionsContainer').style.display = 'none';
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

document.getElementById('logoWhatsapp').addEventListener('click', function () {
  window.open("https://wa.me/5492926459172", "_blank");
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
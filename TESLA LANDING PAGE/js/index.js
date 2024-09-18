// Función para actualizar la visibilidad de las imágenes según el tamaño de la ventana
function updateImage() {
    const imgSmalls = document.querySelectorAll('#img-small');
    const imgLarges = document.querySelectorAll('#img-large');
    const width = window.innerWidth;

    imgSmalls.forEach(imgSmall => {
        imgSmall.style.display = (width > 654) ? 'block' : 'none';
    });

    imgLarges.forEach(imgLarge => {
        imgLarge.style.display = (width <= 654) ? 'flex' : 'none';
    });
}

// Inicializar la función al cargar la página
updateImage();

// Opción para actualizar las imágenes cuando la ventana cambia de tamaño
window.addEventListener('resize', updateImage);


// Función para manejar la visibilidad de las barras de navegación según el tamaño de la ventana
function handleResize() {
    const desktopNavbar = document.getElementById('desktop-navbar');
    const mobileNavbar = document.getElementById('mobile-navbar');
    
    if (window.innerWidth <= 1280) {
        desktopNavbar.style.display = 'none';
        mobileNavbar.style.display = 'flex';
    } else {
        desktopNavbar.style.display = 'flex';
        mobileNavbar.style.display = 'none';
    }
}

// Inicializar el estado correcto al cargar la página
handleResize();

// Agregar un listener para manejar el cambio de tamaño de la ventana
window.addEventListener('resize', handleResize);






document.addEventListener('DOMContentLoaded', function() {
    // Obtener elementos
    const closeButton = document.querySelector('#mobile-navbar-popup-close .X');
    const menuButton = document.querySelector('#mobile-navbar-menu p');
    const popup = document.querySelector('#mobile-navbar-popup');

    // Función para cerrar el popup
    function closePopup() {
        popup.style.display = 'none';
    }

    // Función para abrir el popup
    function openPopup() {
        popup.style.display = 'block';
    }

    // Asignar eventos
    closeButton.addEventListener('click', closePopup);
    menuButton.addEventListener('click', openPopup);
});















/*Funcionamiento de los popup para escritorio del menu de la navbar*/
document.addEventListener('DOMContentLoaded', function() {
    // Obtener elementos
    const closeButton = document.querySelector('#mobile-navbar-popup-close .X');
    const menuButton = document.querySelector('#mobile-navbar-menu p');
    const popup = document.querySelector('#mobile-navbar-popup');
    const navbar = document.getElementById('desktop-navbar'); // Obtener el navbar

    // Función para cerrar el popup
    function closePopup() {
        popup.style.display = 'none';
        navbar.classList.remove('popup-visible'); // Quitar clase para cambiar el color de fondo del navbar
    }

    // Función para abrir el popup
    function openPopup() {
        popup.style.display = 'flex';
        navbar.classList.add('popup-visible'); // Agregar clase para cambiar el color de fondo del navbar
    }

    // Asignar eventos
    closeButton.addEventListener('click', closePopup);
    menuButton.addEventListener('click', openPopup);
});

document.addEventListener('DOMContentLoaded', function() {
    // Lista de pares de ID para los elementos de la lista y sus respectivos popups
    const menuItems = [
        { trigger: 'desktop-navbar-menu-vehiculos', popup: 'desktop-navbar-menu-vehiculos-popup' },
        { trigger: 'desktop-navbar-menu-energia', popup: 'desktop-navbar-menu-energia-popup' },
        { trigger: 'desktop-navbar-menu-carga', popup: 'desktop-navbar-menu-carga-popup' },
        { trigger: 'desktop-navbar-menu-descubrir', popup: 'desktop-navbar-menu-descubrir-popup' },
        { trigger: 'desktop-navbar-menu-tienda', popup: 'desktop-navbar-menu-tienda-popup' }
    ];

    menuItems.forEach(item => {
        const triggerElement = document.getElementById(item.trigger);
        const popupElement = document.getElementById(item.popup);

        // Configuración del trigger y el popup
        triggerElement.style.position = 'relative';
        triggerElement.style.zIndex = '1000'; // Asegura que el trigger esté encima de otros elementos pero debajo del navbar

        popupElement.style.position = 'fixed';
        popupElement.style.zIndex = '100'; // Asegura que el popup esté debajo del navbar
        popupElement.style.display = 'none'; // Inicialmente oculto
        popupElement.style.width = '100%'; // Ocupa el ancho completo del viewport
        popupElement.style.height = 'auto'; // Ajusta la altura automáticamente en función del contenido
        popupElement.style.top = '0'; // Comienza desde la parte superior de la pantalla
        popupElement.style.left = '0';
        popupElement.style.backgroundColor = 'white';
        popupElement.style.color = 'black'; // Asegura que el texto sea visible
        popupElement.style.display = 'flex';
        popupElement.style.justifyContent = 'center';
        popupElement.style.alignItems = 'center';
        popupElement.style.transition = 'transform 0.3s ease-out, opacity 0.3s ease-out';
        popupElement.style.transform = 'translateY(-100%)'; // Comienza fuera de la vista, desde arriba
        popupElement.style.opacity = '0';

        let timeoutId; // Para manejar el tiempo de ocultación

        // Muestra el popup al hacer hover
        triggerElement.addEventListener('mouseenter', function() {
            clearTimeout(timeoutId); // Limpia el timeout si se mueve el ratón sobre el trigger
            popupElement.style.display = 'flex';
            setTimeout(() => {
                popupElement.style.transform = 'translateY(0)';
                popupElement.style.opacity = '1';
            }, 100);
        });

        // Oculta el popup si se sale del trigger o del popup
        function hidePopup() {
            popupElement.style.transform = 'translateY(-100%)';
            popupElement.style.opacity = '0';
            timeoutId = setTimeout(() => {
                popupElement.style.display = 'none';
            }, 300);
        }

        triggerElement.addEventListener('mouseleave', hidePopup);
        popupElement.addEventListener('mouseleave', hidePopup);

        // También muestra el popup cuando se entra en el popup desde el trigger
        popupElement.addEventListener('mouseenter', function() {
            clearTimeout(timeoutId); // Limpia el timeout si se mueve el ratón sobre el popup
            popupElement.style.transform = 'translateY(0)';
            popupElement.style.opacity = '1';
        });
    });
});


























// Variables para controlar la visibilidad del navbar
let lastScrollTop = 0;
const navbar = document.getElementById('desktop-navbar');
const scrollThreshold = 50; // Ajusta este valor según la sensibilidad deseada

// Función para manejar el scroll
function handleScroll() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop <= 10) {
        // Estamos en la parte superior de la pantalla
        navbar.style.backgroundColor = 'transparent'; // Fondo transparente
    } else {
        // No estamos en la parte superior de la pantalla
        navbar.style.backgroundColor = ''; // Restaura el color de fondo original
    }

    if (scrollTop > lastScrollTop && scrollTop > scrollThreshold) {
        // Scroll hacia abajo
        navbar.style.transition = 'opacity 0.8s'; // Animación suave
        navbar.style.opacity = '0'; // Ocultar el navbar
    } else {
        // Scroll hacia arriba
        navbar.style.transition = 'opacity 0.8s'; // Animación suave
        navbar.style.opacity = '1'; // Mostrar el navbar
    }
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Para evitar valores negativos
}

// Escucha el evento de scroll
window.addEventListener('scroll', handleScroll);
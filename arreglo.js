window.addEventListener('load', function() {
    console.log('La página se ha cargado completamente');
    alert('¡La página se ha cargado completamente!');

    // Animación adicional para el footer
    const footer = document.querySelector('.footer');
    footer.classList.add('animate__animated', 'animate__fadeInUp');

    // Efecto de hover en los elementos de la lista
    const listItems = document.querySelectorAll('ul li');
    listItems.forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.transform = 'scale(1.05)';
        });
        item.addEventListener('mouseout', () => {
            item.style.transform = 'scale(1)';
        });
    });

    // Cambiar el color del fondo del header al hacer scroll
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (window.scrollY > 50) {
            header.style.backgroundColor = '#a1a33b';
        } else {
            header.style.backgroundColor = '#c8ca4a';
        }
    });
});
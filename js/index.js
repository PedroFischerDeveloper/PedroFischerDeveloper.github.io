function onready() {
    Swal.fire(
        'Olá tudo bem? gostaria de agradecer a visita antes de tudo!',
        'Antes de tudo gostaria de informar que o portfólio está construção, então agradeço a compreensão',
        'info'
    )
}
function openMenu() {
    var menuElement = document.querySelector('.header > nav > .menu');

    if(menuElement.className === 'menu') {
        menuElement.classList.add('menu-mobile');
    } else {
        menuElement.classList.remove('menu-mobile');
    }
}
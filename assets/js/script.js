const cursor = document.querySelector('.cursor');
const container = document.querySelector('.header-container');

const addEventListeners = () => {
    document.addEventListener('mousemove', onMouseMove);
};

const onMouseMove = (e) => {
    cursor.style.setProperty('--mouse-x', e.clientX + 'px');
    cursor.style.setProperty('--mouse-y', e.clientY + 'px');
};

addEventListeners();

container.addEventListener('mouseleave', () => {
    cursor.style.opacity = 0;
});

container.addEventListener('mouseenter', () => {
    cursor.style.opacity = 1;
});

//Agregar efecto al cursor al hacer hover en las letras
const letters = document.querySelectorAll('.letters span');

letters.forEach( e => {
    e.addEventListener('mouseover', ()=> {
        cursor.style.background = '#000';
        cursor.style.width = '100px';
        cursor.style.height = '100px';
        cursor.style.boxShadow = '0 0 0 100vh #fff';
    });

    e.addEventListener('mouseout', ()=> {
        cursor.style.background = 'none';
        cursor.style.width = '80px';
        cursor.style.height = '80px';
        cursor.style.boxShadow = 'none';
    });
});

//Ocultar cursor personalizado
const nav = document.querySelector('.nav-container');

nav.addEventListener('mouseenter', ()=> {
    cursor.style.opacity = 0;
});

nav.addEventListener('mouseleave', ()=> {
    cursor.style.opacity = 1;
});

//Ocultar cursor personalizado
const language = document.querySelector('.logo-container__language');

language.addEventListener('mouseenter', ()=> {
    cursor.style.opacity = 0;
});

language.addEventListener('mouseleave', ()=> {
    cursor.style.opacity = 1;
});

//Mostrar lista lenguaje
const languageIcon = document.querySelector('.logo-container i');
const languageList = document.querySelector('.logo-container__language ul');

languageIcon.addEventListener('click', ()=> {
    languageList.classList.toggle('click-ul');
});
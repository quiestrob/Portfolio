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

//Animacion scroll
const aboutContent = document.querySelector('.about-content');
const projectsTitle = document.querySelector('.projects-title h2');
const cardProject = document.querySelectorAll('.card-project');
const contactTitle = document.querySelector('.contact-title h2');
const contactContent = document.querySelector('.contact-content');
const imgProfile = document.querySelector('.container-image img');

window.addEventListener('scroll', ()=> {
    const scroll = window.scrollY;
    console.log(scroll);
    
    //Scroll contenido sobre mi
    if (scroll >= 500) {
        aboutContent.style.opacity = 1;
        aboutContent.style.top = 0;

        imgProfile.style.transform = 'scale(1)';
        imgProfile.style.top = '-60px';
        imgProfile.style.opacity = 1;
    } else {
        aboutContent.style.opacity = 0;
        aboutContent.style.top = '200px';

        imgProfile.style.transform = 'scale(0)';
        imgProfile.style.top = 0;
        imgProfile.style.opacity = 0;
    }

    //Scroll titulo proyectos
    if (scroll >= 1200) {
        projectsTitle.style.top = 0;
        projectsTitle.style.opacity = 1;
    } else {
        projectsTitle.style.top = '100px';
        projectsTitle.style.opacity = 0;
    }

    //Scroll contenido proyectos
    if (scroll >= 1400) {
        cardProject.forEach(e => {
            e.style.top = 0;
            e.style.opacity = 1;
        })
    } else {
        cardProject.forEach(e => {
            e.style.top = '150px';
            e.style.opacity = 0;
        })
    }

    //Scroll contenido contacto
    if (scroll >= 2000) {
        contactTitle.style.top = 0;
        contactTitle.style.opacity = 1;

        contactContent.style.top = 0;
        contactContent.style.opacity = 1;
    } else {
        contactTitle.style.top = '150px';
        contactTitle.style.opacity = 0;

        contactContent.style.top = '150px';
        contactContent.style.opacity = 0;
    }
});
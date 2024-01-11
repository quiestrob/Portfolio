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

//Agregar efecto al cursor al hacer hover en las letras
const letters = document.querySelector('.title-container h1');
const span = document.querySelector('.title-container h2');

letters.addEventListener('mouseover', ()=> {
    cursor.style.background = '#000';
    cursor.style.width = '250px';
    cursor.style.height = '250px';
    cursor.style.boxShadow = '0 0 0 200vh #fff';
    span.style.opacity = 0;
});

letters.addEventListener('mouseout', ()=> {
    cursor.style.background = 'none';
    cursor.style.width = '80px';
    cursor.style.height = '80px';
    cursor.style.boxShadow = 'none';
    span.style.opacity = 1;
});

//Mostrar lista lenguaje
const languageIcon = document.querySelector('.logo-container i');
const languageList = document.querySelector('.logo-container__language ul');

languageIcon.addEventListener('click', ()=> {
    languageList.classList.toggle('click-ul');
});

const imageProject = document.querySelectorAll('.image-project');
const language = document.querySelector('.logo-container__language');
const nav = document.querySelector('.nav-container ul');

imageProject.forEach(e => {
    e.addEventListener('mouseover', ()=> {
        cursor.style.opacity = 0;
    });
    
    e.addEventListener('mouseout', ()=> {
        cursor.style.opacity = 1;
    });
})

language.addEventListener('mouseover', ()=> {
    cursor.style.opacity = 0;
});
    
language.addEventListener('mouseout', ()=> {
    cursor.style.opacity = 1;
});

nav.addEventListener('mouseover', ()=> {
    cursor.style.opacity = 0;
});
    
nav.addEventListener('mouseout', ()=> {
    cursor.style.opacity = 1;
});
const UI_ELEMENTS = {
    MENU_BTN: document.querySelector('.menu__btn'),
    MENU_LIST: document.querySelector('.menu__list')
};

UI_ELEMENTS.MENU_BTN.addEventListener('click', () => {
    UI_ELEMENTS.MENU_LIST.classList.toggle('menu__list--active')
});

// Not my code
let mixer = mixitup('.gallery__content');
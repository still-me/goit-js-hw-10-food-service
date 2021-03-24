import './styles.css';
import cardsMaker from './templates/card.hbs';
import menu from './menu.json' 


const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const bodyRef = document.querySelector('body')
const switcher = document.querySelector('.theme-switch');
const checkbox = switcher.querySelector('#theme-switch-toggle')
const STORAGE_KEY = 'checked';
const menuRef = document.querySelector('.js-menu');
const cardsMarkup = createMenuCardsMarkup(menu);

 menuRef.insertAdjacentHTML('beforeend', cardsMarkup)

switcher.addEventListener('change', onCheckboxCheck);

loadPreviousTheme()

function onCheckboxCheck() {

    const check = checkbox.checked
    localStorage.setItem(STORAGE_KEY, check)

    checkbox.checked
        ?
        changeClass(Theme.DARK, Theme.LIGHT)
        :
        changeClass(Theme.LIGHT, Theme.DARK);
}

function changeClass(add, remove) {
     bodyRef.classList.add(add);
     bodyRef.classList.remove(remove);
}

function loadPreviousTheme() {
    const checkBoxStatusFromLocalStorage = localStorage.getItem(STORAGE_KEY);
    if (checkBoxStatusFromLocalStorage) {
        const parseCheckBoxStatusFromLocalStorage = JSON.parse(checkBoxStatusFromLocalStorage)
        checkbox.checked = parseCheckBoxStatusFromLocalStorage
        onCheckboxCheck();
    }

}

function createMenuCardsMarkup(menu) {
    return menu
        .map(cardsMaker)
        // или map (card => cardsMaker(card))
        .join('');
}






// const string = JSON.stringify(Theme);
// const object = JSON.parse(string);

// localStorage.setItem('my-data', string);
// const getData = localStorage.getItem('my-data');
// const parseData = JSON.parse(getData);

// sessionStorage.setItem('session-key', 'Hello');





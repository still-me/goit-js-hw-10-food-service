import { Theme } from './theme'

const bodyRef = document.querySelector('body')
const switcher = document.querySelector('.theme-switch');
const checkbox = switcher.querySelector('#theme-switch-toggle')
const STORAGE_KEY = 'theme';


switcher.addEventListener('change', onCheckboxCheck);

 function onCheckboxCheck() {

    if (checkbox.checked) {
        changeClass(Theme.DARK, Theme.LIGHT)
        localStorage.setItem(STORAGE_KEY, Theme.DARK )
    } else {
        changeClass(Theme.LIGHT, Theme.DARK);
        localStorage.setItem(STORAGE_KEY, Theme.LIGHT);
    }
   
}

function changeClass(add, remove) {
     bodyRef.classList.add(add);
     bodyRef.classList.remove(remove);
}

export {checkbox, STORAGE_KEY, onCheckboxCheck  }
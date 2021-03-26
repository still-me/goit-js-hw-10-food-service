import { STORAGE_KEY, checkbox, onCheckboxCheck } from './checkbox'
import { Theme } from './theme'
import clientStorage from './services/clientStorage';


loadPreviousTheme()

function loadPreviousTheme() {
    const themeFromLocalStorage = clientStorage.getItem(STORAGE_KEY);
    if (themeFromLocalStorage === Theme.DARK) {
        checkbox.checked = true;
        onCheckboxCheck();
    } else {
        onCheckboxCheck();
    }

}


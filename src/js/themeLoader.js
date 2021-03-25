import { STORAGE_KEY, checkbox, onCheckboxCheck } from './checkbox'
import { Theme } from './theme'

loadPreviousTheme()

function loadPreviousTheme() {
    const checkBoxStatusFromLocalStorage = localStorage.getItem(STORAGE_KEY);
    if (checkBoxStatusFromLocalStorage === Theme.DARK) {
       
        checkbox.checked = true;
        onCheckboxCheck();
    }

}


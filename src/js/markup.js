import cardsMaker from '../templates/card.hbs';
import menu from '../menu.json'

const menuRef = document.querySelector('.js-menu');
const cardsMarkup = createMenuCardsMarkup(menu);
menuRef.insertAdjacentHTML('beforeend', cardsMarkup)

function createMenuCardsMarkup(menu) {
    return menu
        .map(cardsMaker)
        // или map (card => cardsMaker(card))
        .join('');
}




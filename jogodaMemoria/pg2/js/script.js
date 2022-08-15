const grid = document.querySelector('.grid')
 const cards = [
    'img01',
    'img02',
    'm01',
    'm02',
    'm03',
    'm4',
 ];
const creatElement =(tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element
}

const createCard =()=>{
    const card = creatElement('div','card');
    const front = creatElement('div','face front');
    const back= creatElement('div','face back');

    
    front.className ='face front';
    back.className = 'face back';

    card.appendChild(front);
    card.appendChild(back);
    
    return(card);
}
const loadGame = () =>{

    cards.forEach((cards) =>{

    const char = createCard();
    grid.appendChild(char);

    });

}

loadGame();
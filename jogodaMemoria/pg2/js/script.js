const grid = document.querySelector('.grid')
 const characters = [
    'imgJogo01',
    'imgJogo02',
    'imgJogo03',
    'imgJogo04',
    'imgJogo05',
    'imgJogo06',
    'imgJogo07',
    'imgJogo08',
    'imgJogo09',
    'imgJogo10',
    'imgJogo11',
    'imgJogo12',
    'imgJogo13',
    'imgJogo14',
    'imgJogo15',
    'imgJogo16',
 ];
const creatElement =(tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element
}

const createCard =(character)=>{
    const card = creatElement('div','card');
    const front = creatElement('div','face front');
    const back= creatElement('div','face back');

front.style.backgroundImage = `url('../imagem/${character}.jpg')`;
    
    front.className ='face front';
    back.className = 'face back';

    card.appendChild(front);
    card.appendChild(back);
    
    return(card);
}
const loadGame = () =>{
    const duplicadosChar =[...characters, ...characters];

    duplicadosChar.forEach((character) =>{

    const card = createCard(character);
    grid.appendChild(card);

    });

}

loadGame();
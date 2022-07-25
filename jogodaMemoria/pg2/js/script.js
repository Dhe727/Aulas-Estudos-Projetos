const grid = document.querySelector('.grid')

const creatElement =(tag, className) => {
    const element = document.createElement(tag);
    element.className = className;
    return element
}

const createCard =()=>{
    const card = document.createElement('div')
    const front = document.createElement('div')
    const back= document.createElement('div')

    card.className = 'card';
    front.className ='face front';
    back.className = 'face back';

    card.appendChild(front);
    card.appendChild(back);
    
    grid.appendChild(card);
}
createCard();
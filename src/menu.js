import karaage from './karaage.jpg';

// menu.js - modu for creating the menu page content

function loadMenuPage() {
    const content = document.getElementById('content');
    
    // clear existing content
    content.innerHTML = '';
    
    const heading = document.createElement('h2');
    heading.textContent = "Karaage";
    
    const paragraph = document.createElement('p');
    paragraph.textContent = "Yuh";
    
    const image = document.createElement('img');
    image.src = karaage;
    image.alt = 'Karaage - Today\'s Special';
    
    content.appendChild(heading);
    content.appendChild(paragraph);
    content.appendChild(image);
}

export { loadMenuPage };
import karaage from './karaage.jpg';

// home.js - Module for creating the home page content

function loadAboutPage() {
    const content = document.getElementById('content');
    
    // clear existing content
    content.innerHTML = '';
    
    const heading = document.createElement('h2');
    heading.innerHTML = "<em>SOMETIMES</em> I'll make food";
    
    const paragraph = document.createElement('p');
    paragraph.textContent = "Yup";
    
    const image = document.createElement('img');
    image.src = karaage;
    image.alt = 'Karaage - Today\'s Special';
    
    content.appendChild(heading);
    content.appendChild(paragraph);
    content.appendChild(image);
}

export { loadAboutPage };

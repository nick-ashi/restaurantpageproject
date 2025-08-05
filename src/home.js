import karaage from './karaage.jpg';

// home.js - Module for creating the home page content

function loadHomePage() {
    const content = document.getElementById('content');
    
    // clear existing content
    content.innerHTML = '';
    
    const heading = document.createElement('h2');
    heading.textContent = "Welcome to the Hell's Real Kitchen >:)";
    
    const paragraph = document.createElement('p');
    paragraph.textContent = "Today's special is karaage. Eat up bitches";
    paragraph.style.fontStyle = "italic";

    const image = document.createElement('img');
    image.src = karaage;
    image.alt = 'Karaage - Today\'s Special';
    
    content.appendChild(heading);
    content.appendChild(paragraph);
    content.appendChild(image);
}

// Export the function so it can be imported elsewhere
export { loadHomePage };

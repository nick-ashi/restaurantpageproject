import karaage from './karaage.jpg';
import { updates } from './updates.js';

// home.js - Module for creating the home page content

function loadHomePage() {
    const content = document.getElementById('content');
    
    // clear existing content
    content.innerHTML = '';
    
    const heading = document.createElement('h2');
    heading.textContent = "Welcome to the Hell's Real Kitchen >:)";
    
    // Create updates section
    const updatesSection = document.createElement('div');
    const updatesHeading = document.createElement('h3');
    updatesHeading.innerHTML = '<em>Updates:</em>';
    updatesSection.appendChild(updatesHeading);
    
    // Create updates list
    const updatesList = document.createElement('ul');
    updates.forEach(update => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${update.date}:</strong> ${update.text}`;
        updatesList.appendChild(listItem);
    });
    updatesSection.appendChild(updatesList);

    const image = document.createElement('img');
    image.src = karaage;
    image.alt = 'Karaage - Today\'s Special';
    
    content.appendChild(heading);
    content.appendChild(updatesSection);
    content.appendChild(image);
}

// Export the function so it can be imported elsewhere
export { loadHomePage };

function createMainContainer() {
    const mainContainer = document.createElement('div');
    mainContainer.id = "main-container";
    const leftPic = document.createElement('div');
    leftPic.id = 'leftPic2';
    const h3 = document.createElement('h3');
    h3.textContent = 'Contact us!';
    const text = document.createElement('div');
    text.id = 'text';
    text.textContent = `For inquiries, reservations, or questions, reach out to Highline Haven:
    
    Address: 123 Main Street, Manhattan, NY, 10001
    Phone: +1 (555) 123-4567
    Email: info@highlinehaven.com
    
    Operating Hours:
    Mon-Fri: 5 PM - 11 PM
    Sat-Sun: 12 PM - 11 PM
    
    To make a reservation, please contact us via phone or email. We recommend booking in advance for the best dining experience.
    
    We look forward to welcoming you to Highline Haven for an unforgettable dining experience. Contact us for any inquiries or reservations.
    `

    mainContainer.appendChild(leftPic);
    mainContainer.appendChild(h3);
    mainContainer.appendChild(text);

    return mainContainer;
};

export default createMainContainer;
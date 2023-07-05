function createMainContainer() {
    const mainContainer = document.createElement('div');
    mainContainer.id = "main-container";
    const leftPic = document.createElement('div');
    leftPic.id = 'leftPic';
    const h3 = document.createElement('h3');
    h3.textContent = 'Our restaurant...';
    const text = document.createElement('div');
    text.id = 'text';
    text.textContent = `Welcome to Highline Haven, a modern and luxurious dining experience nestled in the heart of Manhattan. Step into a world where exceptional cuisine meets elevated ambiance, and indulge in a culinary journey that will awaken your senses.

    At Highline Haven, we pride ourselves on curating a menu that celebrates the finest ingredients, expertly crafted by our talented chefs. Each dish is a masterpiece, meticulously designed to tantalize your taste buds and leave you craving more. From the melt-in-your-mouth Ahi Tuna Tartare to the perfectly seared Filet Mignon, our culinary creations are a symphony of flavors, artfully presented.
    
    Immerse yourself in our chic and inviting atmosphere, where contemporary design meets timeless elegance. Whether you're seeking an intimate dinner for two or planning a celebration with friends, Highline Haven is the epitome of sophistication.
    
    Join us for an unforgettable dining experience, where impeccable service and culinary excellence converge. Escape to Highline Haven and discover the true meaning of indulgence.
    
    ALL PICTURES TAKEN FROM unsplash.com .
    `

    mainContainer.appendChild(leftPic);
    mainContainer.appendChild(h3);
    mainContainer.appendChild(text);

    return mainContainer;
};

export default createMainContainer;
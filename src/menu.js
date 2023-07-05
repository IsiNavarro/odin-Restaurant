function createMainContainer() {
    const mainContainer = document.createElement('div');
    mainContainer.id = "main-container";
    const leftPic = document.createElement('div');
    leftPic.id = 'leftPic3';
    const h3 = document.createElement('h3');
    h3.textContent = 'Our Menu';
    const text = document.createElement('div');
    text.id = 'text';
    text.textContent = `Appetizer:

    1.Truffle Parmesan Fries: Hand-cut fries tossed in truffle oil, sprinkled with Parmesan cheese, and served with truffle aioli.
    Main Courses:
    2. Seared Scallops: Pan-seared scallops served on cauliflower puree, garnished with crispy prosciutto, and drizzled with balsamic reduction.
    
    3.Grilled Salmon: Grilled Atlantic salmon with lemon-dill sauce, served with roasted potatoes and sautéed asparagus.
    Pasta:
    4. Lobster Ravioli: Homemade ravioli stuffed with lobster, tossed in creamy tomato vodka sauce, and topped with fresh basil.
    `

    mainContainer.appendChild(leftPic);
    mainContainer.appendChild(h3);
    mainContainer.appendChild(text);

    return mainContainer;
};

export default createMainContainer;
function getInterface() {
    const page = document.createElement('div');
    document.querySelector('body').insertAdjacentElement('afterBegin', page);
    page.classList.add('wrapper');

    const chapterPageContainer = document.createElement('div');
    page.appendChild(chapterPageContainer);
    chapterPageContainer.classList.add('home-work-number');
    const homeWorkNumber = document.createElement('h1');
    chapterPageContainer.appendChild(homeWorkNumber);
    homeWorkNumber.textContent = `домашнее задание №3: калькулятор`;

    const container = document.createElement('section');
    page.appendChild(container);
    container.classList.add('container');

    const buttonsContainer = document.createElement('div');
    container.append(buttonsContainer);
    buttonsContainer.classList.add('buttons-container');
};

export { getInterface };
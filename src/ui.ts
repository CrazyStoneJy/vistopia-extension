import { log, search } from 'vistopia-api';

function createSearchContainer(): HTMLElement {
    const searchContainer = document.createElement('div');
    // searchContainer.innerHTML = "vistopia extension";

    // text input
    const textInput = document.createElement('input');
    // textInput.addEventListener('')

    const searchButton = document.createElement('button');
    searchButton.innerHTML = "search";
    searchButton.addEventListener('click', async (e) => {
        const searchWord = textInput.value;
        const res = await search(searchWord);
        // log(res);
    });

    searchContainer.appendChild(textInput);
    searchContainer.appendChild(searchButton);

    return searchContainer;
}

export {
    createSearchContainer
}
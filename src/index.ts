import { createSearchContainer } from "./ui";

(window.onload = () => {

    const root = document.getElementById('root');
    root?.appendChild(createSearchContainer());

})();
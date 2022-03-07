import { clearClassList } from "../utils/utils.js";
import Main from "../components/ComponentesPage1/Main.js";

const Page1 = () => {
    const main = document.body.querySelector('main');
    clearClassList(main);
    main.classList.add('page1');
    main.innerHTML = `
        ${Main()}
    `; 
}

export default Page1;
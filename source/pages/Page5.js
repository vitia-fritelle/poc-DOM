import { clearClassList } from "../utils/utils.js";
import Main from "../components/ComponentesPage5/Main.js";

const Page5 = () => {
    const main = document.body.querySelector('main');
    clearClassList(main);
    main.classList.add('page5');
    main.innerHTML = `
        ${Main()}
    `; 
}

export default Page5;
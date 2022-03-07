import { clearClassList } from "../utils/utils.js";
import Main from "../components/ComponentesPage6/Main.js";

const Page6 = () => {
    const main = document.body.querySelector('main');
    clearClassList(main);
    main.classList.add('page6');
    main.innerHTML = `
        ${Main()}
    `; 
}

export default Page6;
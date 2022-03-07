import { clearClassList } from "../utils/utils.js";
import Main from "../components/ComponentesPage2/Main.js";

const Page2 = () => {
    const main = document.body.querySelector('main');
    clearClassList(main);
    main.classList.add('page2');
    main.innerHTML = `
        ${Main()}
    `; 
}

export default Page2;
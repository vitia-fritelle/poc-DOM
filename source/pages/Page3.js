import { clearClassList } from "../utils/utils.js";
import Main from "../components/ComponentesPage3/Main.js";

const Page3 = () => {
    const main = document.body.querySelector('main');
    clearClassList(main);
    main.classList.add('page3');
    main.innerHTML = `
        ${Main()}
    `; 
}

export default Page3;
import { clearClassList } from "../utils/utils.js";
import Main from "../components/ComponentesPage7/Main.js";

const Page7 = () => {
    const main = document.body.querySelector('main');
    clearClassList(main);
    main.classList.add('page7');
    main.innerHTML = `
        ${Main()}
    `; 
}

export default Page7;
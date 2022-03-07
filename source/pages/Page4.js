import { clearClassList } from "../utils/utils.js";
import Main from "../components/ComponentesPage4/Main.js";

const Page4 = () => {
    const main = document.body.querySelector('main');
    clearClassList(main);
    main.classList.add('page4');
    main.innerHTML = `
        ${Main()}
    `; 
}

export default Page4;
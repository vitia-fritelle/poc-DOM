import { clearClassList } from "../utils/utils.js";

const Page1 = () => {
    const main = document.body.querySelector('main');
    clearClassList(main);
    main.classList.add('page1');
    main.innerHTML = `
    `; 
}

export default Page1;
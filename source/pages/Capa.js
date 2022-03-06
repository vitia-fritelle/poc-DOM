import { clearClassList } from "../utils/utils.js";

const Capa = () => {
    const main = document.body.querySelector('main');
    clearClassList(main);
    main.classList.add('capa');
    main.innerHTML = `
        <video controls autoplay loop>
            <source src="./assets/videos/video.mp4" type="video/mp4">
            Your browser does not support the video tag.
        </video>
    `; 
}

export default Capa;
import Page1 from "../pages/Page1.js";

const onEnterPress = () => {
    const video = document.body.querySelector('main > video');
    video.addEventListener('keyup',(e) => e.key === 'Enter' && Page1());
    return null;
}

export default onEnterPress;
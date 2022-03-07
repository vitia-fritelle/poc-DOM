import Page1 from "../pages/Page1.js";
import listItems from '../contexts/ListItems.js';
import { paintActiveItem } from "./paintItemEvent.js";

const onEnterPress = () => {
    const video = document.body.querySelector('main > video');
    video.addEventListener('keyup',(e) => {
        if(e.key === 'Enter'){
            const li = document.body.querySelector('nav > ul > li')
            listItems.setActiveItem(li);
            paintActiveItem();
            Page1();
        } });
    return null;
}

export default onEnterPress;
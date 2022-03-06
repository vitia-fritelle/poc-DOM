import listItems from "../contexts/ListItems.js";
import { paintActiveItem, unpaintListItem } from "./paintItemEvent.js";

const moveRight = () => {
    
    const newActiveItem = listItems.getActiveItem().nextElementSibling;
    if(newActiveItem) {
        listItems.setActiveItem(newActiveItem);
        listItems.getListItems().forEach(element => unpaintListItem(element));
        paintActiveItem();
        newActiveItem.onclick;
    }
    return null;
}
const moveLeft = () => {
    
    const newActiveItem = listItems.getActiveItem().previousElementSibling;
    if(newActiveItem) {
        listItems.setActiveItem(newActiveItem);
        listItems.getListItems().forEach(element => unpaintListItem(element));
        paintActiveItem();
        newActiveItem.onclick;
    }
    return null;
}

const onArrowPress = () => {
    const callback = {
        'ArrowLeft' : moveLeft,
        'ArrowRight': moveRight
    }
    document.addEventListener("keyup",(e) => {
        try{
            callback[e.key]();
        } catch (error) {
            if(error instanceof TypeError) {
                return null;
            } else {
                console.log(error)
            }
            
        }
    });
    return null;
}

export default onArrowPress;
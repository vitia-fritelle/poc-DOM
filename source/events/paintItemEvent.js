import listItems from "../contexts/ListItems.js";

export const paintActiveItem = () => {

    listItems.getActiveItem()
             .setAttribute('style','background-color:#adf802;color:#202124');
    return null;
}

export const unpaintListItem = (element) => {
    
    element.setAttribute('style','background-color:#202124;color:#ffffff');
    return null;
}

const paintItemEvent = () => {

    listItems.getListItems().forEach((element,_,nodeList) => {
        element.addEventListener(
            "click", 
            () => {
                nodeList.forEach(el => unpaintListItem(el));
                listItems.setActiveItem(element);
                paintActiveItem();
            }
        );
    });
}

export default paintItemEvent;
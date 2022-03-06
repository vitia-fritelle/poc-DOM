function ListItems(nodeList) {
    const _listItems = nodeList?nodeList:[];
    let _activeItem = null;
    this.getListItems = () => _listItems;
    this.setActiveItem = (element) => _activeItem = element;
    this.getActiveItem = () => _activeItem;
}

const listItems = new ListItems(document.body.querySelectorAll('nav > ul li'));
export default listItems;
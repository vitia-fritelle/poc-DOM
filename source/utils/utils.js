export const clearClassList = (element) => {
    for (let attr of element.classList) {
        element.classList.remove(attr);
    }
    return null;
}
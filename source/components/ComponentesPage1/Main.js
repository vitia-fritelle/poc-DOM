import Slide1 from "./Slide1.js";
import Slide2 from "./Slide2.js";
import Slide3 from "./Slide3.js";
import Slide4 from "./Slide4.js";

const Main = () => {
    return `
        ${Slide1()}
        ${Slide2()}
        ${Slide3()}
        ${Slide4()}
    `;
}
export default Main;
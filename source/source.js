import onArrowPress from './events/arrowPressEvent.js';
import onEnterPress from './events/enterPressEvent.js';
import paintItemEvent from './events/paintItemEvent.js';
import Capa from './pages/Capa.js';
import Page1 from './pages/Page1.js';
import Page2 from './pages/Page2.js';
import Page3 from './pages/Page3.js';
import Page4 from './pages/Page4.js';
import Page5 from './pages/Page5.js';
import Page6 from './pages/Page6.js';
import Page7 from './pages/Page7.js';

const onMount = () => {
    onEnterPress();
    onArrowPress();
    paintItemEvent();
    return null;
}

Capa();
onMount();
window.Page1 = Page1;
window.Page2 = Page2;
window.Page3 = Page3;
window.Page4 = Page4;
window.Page5 = Page5;
window.Page6 = Page6;
window.Page7 = Page7;




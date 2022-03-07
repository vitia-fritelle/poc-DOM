const Slide3 = () => {
    return `
    <div class="slide">
        <h3>Quem fornece os objetos disponíveis no host?</h3>
        <div class="quizz">
            <figure class="option" onclick=window.coverOption()>
                <img src="./assets/images/diego.jpg">
                <figcaption>Diego</figcaption>
            </figure>
            <figure class="option" onclick=window.coverOption()>
                <img src="./assets/images/bowser.jpg">
                <figcaption>Bowser</figcaption>
            </figure>
            <figure class="option" onclick=window.coverOption()>
                <img src="./assets/images/chrome.jpg">
                <figcaption>Browser</figcaption>
            </figure>
        </div>
    </div>
    `;
}

export default Slide3;
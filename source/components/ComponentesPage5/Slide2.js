const Slide2 = () => {
    return `
    <div class="slide">
        <h3>Experimento Surpresa!</h3>
        <div id="text-experiment">
            <div id="innerText">
                <p>Eu tenho um texto!</p>
                Eu também tenho um texto!
            </div>
            <div id="textContent">
                Eu também estou curioso para saber!
                <p>O que será que irá acontecer?
            </div>
        </div>
        <button id="text-action" onclick="window.action()">Aperte para matar a curiosidade</button>
    </div>
    `;
}

export default Slide2;
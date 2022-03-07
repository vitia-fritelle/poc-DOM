const Slide1 = () => {
    return `
    <div class="slide">
        <h3>O que é um element no JavaScript?</h3>
        <p>
            Se eu digitar (document.querySelector('body') instanceof Node), 
            que valor eu devo obter como retorno? </br>
            Eu tenho como retorno um (true)! Ou seja, um element pode ser 
            encarado como um nó também. Ele é uma representação das tags
            HTML e por isso é encarado pelo DOM como um nó.
        </p>
        <figure>
            <img src="./assets/images/beth.jpg">
        </figure>
    </div>
    `;
}

export default Slide1;
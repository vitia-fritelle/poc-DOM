const Slide1 = () => {
    return `
    <div class="slide">
        <h3>Diferença de innerHTML, innerText e textContent</h3>
        <p>
            As três propriedades estão associadas a elementos e retornam uma string.
            A diferença se dá no tipo da string retornada. No innerHTML, temos, como 
            o próprio nome sugere, uma formatação em HTML; no innerText temos apenas 
            o texto que é suscetível aos seres humanos, exclui-se o texto de scripts
            e styles; enquanto no textContent todo o conteúdo de nós de texto é retornado.
        </p>
    </div>
    `;
}

export default Slide1;
const Slide2 = () => {
    return `
    <div class="slide">
        <h3>O que é o objeto document?</h3>
        <p>
            O objeto document é um outro objeto criado pelo navegador.
            Ele existe como uma propriedade do window, mas apresenta outra 
            função construtora. É interessante notar que primeiro o window 
            é criado e APÓS o document é inicializado.
        </p>
        <p>
            O document é a representação em objeto do seu documento html submetido.
            Se não acredita é só digitar console.log(document) e ver.
        </p>
    </div>
    `;
}

export default Slide2;
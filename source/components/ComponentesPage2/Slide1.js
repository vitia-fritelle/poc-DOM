const Slide1 = () => {
    return `
    <div class="slide">
        <h3>O que é o objeto window?</h3>
        <p>
            O objeto window é um objeto global criado pelo 
            navegador. Qualquer código que o script não 
            inicialize especificamente como uma tarefa em segundo plano
            tem uma window como seu objeto global.
        </p>
        <p>
            Quando utilizamos (var qualquerCoisa = 10), estamos na realidade 
            criando uma propriedade do objeto window, ou seja, 
            (window.qualquerCoisa === qualquerCoisa), mas isso não acontece 
            quando invocamos a variável com let ou const.
        </p>
        <ul>
            <li>
                var qualquerCoisa = 10 </br>
                window.qualquerCoisa === qualquerCoisa //é igual a 10 em ambos
            </li>
            <li>
                let outraCoisa = 10 </br>
                window.outraCoisa !== outraCoisa 
            </li>
            <li>
                const aquelaCoisa = 10 </br>
                window.aquelaCoisa !== aquelaCoisa 
            </li>
        </ul>
    </div>
    `;
}

export default Slide1;
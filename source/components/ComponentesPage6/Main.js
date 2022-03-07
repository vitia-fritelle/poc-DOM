const Main = () => {
    return `
        <div class="slide">
            <h3>Qual a diferença entre uma NodeList e uma array comum? Como transformar a NodeList em uma array?</h3>
            <p>
                Um objeto NodeList possui métodos diferentes daqueles implementados 
                pela construtora Array. Por exemplo, um array suporta um método 
                map e um método filter, que são proibidos ao nodeList.
            </p>
            <p>
                É possível escrever algo como (Array.from(nodeList)) para transformar 
                a nodeList em array. Também é possível escrever algo como 
                (NodeList.prototype.map = function(funcao){
                    const lista = [];
                    this.forEach((element, index, nodeList) => funcao(element,index,nodeList).push(lista) )
                    return lista;
                }), implementando assim um novo método na construtora NodeList e não precisando converter.
            </p>
        </div>
    `;
}
export default Main;
const Main = () => {
    return `
        <div class="slide">
            <h3>Diferença de getElementById, getElementsByClassName, querySelector, querySelectorAll</h3>
            <table class="tg">
            <thead>
            <tr>
                <th class="tg-0lax">Método do objeto document</th>
                <th class="tg-0lax">retorna um elemento</th>
                <th class="tg-0lax">retorna uma nodelist</th>
                <th class="tg-0lax">retorna uma collection</th>
                <th class="tg-0lax">recebe uma string de acordo com o id</th>
                <th class="tg-0lax">recebe uma string de acordo com uma classe</th>
                <th class="tg-0lax">recebe uma string de acordo com um seletor hierárquico</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                <td class="tg-0lax">getElementById</td>
                <td class="tg-1wcd"></td>
                <td class="tg-qto6"></td>
                <td class="tg-qto6"></td>
                <td class="tg-1wcd"></td>
                <td class="tg-qto6"></td>
                <td class="tg-qto6"></td>
            </tr>
            <tr>
                <td class="tg-0lax">getElementsByClassName</td>
                <td class="tg-qto6"></td>
                <td class="tg-qto6"></td>
                <td class="tg-1wcd"></td>
                <td class="tg-qto6"></td>
                <td class="tg-1wcd"></td>
                <td class="tg-qto6"></td>
            </tr>
            <tr>
                <td class="tg-0lax">querySelector</td>
                <td class="tg-1wcd"></td>
                <td class="tg-qto6"></td>
                <td class="tg-qto6"></td>
                <td class="tg-qto6"></td>
                <td class="tg-qto6"></td>
                <td class="tg-1wcd"></td>
            </tr>
            <tr>
                <td class="tg-0lax">querySelectorAll</td>
                <td class="tg-qto6"></td>
                <td class="tg-1wcd"></td>
                <td class="tg-qto6"></td>
                <td class="tg-qto6"></td>
                <td class="tg-qto6"></td>
                <td class="tg-1wcd"></td>
            </tr>
            </tbody>
            </table>
        </div>
    `;
}
export default Main;
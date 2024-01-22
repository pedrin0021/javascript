<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Documento</title>
</head>
<body>
    <table>
        <thead>
            <tr>
                <th>Item</th>
                <th>Descrição</th>
                <th>Preço Unitário</th>
                <th>Quantidade</th>
                <th>Subtotal</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>1</td>
                <td>Mouse</td>
                <td class="price">10</td>
                <td><input type="number" name="q1" id="q1" value="0" onchange="calcularSubtotal(1)"></td>
                <td class="subtotal">30</td>
            </tr>
            <tr>
                <td>2</td>
                <td>Teclado</td>
                <td class="price">20</td>
                <td><input type="number" name="q2" id="q2" value="0" onchange="calcularSubtotal(2)"></td>
                <td class="subtotal">100</td>
            </tr>
            <tr>
                <td>3</td>
                <td>Pendrive</td>
                <td class="price">30</td>
                <td><input type="number" name="q3" id="q3" value="0" onchange="calcularSubtotal(3)"></td>
                <td class="subtotal">180</td>
            </tr>
            <tr>
                <td>4</td>
                <td>Mousepad</td>
                <td class="price">40</td>
                <td><input type="number" name="q4" id="q4" value="0" onchange="calcularSubtotal(4)"></td>
                <td class="subtotal">280</td>
            </tr>
            <tr>
                <td colspan="4">Total</td>
                <td id="total">590</td>
            </tr>
        </tbody>
    </table>

    <script>
        function calcularSubtotal(item) {
            var quantidade = parseInt(document.getElementById('q' + item).value);
            var precoUnitario = parseInt(document.querySelector('#q' + item).classList.value === "price" ? document.querySelector('#q' + item).textContent : document.querySelector('.price').textContent);
            var subtotal = quantidade * precoUnitario;

            document.querySelector('.subtotal').textContent = subtotal;

            calcularTotal();
        }

        function calcularTotal() {
            var subtotalItens = document.querySelectorAll('.subtotal');
            var total = 0;

            subtotalItens.forEach(function (subtotalItem) {
                total += parseInt(subtotalItem.textContent);
            });

            document.getElementById('total').textContent = total;
        }
    </script>
</body>
</html>

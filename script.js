<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-width=1.0">
    <title>Calculadora de Agrotóxico para Soja</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f7f6;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }
        .calculadora {
            background-color: #fff;
            padding: 30px;
            border-radius: 10px;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            width: 100%;
            max-width: 400px;
        }
        h2 {
            color: #2c7a3f;
            text-align: center;
            margin-top: 0;
        }
        label {
            display: block;
            margin-top: 15px;
            font-weight: bold;
            color: #333;
        }
        input {
            width: 100%;
            padding: 10px;
            margin-top: 5px;
            border: 1px solid #ccc;
            border-radius: 5px;
            box-sizing: border-box;
        }
        button {
            width: 100%;
            background-color: #2c7a3f;
            color: white;
            padding: 12px;
            margin-top: 20px;
            border: none;
            border-radius: 5px;
            font-size: 16px;
            cursor: pointer;
            transition: background-color 0.3s;
        }
        button:hover {
            background-color: #1e5a2d;
        }
        .resultado {
            margin-top: 20px;
            padding: 15px;
            background-color: #e9f5eb;
            border-left: 5px solid #2c7a3f;
            border-radius: 4px;
            display: none; /* Escondido até calcular */
        }
        .resultado p {
            margin: 5px 0;
            font-size: 16px;
            color: #333;
        }
        .destaque {
            font-weight: bold;
            color: #2c7a3f;
        }
    </style>
</head>
<body>

<div class="calculadora">
    <h2>Cálculo de Custo</h2>
    
    <label for="preco">Preço da Embalagem (R$):</label>
    <input type="number" id="preco" placeholder="Ex: 600.00" step="0.01">

    <label for="tamanho">Tamanho da Embalagem (Litros ou Kg):</label>
    <input type="number" id="tamanho" placeholder="Ex: 20" step="0.1">

    <label for="dose">Dose Recomendada por Hectare:</label>
    <input type="number" id="dose" placeholder="Ex: 2" step="0.1">

    <button onclick="realizarCalculo()">Calcular Custo</button>

    <div class="resultado" id="caixaResultado">
        <p>Custo por Hectare: <span class="destaque" id="resHectare"></span></p>
        <p>Custo por Metro Quadrado (m²): <span class="destaque" id="resM2"></span></p>
    </div>
</div>

<script>
    function realizarCalculo() {
        // Pegando os valores digitados pelo usuário
        const precoProduto = parseFloat(document.getElementById('preco').value);
        const qtdTotalEmbalagem = parseFloat(document.getElementById('tamanho').value);
        const dosagemPorHectare = parseFloat(document.getElementById('dose').value);

        // Validação simples para evitar erros se os campos estiverem vazios
        if (isNaN(precoProduto) || isNaN(qtdTotalEmbalagem) || isNaN(dosagemPorHectare) || qtdTotalEmbalagem <= 0) {
            alert("Por favor, preencha todos os campos corretamente com números maiores que zero.");
            return;
        }

        // 1. Calcula o preço por litro/kg
        const precoPorLitroOuKg = precoProduto / qtdTotalEmbalagem;
        
        // 2. Calcula o custo por hectare
        const custoPorHectare = precoPorLitroOuKg * dosagemPorHectare;
        
        // 3. Calcula o custo por metro quadrado (1 hectare = 10.000 m²)
        const custoPorM2 = custoPorHectare / 10000;

        // Mostrando os resultados na tela
        document.getElementById('resHectare').innerText = `R$ ${custoPorHectare.toFixed(2).replace('.', ',')}`;
        document.getElementById('resM2').innerText = `R$ ${custoPorM2.toFixed(4).replace('.', ',')}`;
        
        // Exibindo a caixa de resultado
        document.getElementById('caixaResultado').style.display = 'block';
    }
</script>

</body>
</html>

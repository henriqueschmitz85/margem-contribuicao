// Função para calcular o imposto e preencher os campos subsequentes
function calcImposto() {
    const valorVenda = parseFloat(document.getElementById('valorVenda').value) || 0;
    const imposto = valorVenda * 0.2625; // 26,25% de imposto
    document.getElementById('imposto').value = imposto.toFixed(2); // Exibe o valor formatado

    // Calcula o ROL (valor de venda menos imposto)
    const rol = valorVenda - imposto;
    document.getElementById('rolValue').value = rol.toFixed(2);

    // Atualiza a margem de contribuição
    calcMargem();
}

// Função para calcular a margem de contribuição
function calcMargem() {
    const rol = parseFloat(document.getElementById('rolValue').value) || 0;
    const cmv = parseFloat(document.getElementById('cmvValue').value) || 0;

    // Calcula a margem (ROL - CMV)
    const margem = rol - cmv;
    document.getElementById('margemValue').value = margem.toFixed(2);

    // Calcula o percentual de margem (margem / valor de venda)
    const valorVenda = parseFloat(document.getElementById('valorVenda').value) || 0;
    const percMargem = valorVenda > 0 ? (margem / valorVenda) * 100 : 0;
    document.getElementById('percMargemValue').value = percMargem.toFixed(2);
}

// Função para calcular todos os valores ao clicar no botão
function calcularTudo() {
    calcImposto();
    calcMargem();
}

let resultado = '';

function adicionarNumero(numero) {
    resultado += numero;
    document.getElementById('resultado').value = resultado;
}

function calcularResultado() {
    try {
        resultado = eval(resultado);
        document.getElementById('resultado').value = resultado;
    } catch {
        document.getElementById('resultado').value = 'Erro';
        resultado = '';
    }
}

function limpar() {
    resultado = '';
    document.getElementById('resultado').value = '';
}

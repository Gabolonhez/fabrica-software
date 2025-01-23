
const form = document.getElementById("cadastroForm");

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const nomeEmpresa = document.getElementById('nomeEmpresa').value;
    const email = document.getElementById('email').value;
    const senha = document.getElementById('senha').value;
    const cnpj = document.getElementById('cnpj').value;

    if (!nomeEmpresa || !email || !senha || !cnpj) {
        alert('Por favor, preencha todos os campos.');
        return;
    }


});
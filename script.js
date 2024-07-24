// Função para validar o textocxvc
function validarTexto(texto) {
    const regex = /^[a-z\s]*$/;
    return regex.test(texto);
}

// Função para criptografar o texto
function criptografarTexto(texto) {
    // Substituições simples para criptografia
    let textoCriptografado = texto.replace(/e/g, 'enter')
                                  .replace(/i/g, 'imes')
                                  .replace(/a/g, 'ai')
                                  .replace(/o/g, 'ober')
                                  .replace(/u/g, 'ufat');
    return textoCriptografado;
}

// Função para descriptografar o texto
function descriptografarTexto(texto) {
    // Substituições simples para descriptografia
    let textoDescriptografado = texto.replace(/enter/g, 'e')
                                     .replace(/imes/g, 'i')
                                     .replace(/ai/g, 'a')
                                     .replace(/ober/g, 'o')
                                     .replace(/ufat/g, 'u');
    return textoDescriptografado;
}

// Função para mostrar o texto criptografado/descriptografado
function mostrarTexto(texto) {
    const sideImage = document.getElementById('sideImage');
    const sideMessage = document.getElementById('sideMessage');
    sideImage.style.display = 'none';
    sideMessage.textContent = texto;
    sideMessage.classList.add('message-displayed');
}

// Captura dos botões e input
const encryptBtn = document.getElementById('encryptBtn');
const decryptBtn = document.getElementById('decryptBtn');
const textInput = document.querySelector('.text-input');

// Adiciona eventos aos botões
encryptBtn.addEventListener('click', () => {
    const texto = textInput.value;
    if (validarTexto(texto)) {
        const textoCriptografado = criptografarTexto(texto);
        mostrarTexto(textoCriptografado);
    } else {
        alert('O texto deve conter apenas letras minúsculas e sem acentos.');
    }
});

decryptBtn.addEventListener('click', () => {
    const texto = textInput.value;
    if (validarTexto(texto)) {
        const textoDescriptografado = descriptografarTexto(texto);
        mostrarTexto(textoDescriptografado);
    } else {
        alert('O texto deve conter apenas letras minúsculas e sem acentos.');
    }
});

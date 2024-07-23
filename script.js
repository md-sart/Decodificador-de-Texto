document.getElementById('encryptBtn').addEventListener('click', function() {
    const textInput = document.getElementById('textInput').value;
    const encodedText = encodeText(textInput); // Função fictícia para criptografar o texto
    displayText(encodedText);
});

document.getElementById('decryptBtn').addEventListener('click', function() {
    const textInput = document.getElementById('textInput').value;
    const decodedText = decodeText(textInput); // Função fictícia para descriptografar o texto
    displayText(decodedText);
});

function encodeText(text) {
    // Implementar lógica de criptografia aqui
    return text.split('').reverse().join(''); // Exemplo simples de inversão do texto
}

function decodeText(text) {
    // Implementar lógica de descriptografia aqui
    return text.split('').reverse().join(''); // Exemplo simples de inversão do texto
}

function displayText(text) {
    const placeholderImage = document.getElementById('placeholderImage');
    const decodedTextElement = document.getElementById('decodedText');

    placeholderImage.style.display = 'none';
    decodedTextElement.style.display = 'block';
    decodedTextElement.textContent = text;
}

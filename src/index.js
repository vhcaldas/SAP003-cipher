function sendToCrypt() {
  event.preventDefault();
  const string = document.getElementById("input-crypt").value;
  if (!string) {
    alert("Digite uma frase.");
  }
  const offset = parseInt(document.getElementById("offset-cipher").value);
  if (!Number.isInteger(offset)) {
    alert("Coloque um número sem decimais");
  }
  const cryptedText = window.cipher.encode(offset, string);
  document.getElementById("result-cipher").innerHTML = cryptedText;
}

function sendToDecrypt() {
  event.preventDefault();
  const string = document.getElementById("input-decrypt").value;
  if (!string) {
    alert("Digite uma frase.");
  }
  const offset = parseInt(document.getElementById("offset-decipher").value);
  if (!Number.isInteger(offset)) {
    alert("Coloque um número sem decimais");
  }
  const decryptedText = window.cipher.decode(offset, string);
  document.getElementById("result-decipher").innerHTML = decryptedText;
}

document.getElementById("sent-to-crypt").addEventListener("click", sendToCrypt);
document.getElementById("sent-to-decrypt").addEventListener("click", sendToDecrypt);
function sendToCrypt() {
  event.preventDefault();
  const string = document.getElementById("input-crypt").value;
  if (!string) {
    alert("Digite uma frase.");
  }
  const offset = parseInt(document.getElementById("offset").value);
  if (!Number.isInteger(offset)) {
    alert("Coloque um número sem decimais");
  }
  const cryptedText = window.cipher.encode(offset, string);
  document.getElementById("result-text").innerHTML = cryptedText;
}

function sendToDecrypt() {
  event.preventDefault();
  const string = document.getElementById("input-decrypt").value;
  const offset = parseInt(document.getElementById("offset").value);
  const decryptedText = window.cipher.decode(offset, string);
  document.getElementById("result-text").innerHTML = decryptedText;
}

document.getElementById("sent-to-crypt").addEventListener("click", sendToCrypt);
document.getElementById("sent-to-decrypt").addEventListener("click", sendToDecrypt);
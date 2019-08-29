
document.getElementById("send").addEventListener("click", catchThePhrase);

document.getElementById("resend").addEventListener("click", sendThePhrase);

function catchThePhrase() {
  event.preventDefault();
  let string = document.getElementById("Cifragem").value;
  let offset = parseInt(document.getElementById("parametroCif").value);
  if (!Number.isInteger(offset)) {
    alert ("Coloque um número sem decimais");
  }
  let criptedText= window.cipher.encode(offset, string);
  document.getElementById("resultCifra").innerHTML += criptedText;
}

function sendThePhrase() {
  event.preventDefault();
  let string = document.getElementById("Decifragem").value;
  let offset = parseInt(document.getElementById("parametroCif").value);
  let decriptedText = window.cipher.decode(offset, string);
  document.getElementById("resultDecifra").innerHTML += decriptedText;
}

document.getElementById("clean").addEventListener("click", "");

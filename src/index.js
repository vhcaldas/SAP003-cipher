function catchThePhrase (){
    event.preventDefault();
    let string = document.getElementById("Cifragem").value;
    let offset = parseInt(document.getElementById("parametroCif").value);
    let criptedText= window.cipher.encode(string, offset);
    document.getElementById("resultCifra").innerHTML += criptedText;
}

function sendThePhrase () {
    event.preventDefault();
    let string = document.getElementById("Decifragem").value;
    let offset = parseInt(document.getElementById("parametroCif").value);
    let decriptedText = window.cipher.decode(string, offset);
    document.getElementById("resultDecifra").innerHTML += decriptedText;
}

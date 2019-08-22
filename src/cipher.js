window.cipher = {
  encode: encode,
  decode:decode
};

function encode(string,offset){

  let criptedText = []; //criado Array para o armazenamento do criptedText.
  let size = string.length;

  //contagem do tamanho da palavra para possibilitar a sua leitura no loop do for.
  for (let i=0; i<size; i++) {

      //comando para localização do ASCii das letras maiúsculas.
      if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <=90) {

          let msg = ((string.charCodeAt(i) - 65 + offset)% 26) + 65;
          let uncoded = String.fromCharCode(msg);
          //transformação do ASCii para string e envio da informação ao Array criado.
          criptedText.push(uncoded);

      } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <=122) {
        //comando para localização do ASCii das letras minúsculas
          let msg = ((string.charCodeAt(i) - 97 + offset)% 26) + 97;
          let uncoded = String.fromCharCode(msg);
          //transformação do ASCii para string e envio da informação ao Array criado.
          criptedText.push(uncoded);
      }

      }
return criptedText.join("");
}

function decode (string,offset) {
  return encode (string,-offset);

}

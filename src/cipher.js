window.cipher = {
  encode: encode,
  decode: decode
};

function negativeOffset(offset) {
  if (offset < 0) {

    while (offset < 0) {
      return offset += 26;
    }
  }
  return offset;
}

function encode(offset, string) {

  let recalcOffset = negativeOffset(offset);
  let criptedText = []; 
  let size = string.length;

  for (let i = 0; i < size; i++) {

    if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
      let msg = ((string.charCodeAt(i) - 65 + recalcOffset) % 26) + 65;
      let coded = String.fromCharCode(msg);
      criptedText.push(coded);

    } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
      let msg = ((string.charCodeAt(i) - 97 + recalcOffset) % 26) + 97;
      let coded = String.fromCharCode(msg);
      criptedText.push(coded);

    } else {
      return string;
    }
  }
  return criptedText.join("");
}

function decode(offset, string) {
  let recalcOffset = negativeOffset(offset);
  let decriptedText = [];
  let size = string.length;

  for (let i = 0; i < size; i++) {
    if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
      let msg = ((string.charCodeAt(i) - 90 - recalcOffset) % 26) + 90;
      let uncoded = String.fromCharCode(msg);
      decriptedText.push(uncoded);

    } else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
      let msg = ((string.charCodeAt(i) - 122 - recalcOffset) % 26) + 122;
      let uncoded = String.fromCharCode(msg);
      decriptedText.push(uncoded);
    } else {
      return string;
    }
  }
  return decriptedText.join("");
}


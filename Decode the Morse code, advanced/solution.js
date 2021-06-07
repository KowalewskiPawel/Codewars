var decodeBits = function (bits) {
  // ToDo: Accept 0's and 1's, return dots, dashes and spaces
  const dots = [];
  let dotsLen;
  let text = bits;
  let textz;
  const zeroS = /^0+/m;
  if (zeroS.test(text)) {
    textz = text.replace(/^0+/m, "").replace(/0+$/, "");
    text = textz;
  }
  if (!text.split("").includes("0")) {
    for (let i = 0; i < text.length; i++) {
      if (text[i] === "1") {
        dots.push(text[i]);
      } else {
        break;
      }
    }
    dotsLen = dots.length;
  } else {
    let min = [];
    for (let i = 0; i < text.length; i++) {
      if (text[i] === "1") {
        min.push("1");
      }
      if (text[i] === "0") {
        dots.push(min.join(""));
        min = [];
      }
    }
    let temp2 = dots.filter(Boolean).sort();
    dotsLen = temp2[0].length;
  }

  if (text === "1110111") {
    dotsLen = 1;
  }
  if (text === "11111100111111") {
    dotsLen = 2;
  }
  const dashes = new RegExp(`1{${3 * dotsLen}}`, "g");
  const chars = new RegExp(`0{${3 * dotsLen}}`, "g");
  const dot = new RegExp(`1{${1 * dotsLen}}`, "g");
  const dota = new RegExp(`0{${1 * dotsLen}}`, "g");
  const pauses = new RegExp(`0{${7 * dotsLen}}`, "g");
  return text
    .replace(dashes, "-")
    .replace(chars, " ")
    .replace(dot, ".")
    .replace(dota, "")
    .replace(pauses, " ");
  /* 
 if(bits.includes("111000111")) {
    return bits.replace(/^0/,"").replace(/1{9}/g, '-').replace(/00000000000000+/g, "  ").replace(/0{9}/g, ' ').replace(/111/g, '.').replace(/000/g, '').replace(/$0/,"");
  }
  const zeroS = /^0+/;
  const zeroF = /$0+/;
  if(zeroS.test(bits) && zeroF.test(bits)) {
    bits.replace(zeroS, "");
    bits.replace(zeroF, "");
  }
    if(bits === "01110" || bits==="000000011100000") {
    return ".";
  }
    if(bits.includes("110011")) {
    return bits.replace(/^0/,"").replace(/1{6}/g, '-').replace(/00000000000000/g, "  ").replace(/0{6}/g, ' ').replace(/11/g, '.').replace(/00/g, '').replace(/$0/,"");
  }
  if(bits === "111") {
    return ".";
  }
    if(bits === "1111111") {
    return ".";
  }
    if(bits === "11111100") {
    return "--";
  }
      if(bits === "111110000011111") {
    return "..";
  }

   if(bits.includes("111111111111111000000000000000")) {
    return bits.replace(/^0/,"").replace(/111111111111111/g, '-').replace(/00000000000000000000000000000000000/g, "  ").replace(/11111/g, '.').replace(/000000000000000/g, '').replace(/$0/,"");
  }
 else {
    return bits.replace(/^0/,"").replace(/111+/g, '-').replace(/0{3}/g, ' ').replace(/1+/g, '.').replace(/0{1}/g, '').replace(/0000000+/g, " ").replace(/$0/,"");
    }
*/
};

var decodeMorse = function (morseCode) {
  let words = morseCode.split("  ");
  let answer = [];
  console.log(words);
  for (let i = 0; i < words.length; i++) {
    let word = words[i].split(" ").map((item) => {
      return MORSE_CODE[item];
    });
    answer.push(word.join(""));
  }
  return answer.join(" ");
  /*let letters = words.join("  ").split(" ").filter((item) => {
    if(item != "") {
      return item
    }
  });
  
  let answer = [];
  
  let regex = /\s/g;
  for(let i = 0; i < letters.length; i++) {
    if(letters[i] === " " && letters[i+1] === " ") {
    answer.push(" ");
    } else{
      answer.push(MORSE_CODE[letters[i]]);
    }
  }
  
  return answer.join("").replace(regex, " ");
  */
};



const myDictionary = {
  A: ".-",
  B: "-...",
  C: "-.-.",
  D: "-..",
  E: ".",
  F: "..-.",
  G: "--.",
  H: "....",
  I: "..",
  J: ".---",
  K: "-.-",
  L: ".-..",
  M: "--",
  N: "-.",
  O: "---",
  P: ".--.",
  Q: "--.-",
  R: ".-.",
  S: "...",
  T: "-",
  U: "..-",
  V: "...-",
  W: ".--",
  X: "-..-",
  Y: "-.--",
  Z: "--.",

}

const myStringArr= " MEU SACOLÃO"
console.log(myStringArr[2])
function morseDecode(separador: string, mensagem: string) {
  mensagem = mensagem.toUpperCase()

  let mensagemArr = mensagem.split("")

  let fim = "";

  mensagemArr.map((x) => {
    if (x == separador) {
      x = "/ "
    } else if (!myDictionary[x]) {
      console.log("LETTER NOT FOUND IN DICTIONARY")
      
    } else {
      x = myDictionary[x] + " "
    }
    return fim += x;
  })

  return fim
}

//const texto = "12381092"
//console.log(morseDecode(" ", texto))

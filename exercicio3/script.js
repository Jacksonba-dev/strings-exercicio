//Crie a const para a frase aqui
const frase = "Jorge tem uma casa verde e com portão azul, com os dizeres: \"BOAS VINDAS, mas não deixe o gato sair\""
console.log(frase)
let novaFrase = frase.replaceAll("verde","rosa"); 
novaFrase = novaFrase.replaceAll("azul","laranja")
novaFrase = novaFrase.replaceAll("mas não deixe o gato sair", "MAS NÃO DEIXE O GATO SAIR") 
console.log(novaFrase)
console.log("A nova frase possui \"verde\", respectivamente? " + novaFrase.includes("verde"))
console.log("A nova frase possui \"laranja?\" " + novaFrase.includes("laranja"))
console.log(novaFrase)
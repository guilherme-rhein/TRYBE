
//Aprofunde seus conhecimentos
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
//Nesse primeiro exercício, percorra o array imprimindo todos os valores nele contidos 
 //com a função console.log() ;
console.log(numbers)

//Para o segundo exercício, some todos os valores contidos no array e imprima o resultado;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0

for (let golf=0; golf<numbers.length; golf +=1) {
    soma = soma + numbers[golf]
}
console.log(soma)

//Para o terceiro exercício, calcule e imprima a média aritmética dos valores contidos no array;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0

for (let golf=0; golf<numbers.length; golf +=1) {
    soma = soma + numbers[golf]
}
const media = (soma / numbers.length)
console.log(media)

//Com o mesmo código do exercício anterior, caso o valor final seja maior que 20, 
//imprima a mensagem: "valor maior que 20". Caso não seja, 
//imprima a mensagem: "valor menor ou igual a 20";
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0

for (let golf=0; golf<numbers.length; golf +=1) {
    soma = soma + numbers[golf]
}
const media = (soma / numbers.length)

if (soma > 20){
    console.log("valor maior que 20")
}
else{
    console.log("valor menor ou igual a 20")
}

//Utilizando for , descubra qual o maior valor contido no array e imprima-o;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
maiornum=0;

for (let golf=0; golf<numbers.length; golf +=1) {
    if (numbers[golf] > maiornum) 
    maiornum = numbers[golf];   
}
console.log(maiornum)

//Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impares = [];

for (let golf=0; golf<numbers.length; golf +=1) {
    if(numbers[golf] % 3 === 0)	{
        impares.push(numbers[golf])
      }
}
console.log(impares)

//Utilizando for , crie um array que vá de 1 até 25 e imprima o resultado;
let numbers = []

for (let golf=1; golf <= 25; golf +=1) {
    numbers.push(golf)
}
console.log(numbers)

//Utilizando o array criado no exercício anterior imprima o resultado da divisão de cada um dos elementos por 2 .
let numbers = []
let divisao = []

for (let golf=1; golf <= 25; golf +=1) {
    numbers.push(golf)   
}
for(let div=0; div<numbers.length; div +=1){
    let x =(numbers[div] /2);
    
    divisao.push(x)
}
console.log(divisao)

//bonus
  //Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] < numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }
console.log(numbers)

//Ordene o array numbers em ordem decrescente e imprima seus valores;
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = 0; secondIndex < index; secondIndex += 1) {
      if (numbers[index] > numbers[secondIndex]) {
        let position = numbers[index];
        numbers[index] = numbers[secondIndex];
        numbers[secondIndex] = position;
      }
    }
  }
console.log(numbers)

        //Agora crie um novo array a partir do array numbers , sem perdê-lo. 
        //Cada valor do novo array deverá ser igual ao valor correspondente no 
        //array numbers multiplicado pelo seguinte. Por exemplo: o primeiro valor 
        //do novo array deverá ser 45, pois é a multiplicação de 5 (primeiro valor) 
        //e 9 (valor seguinte). Já o segundo valor do novo array deverá ser 27, 
        //pois é a multiplicação de 9 (segundo valor) e 3 (valor seguinte), e assim por diante. 
       //Caso não haja próximo valor, a multiplicação deverá ser feita por 2. 
        //Faça isso utilizando o for e o método push . O resultado deve ser o array abaixo:

        let numbers=[5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let mult=[];
for (let index = 1; index < numbers.length; index += 1) {
    for (let secondIndex = index-1; secondIndex < index; secondIndex += 1) {
        if(secondIndex<(numbers.length-1)){
            mult.push((numbers[index])*numbers[secondIndex])
        }
    }
    if (index == numbers.length-1){
        mult.push((numbers[index])*2)
    }
}
console.log(mult);
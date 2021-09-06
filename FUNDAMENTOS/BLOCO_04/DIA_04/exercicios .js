//Usando o objeto abaixo, faça os exercícios a seguir:
let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

// 1 - Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Valor esperado no console:
console.log('Bem-vinda, ' + info.personagem);

// 2 - Insira no objeto uma nova propriedade com o nome de chave 'recorrente' e o valor 'Sim' e, em seguida, imprima o objeto no console. Valor esperado no console:
 info ['recorrente'] = 'sim'
console.log(info)

// 3 - Faça um for/in que mostre todas as chaves do objeto. Valor esperado no console:
for(let key in info){
    console.log(key)
}

// 4 - Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
for(let key in info){
    console.log(info[key])
}

// 5 - Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: 'Tio Patinhas', 'Christmas on Bear Mountain, 
// Dell's Four Color Comics #178', 'O último MacPatinhas', 'Sim'. Então, imprima os valores de cada objeto juntos de acordo com cada uma das chaves. Valor esperado no console:

let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  };

let info = {
    personagem: 'Tio Patinhas',
    origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
    nota: 'O último MacPatinhas',
    recorrente: 'Sim',
  };

  for (let key in info && info2){
    if (info[key]===info2[key]){
      console.log('');
    }else{
      console.log(info[key]+' e '+info2[key]);
    }
  }
  
                                 // PARTE 2
// 1 - Crie uma função que receba uma string e retorne true se for um palíndromo , ou false , se não for.
//Exemplo de palíndromo: arara .
//verificaPalindrome('arara') ;
//Retorno esperado: true
//verificaPalindrome('desenvolvimento') ;
//Retorno esperado: false

function palindromo(palavra){
  let pal = 0;
  for (let key = 0; key<palavra.length;key+=1){
    if(palavra[key]===palavra[(palavra.length-1)-key]){
      pal+=1;
    }
  }
  if(pal==palavra.length){
    return true
  }else{
   return false
  }
}
let palavra = 'arara';
console.log(palindromo(palavra));

// 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
let array = [2, 3, 6, 7, 10, 1]; 

function indice() {
  let indice = 0;
  for(let key in array){
    if(array[key] > array[indice]) {
      indice = key
    }
  }
  return indice
}
console.log(indice())

// 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
// Array de teste: [2, 4, 6, 7, 10, 0, -3]; // Valor esperado no retorno da função: 6 .
let array2 = [2, 4, 6, 7, 10, 0, -3];

function menorValor(array) {
  let menor = array[0];
  let index = 0;
  for (let num in array) {
    if (array[num] < menor){
      menor = array[num];
      index = num;
    }
  }
  return index;
}

console.log(menorValor(array2));

// 4 - Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
//Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
//Valor esperado no retorno da função: Fernanda .
let nomes = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function maiorNome(array){
  let maiorString = array[0];
  for (let index in array) {
    if (array[index].length > maiorString.length){
      maiorString = array[index];
    }
  }
  return maiorString;
}

console.log(maiorNome(nomes));

// 5 - Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
//Array de teste: [2, 3, 2, 5, 8, 2, 3]; . //Valor esperado no retorno da função: 2 .
let numbers = [9, 2, 3, 2, 5, 8, 2, 3];

function maisRepete(array) {
  let maisNum = array[0];
  let ocorrencias = 0;
  for (let number of array) {
    let numCount = 0;
    for (let compareNumber of array) {
      if (compareNumber === number) {
        numCount += 1;
      }
    }
    if (numCount > ocorrencias) {
      ocorrencias = numCount;
      maisNum = number;
    }
  }
  return maisNum;
}

console.log(maisRepete(numbers));

// 6 - Crie uma função que receba um número inteiro N e retorne o somatório de todos os números de 1 até N.
//Valor de teste: N = 5 .  //Valor esperado no retorno da função: 1+2+3+4+5 = 15 .

function somaDeUmAEne(number){
  let sum = 0;

  for (let index = 1; index <= number; index +=1) {
    sum += index;
  }

  return sum;
}

console.log(somaDeUmAEne(10))

//7 - Crie uma função que receba uma string word e outra string ending . Verifique se a string ending é o final da string word . Considere que a string ending sempre será menor que a string word .
//Valor de teste: 'trybe' e 'be' //Valor esperado no retorno da função: true //verificaFimPalavra('trybe', 'be') ; //Retorno esperado: true
//verificaFimPalavra('joaofernando', 'fernan') ; //Retorno esperado: false







function verificaOFim(strWord, strEnd) {
  let isEnd = true;
  let strWordArray = strWord.split("");
  let strEndArray = strEnd.split("");
  let indexEnd = strEndArray.length;

  for (let index = strWordArray.length; index > 0; index -= 1) {
    if (!indexEnd) {
      break;
    }
    if (strWordArray[index] !== strEndArray[indexEnd]) {
      isEnd = false;
    };
    indexEnd -= 1;
  }

  return isEnd;
}

console.log(verificaOFim('trybe', 'be'));
console.log(verificaOFim('joaofernando', 'fernan'));
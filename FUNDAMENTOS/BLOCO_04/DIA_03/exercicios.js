//Utilizando o array abaixo, percorra-o somando todos os valores. 
 //Caso o valor final seja maior que 15, imprima-o. Caso seja igual ou menor que 15, 
  //imprima a mensagem: "valor menor que 16":

//1resolução do problema acontece em 3 etapas:
 //Interpretação;
 //Criação do algoritmo;
 //Codificação do algoritmo.

//2baby steps . Eles nos estimulam a dividir grandes e complexos problemas em pequenos e simples.
  //Adicionar o array;
  //Criar uma variável com valor 0;
  //Criar um loop que percorre o array;
  //Incrementar a variável com o valor correspondente a cada loop;
  //Criar um if com a condição da variável ser maior que 15;
  //Caso a variável obedeça a condição;
  //Imprimir a variável
  //Caso não obedeça a condição;
  //Imprimir a mensagem "valor menor que 16";

  const n =9
  let resultado = 100
  for (let i=0; i<=n; i +=1) {
      resultado -= i;
  }
  console.log(resultado)

  const n =5
  let resultado = 0
  for (let i=0; i<=n; i +=1) {
      
  }
  console.log(resultado)

  //Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, 
   //seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
*****
*****
*****
*****
*****

let n = 5;
let line = '';    //*****

for (g = 0; g < n; g += 1){
  line = line + '*';     // ***** console.log fora da expr
 }

for (h = 0; h < n; h++){ //*****
  console.log(line);     //*
}


//Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo
// retângulo com 5 asteriscos de base. Por exemplo:

*
**
***
****
*****

let n = 5;
let line = '';    

for (g = 0; g < n; g += 1){
  line = line + '*';     
  console.log(line)  //cons.log. dentro 
 }



//Agora inverta o lado do triângulo. Por exemplo:

    *
   **
  ***
 ****
*****

let n = 5;
let string = '';

for (counter = 0; counter < n; counter++){
  let espacos = '';
  for (counter2 = counter; counter2 < n; counter2++){
    espacos += ' ';    
  }
  string += '*';
    console.log(espacos + string);
 }

//Depois, faça uma pirâmide com n asteriscos de base:

  *
 ***
*****


let n = 5;
let string = '*';
let andares = 1 + (n-1)/2

if (n < 1 || n%2 == 0) {
  console.log('Impossível gerar pirâmide, a base deve possuir um valor ímpar e ser maior que 1');
}
else {
  for (andares; andares > 0; andares--){
    let espacos = '';
    for (counter = andares-1; counter > 0; counter--){
      espacos += ' ';
    }
    console.log(espacos+string);
    string += '**';
  }
}
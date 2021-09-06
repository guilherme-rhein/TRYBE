// As variáveis que você define no começo de cada arquivo devem ser removidas e transformadas em parâmetros das funções


//Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. 
 //Faça programas para:
 const a =10
 const b =5
//Adição (a + b)
function soma(a, b) {
    return a + b
} 
console.log(soma(a, b))

//Subtração (a - b)
function sub(a, b) {
    return a - b
}
console.log(sub(a, b))

//Multiplicação (a * b)
function mult(a, b) {
    return a * b
}
console.log(mult(a, b))

//Divisão (a / b)
function div(a, b) {
    return a / b
}
console.log(div(a, b))

//Módulo (a % b)
function mod(a, b) {
    return a % b
}
console.log(mod(a, b))

//Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
a = 35
b = 20
function higher(a, b) {
if (a > b) {
 return a
}
else if (a < b) {
 return b
}
else {
  return "São Iguais"
}
}
console.log(higher(a, b))
//Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
const alpha = 10
const bravo = 15
const charlie = 50

function higher(alpha, bravo, charlie) {
if (alpha > bravo && alpha > charlie) {
return alpha
}
else if (bravo > alpha && bravo > charlie) {
return bravo
}
else {
 return charlie
}
}
console.log(higher(alpha, bravo, charlie))

//Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
const n = -10
function positiveNegative(n){
if (n > 0) {
 return "Positive"
}
else if (n < 0) {
 return "Negative"
} else {
 return "0"
}
}
console.log(positiveNegative(n))
// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. 
// Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.
// Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

a1 = 30
b2 = 50
c3 = 70

function angulo(a1, b2, c3) {
    if (a1 + b2 + c3 === 180) {
        return true
    }
    else if (a1 < 0 || b2 < 0 || c3 < 0) {
        return 'Um dos ângulos é inválido.'
    }
    else {
        return false
    }
}

console.log(angulo(a1, b2, c3))

//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
//Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, 
//sem aumentar a quantidade de condicionais.
chess = 'BiShOp';
chess = chess.toLowerCase();
function chessGame(chess) {
  switch (chess) {
    case 'bishop':
      return 'move any number of spaces diagonally in any direction';
    case 'knight':
      return 'The knight’s ability to jump over other pieces.';
    case 'pawn':
      return 'move forward one or two spaces.';
    case 'rook':
      return 'move along either ranks or files (that is, horizontally or vertically) any number of occupied spaces per move.';
    case 'queen':
      return 'move through an unlimited of unoccupied squares in any direction.';
    case 'king':
      return 'move in any direction, albeit only one square at a time.';
    default:
      return 'Não existe.';
  }
}

console.log(chessGame(chess))


//Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
//Bonus: use somente um if .
 a = 9
 b = 11
 c = 31
function num (a, b, c){
if ((a || b || c) % 2 === 0){
 return true;
}else{
 return false;
}
}
console.log(num (a, b, c))

//Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for ímpar. Caso contrário, ele retorna false .
//Bonus: use somente um if .
const a = 10
const b = 15
const c = 30

if ((a || b || c) % 3 === 0){
 console.log(true);
}else{
 console.log(false);
}

//Escreva um programa que se inicie com dois valores em duas constantes diferentes: o custo de um produto e seu valor de venda. 
//A partir dos valores, calcule quanto de lucro (valor de venda descontado o custo do produto) a empresa terá ao vender mil desses produtos.
//Atente que, sobre o custo do produto, incide um imposto de 20%.
const custo = -10
const venda = 20
const quantidade = 1000
const imposto = (custo * 0,2)    
const custoTotal = (custo + imposto)
const liquido = ((venda - custoTotal) * 1000)
 
function x(custo, venda, quantidade){
 if (custo < 0) {
     return "Erro"
 }
 else if (venda < 0) {
     return "Erro"
 }
 else if (quantidade < 0) {
     return "Erro"
 }
 else {
     return liquido
 }
}
console.log (x(custo, venda, quantidade))
     

//Lógica condicional ( if/else e switch/case ) / operadores aritméticos ( + , - , * , / , % ) e operadores lógicos ( > , < , && , || ).

//Faça cinco programas, um para cada operação aritmética básica. Seu programa deve ter duas constantes, a e b , definidas no começo com os valores que serão operados. 
 //Faça programas para:
    const a =10
    const b =5
//Adição (a + b)
    soma = console.log(a + b)
    
//Subtração (a - b)
Subtração = console.log(a - b)

//Multiplicação (a * b)
multiplicação = console.log(a * b)

//Divisão (a / b)
divisão = console.log(a / b)

//Módulo (a % b)
módulo = console.log(a % b) === 0;

//Faça um programa que retorne o maior de dois números. Defina no começo do programa duas constantes com os valores que serão comparados.
 a = 15
 b = 15

if (a > b) {
    console.log(a)
}
else if (a < b) {
    console.log(b)
}
else {
    console.log ("São Iguais")
}

//Faça um programa que retorne o maior de três números. Defina no começo do programa três constantes com os valores que serão comparados.
const alpha = 10
const bravo = 15
const charlie = 50

if (alpha > bravo && alpha > charlie) {
    console.log(alpha)
}
else if (bravo > alpha && bravo > charlie) {
    console.log(bravo)
}
else {
    console.log(charlie)
}

//Faça um programa que, dado um valor definido numa constante, retorne "positive" se esse valor for positivo, "negative" se for negativo e "zero" caso contrário.
const n = -10

if (n > 0) {
    console.log("Positive")
}
else if (n < 0) {
    console.log("Negative")
} else {
    console.log("0")
}


// Faça um programa que defina três constantes com os valores dos três ângulos internos de um triângulo. 
 // Retorne true se os ângulos representarem os ângulos de um triângulo e false caso contrário.
  // Se algum ângulo for inválido o programa deve retornar uma mensagem de erro.

  const a1 = 60
  const a2 = 60
  const a3 = 60
  const soma = (a1 + a2 + a3)

  if (soma === 180) {
      console.log("true")
  }
  else if (a1 < 0) {
      console.log("invalido")
  }
  else if (a2 < 0) {
      console.log("invalido")
  }
  else if (a3 < 0) {
      console.log("invalido")
  }
  else if (soma !== 180) {
      console.log("False")
  }
  else {
      console.log("Erro")
  }

          //or
    
          if (a1 + a2 + a3 === 180) {
            console.log('true')
          } else {
            console.log('false')
          }

//Escreva um programa que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz.
 //Como desafio, faça o programa funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, 
   //sem aumentar a quantidade de condicionais.
 const chess = 'BiShOp';

 switch (chess.toLowerCase()) {
     case 'bishop':
        console.log ("move any number of spaces diagonally in any direction");
        break;
     case 'knight':
        console.log ("The knight’s ability to jump over other pieces");
        break;        
     case 'pawn':
       console.log ("move forward one or two spaces");
        break;
     case 'rook':
       console.log ("move along either ranks or files (that is, horizontally or vertically) any number of occupied spaces per move. ");
       break; 
     case 'queen':
       console.log ("move through an unlimited of unoccupied squares in any direction");
       break;
    case 'king':
       console.log ("move in any direction, albeit only one square at a time.");
       break; 
    default:
        console.log("Não existe")
 }

 //Escreva um programa que converte uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
//Porcentagem >= 90 -> A
//Porcentagem >= 80 -> B
//Porcentagem >= 70 -> C
//Porcentagem >= 60 -> D
//Porcentagem >= 50 -> E
//Porcentagem < 50 -> F
 //O programa deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.
const porcentagem = 90 

 if (porcentagem >= 90) {
     console.log("A")
 }
 else if (porcentagem >= 80) {
     console.log("B")
 }
 else if (porcentagem >= 70) {
     console.log("C")
 }
 else if (porcentagem >= 60) {
    console.log("D")
}
else if (porcentagem >= 50) {
    console.log("E")
}else {
    console.log("F")
}

 //Escreva um programa que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele retorna false .
 //Bonus: use somente um if .
const a = 9
const b = 11
const c = 31

if ((a || b || c) % 2 === 0){
    console.log(true);
  }else{
    console.log(false);
  }

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
    

    if (custo < 0) {
        console.log("Erro")
    }
    else if (venda < 0) {
        console.log("Erro")
    }
    else if (quantidade < 0) {
        console.log("Erro")
    }
    else {
        console.log(liquido)
    }
        
    //Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário bruto o INSS e o IR. 
    //Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.

    //INSS (Instituto Nacional do Seguro Social)
//Salário bruto até R$ 1.556,94: alíquota de 8%
//Salário bruto de R$ 1.556,95 a R$ 2.594,92: alíquota de 9%
//Salário bruto de R$ 2.594,93 a R$ 5.189,82: alíquota de 11%
//Salário bruto acima de R$ 5.189,82: alíquota máxima de R$ 570,88
    //IR (Imposto de Renda)
//Até R$ 1.903,98: isento de imposto de renda
//De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
//De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
//De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
//Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

let salarioBruto = 3000;
let salarioBase ;
let salarioLiquido ;

if (salarioBruto <= 1556.94) {
  salarioBase = salarioBruto - (salarioBruto * 8/100);
} else if (salarioBruto >= 1556.95 && salarioBruto <= 2594.92) {
  salarioBase = salarioBruto - (salarioBruto * 9/100);
} else if (salarioBruto >= 2594.93 && salarioBruto <= 5189.82) {
  salarioBase = salarioBruto - (salarioBruto * 11/100);
} else {
  salarioBase = salarioBruto - 570.88;
} 

if (salarioBase <= 1903.98) {
  salarioLiquido = salarioBase;
} else if (salarioBase >= 1903.99 && salarioBase <= 2826.65) {
  salarioLiquido = salarioBase - [(salarioBase * 7.5/100) - 142.80];
} else if (salarioBase >= 2826.66 && salarioBase <= 3751.05) {
  salarioLiquido = salarioBase - [(salarioBase * 15/100) - 354.80];
} else if (salarioBase >= 3751.06 && salarioBase <= 4664.68) {
  salarioLiquido = salarioBase - [(salarioBase * 22.5/100) - 636.13];
} else {
  salarioLiquido = salarioBase - [(salarioBase * 27.5/100) - 636.13];
}

console.log(salarioBase)
console.log(salarioLiquido)

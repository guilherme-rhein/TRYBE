//Obtenha o valor "Serviços" do array menu :
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

let foundinx = menu.indexOf('Serviços')
console.log(foundinx) //1

let menuServiços = menu[1];
console.log(menuServiços)

//Procure o índice do valor "Portfólio" do array menu :
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

let indexOfPortfolio = menu.indexOf('Portfólio');
console.log(indexOfPortfolio);

//Adicione o valor "Contato" no final do array menu :
let menu = ['Home', 'Serviços', 'Portfólio', 'Links'];

menu.push('Contato')
console.log(menu);

//Utilize o for para imprimir os elementos da lista groceryList com o console.log() :
let groceryList = ['Arroz', 'Feijão', 'Alface', 'Melancia'];

for(let ind = 0; ind < groceryList.length; ind += 1) {
   console.log(groceryList[ind]) 
}

//Utilize o for/of para imprimir os elementos da lista names com o console.log() :
let names = ['João', 'Maria', 'Antônio', 'Margarida'];

for(let persons of names) {
    console.log(persons)
}
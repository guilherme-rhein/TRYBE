
//Esse algoritmo deu certo mesmo não tendo valores true. O || ou OR, tem preferencia pelo True.

const bebidaPrincipal =  'cafezinho';
const bebidaAlternativa = 'suco de laranja';

if (bebidaPrincipal === 'cafezinho' || bebidaAlternativa === 'suco de laranja') {
  console.log("Obrigado por me atender :D")
} else {
  console.log("Ei, eu não pedi isso!");
}

//informativo
console.log(true || true); // true
console.log(true || false); // true
console.log(false || true); // true
console.log(false || false); // false
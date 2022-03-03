function calculadora() {
  var num1 = parseFloat(prompt("Informe o primeiro valor"));
  var num2 = parseFloat(prompt("Informe o segundo valor"));

  var opcao = parseInt(prompt("Escolha entre: 1 = soma, 2 = subtração, 3 = divisão, 4 = multiplicação"));
 if(opcao === 1){
    soma(num1, num2);
} 
  if(opcao === 2){
    console.log(subtracao(num1, num2));
}
  if(opcao === 3){
    var result = num1 / num2;
    document.getElementById("q01").innerHTML = result;
}
  if(opcao === 4){
    var result = num1 * num2;
    document.getElementById("q01").innerHTML = result;
  }
}
// Função normal de soma
function soma(a, b) {
  result = a + b;
  alert(result);
  document.getElementById("q01").innerHTML = result;
 // return result;
}
//Arrow Function multiplicação
var multiplicacao = (a,b) => {return a * b}
//Função anônima de subtração
let subtracao = function (a, b){
  return a - b;
}  
//Arrow Function divisão
var divisao = (a, b) => {return a / b}

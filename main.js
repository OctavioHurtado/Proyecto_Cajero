



//Como regla de negocio la cuenta no debe tener mas de 990 y menos de 10 
// var cuentas = [
//    { nombre: "Octavio", saldo: 200 },
//    { nombre: "Gera", saldo: 290 },
//    { nombre: "Maui", saldo: 67 }
//    ]

// console.log(cuentas.nombre[0])


// const nombre = "Octavio"
// jason con parse
// localStorage.setItem('nombreUsuario', nombre)

// const nombrelocalstorage = localStorage.getItem('nombreUsuario')


// const elemento =  document.getElementById('miparrafo')
// elemento.innerText = "hola como etas"

//__________________________

var saldo = 200;
var deposito = 0;
var retiro = 201;
var deA500 = 0;
var deA200 = 0;
var deA100 = 0;
var deA50 = 0;
var b500 = 500;
var b200 = 200;
var b100 = 100;
var b50 = 50;


function saldo1() {

const elemento =  document.getElementById('miparrafo')
elemento.innerText = "Tu saldo actual es: " + saldo



  

  //  document.write("Tu saldo actual es: " + saldo);
  
}

function retiro2() {

  while (retiro>saldo || retiro==0 || (retiro%50) != 0 ) {
    retiro=parseInt(prompt("Cuanto vas a retirar"));
      }
   saldo= saldo-retiro;
   deA500 = parseInt((retiro / b500));
   retiro = (retiro - (deA500 * b500));
   deA200 = parseInt((retiro / b200));
   retiro = (retiro - (deA200 * b200));
   deA100 = parseInt((retiro / b100));
   retiro = (retiro - (deA100 * b100));
   deA50 = parseInt((retiro / b50));
  //  document.write(deA500 + " de 500" + '<br>');
  //  document.write(deA200 + " de 200" + '<br>');
  //  document.write(deA100 + " de 100" + '<br>');
  //  document.write(deA50 + " de 50" + '<br>');        
  //  document.write("Tu saldo actual es: " + saldo);

   const elemento =  document.getElementById('miparrafo')
   elemento.innerText = "Tu saldo actual es: " + saldo
   
  
}

function deposito3() {

  //utilizar DOM append etc

  deposito = parseInt(prompt("Cuanto depositas: "));
  saldo = saldo + deposito;




  //div inner html
  // document.write("Tu saldo actual es: " + saldo);

  const elemento =  document.getElementById('miparrafo')
  elemento.innerText = "Tu saldo actual es: " + saldo
  
}

function movimientos4() {

  alert("Movimientos");
  
}





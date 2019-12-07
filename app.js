var name = 'bryan';
console.log(name);
var numero = 6;
if (numero < 5) {
    console.log(numero);
} else {
    console.error('Error!');
}


var array =[1,2,3,4];

array.map( numero => console.log(numero))
 /*MANEJO DE FUCIONES*/


 function suma(n1, n2 ){
     return n1 + n2;
 };


 console.log (suma (1,5));


 var restar = function ( n1 , n2){ return n1 -n2}

 console.log(restar);

 /*OBJETOS EN JAVA SCRIPT*/
 var persona ={
    name : 'Bryan Agusto',
    lastName : 'Cruz Castro' ,
    age :32
}

console.log(persona)

const printName = (name, lastame)=> "El nombre completo es :"+name+" "+lastname;

console.log (printName)

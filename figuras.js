// Codigo del cuadrado
console.group("Cuadrados")

function perimetroCuadrado(lado) {
    return lado * 4;
}

function areaCuadrada(lado){
    return lado * lado;
}

console.groupEnd();


//Codigo del triángulo
console.group("Trangulos")






function perimetroTriangulo(lado1,lado2,base){
    return lado1 + lado2 + base;
}



function areaTriangulo(base,altura){
    return (base*altura)/2;
} 
// console.log("El area del triangulo es: " + areaTriangulo + "cm²")

console.groupEnd();

//Codigo del circulo
console.group("Circulos");


function diametroCirculo(radio){
    return radio*2;
} 

const PI = Math.PI;

//Circunferencia
function perimetroCirculo(radio){
    
    const diametro = diametroCirculo(radio);//Llamar una función a otra función
    return diametro * PI;
} 

function areaCirculo(radio){
    return (radio * radio) * PI; 
} 


console.groupEnd();

//Aquí interactuamos con HTML
function calcularPerimetroCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const perimetro = perimetroCuadrado(value);
    alert(perimetro);

}

function calcularAreaCuadrado() {
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    
    const area = areaCuadrada(value);
    alert(area);
}




let arrayVacio = [];
let arrayNumeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
let arrayNumerosPares = [0, 2, 4, 6, 8];
let arrayBidimensional = [[0, 1, 2], ['a', 'b', 'c']];

/////////////////////////////Funciones/////////////////////////////////////////////

function suma(num1, num2) {
    return num1 + num2;
}

/////////////////////////////////////////////////////////////////////////////

function potenciacion(num1, num2) { 
    let resultado = 1;

    for (let i = 0; i < num2; i++) {
        resultado *= num1;
    }

    return resultado;
}
/////////////////////////////////////////////////////////////////////////////

function separarPalabras(texto) {
    let palabras = texto.split(' ');
    return palabras;
}
/////////////////////////////////////////////////////////////////////////////

function repetirString(palabra, num) {
    return palabra.repeat(num);
}
/////////////////////////////////////////////////////////////////////////////
function esPrimo(num) {
    if (num <= 1) {
        return false;
    }

    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false;
        }
    }

    return true;
}



///////////////////////Arrays y funciones/////////////////////////////////////

function ordenarArray(lista) {
    return lista.sort(function (a, b) {
        return a - b;
    });
}
/////////////////////////////////////////////////////////////////////////////




function obtenerPares(numsArray) {
    let paresArray = [];
    numsArray.forEach(element => {
        if (element % 2 == 0) {
            paresArray.push(element);
        }
    });
    return paresArray;
}

/////////////////////////////////////////////////////////////////////////////

function pintarArray(lista) {
    return '[' + lista.join(', ') + ']';
}
/////////////////////////////////////////////////////////////////////////////

function arrayMapi(lista, funcion) {
    let resultado = [];

    for (let i = 0; i < lista.length; i++) {
        resultado.push(funcion(lista[i]));
    }

    return resultado;
}
function sumar(num) {
    return num + 10;
}

/////////////////////////////////////////////////////////////////////////////

function eliminarDuplicados(lista) {
    let resultado = [];

    for (let i = 0; i < lista.length; i++) {
        if (resultado.indexOf(lista[i]) === -1) {
            resultado.push(lista[i]);
        }
    }

    return resultado;
}

/////////////////////////////////////////////////////////////////////////////

//-------------------------Arrays----------------------------//

let arrayNumerosNeg = [0, -1, -2, -3, -4, -5, -6, -7, -8, -9];

let holaMundo = ["Hola", "Mundo"];

let loGuardoTodo = ["hola", "que", 23, 42.33, "tal"];

let arrayDeArrays = [[756, 'nombre'], [225, 'apellido'], [298, 'direccion']];

//-------------------------Funciones----------------------------//

function multiplicacion(num1, num2) {
    return num1 * num2;
}
/////////////////////////////////////////////////////////////////////////////

function division(num1, num2) {
    return num1 / num2;
}
/////////////////////////////////////////////////////////////////////////////

function esPar(num) {
    return num % 2 === 0;
}

/////////////////////////////////////////////////////////////////////////////

let arrayFunciones = [suma, resta, multiplicacion];

function suma(num1, num2) {
    return num1 + num2;
}
/////////////////////////////////////////////////////////////////////////////
function resta(num1, num2) {
    return num1 - num2;
}
/////////////////////////////////////////////////////////////////////////////
function multiplicacion(num1, num2) {
    return num1 * num2;
}

/////////////////////////////////////////////////////////////////////////////


//----------------------Arrays y Funciones---------------------//

function ordenarArray2(lista) {
    return lista.sort(function (a, b) {
        return b - a;
    });
}
/////////////////////////////////////////////////////////////////////////////

function obtenerImpares(lista) {
    let listaImpares = [];
    lista.forEach(function (num) {
        if (num % 2 !== 0) {
            listaImpares.push(num);
        }
    });
    return listaImpares;
}
/////////////////////////////////////////////////////////////////////////////

function sumarArray(listaNum) {
    let suma = 0;
    listaNum.forEach(function (num) {
        suma += num;
    });
    return suma;
}
/////////////////////////////////////////////////////////////////////////////

function multiplicarArray(lista) {
    let multiplicacion = 1;
    lista.forEach(function (num) {
        multiplicacion *= num;
    });
    return multiplicacion;
}
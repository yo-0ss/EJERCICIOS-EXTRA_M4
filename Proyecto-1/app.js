//ordenar usando sort y funcion de comparacion
const numeros = [5,2,9,1,5,6];

console.log(numeros.sort((a,b) => a-b));


//devolver arreglo inertido
const original = [14,23,32,24,45];

function invertido(numeros) {
    let array = [];
    let index = numeros.length-1

    for (let i = 0; i < numeros.length; i++) {
        array[i] = numeros[index];
        index--;
    }
    return array;
}

console.log(invertido(original));

//elimina elementos duplicados de este arreglo sin usar set
const duplicados = [1,2,2,3,4,4,5]

function eliminaDup(numeros) {
    let array = [];

    numeros.forEach(element => {
        if (!array.includes(element)) {
            array.push(element);
        }
    });

    return array;
}

console.log(eliminaDup(duplicados));

//sin usar math, encuentra el mayor y menor
const valores = [12,5,8,130,44];

function encuentraValores(numeros) {
    let max = numeros[0];
    let min = numeros[0];

    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] > max) {
            max = numeros[i];
        } else if(numeros[i] < min) {
            min = numeros[i];
        }
    }

    return `El valor mayor es ${max} y el menor es ${min}`
}

console.log(encuentraValores(valores));

//es palindromo
const palabra = "anita lava la tina"

function esPalindromo(texto) {
    const txt = texto.replace(/ /g, '').toLowerCase();
    let index = txt.length-1

    for (let i = 0; i < index; i++) {
        if (txt[i]!==txt[index-i]) {
            return 'no es palindromo'
        }   
    }
    return 'si es palindromo'
}

console.log(esPalindromo(palabra));


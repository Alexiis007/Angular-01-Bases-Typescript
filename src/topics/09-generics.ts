//el tipo de dato any es cualquier cosa, y como puede ser cualquier cosa
//el intelillense no funcionara con este tipo de variables ya que no se sabe que es
//este tipo de datos puede ser desde un string hasta un int
//NO ES RECOMENDABLE USARLO POR LO MISMO

export function whatsMyName(argument:any){
    return argument;
}

const imString = whatsMyName("Hola");
console.log(imString);

const imNumber = whatsMyName(123);
console.log(imNumber);

const imArray = whatsMyName([12,12,12]);
console.log(imArray);

//Como vemos el programa funciona a pesar de que en un mismo tipo de argumento damos
//enteros y cadenas.
//Asi mismo el metodo tambien retorna any que puede ser cualquier cosa


//Con el generic <T> el argumento pasa a tomar el tipo de dato que tome si toma un string se declara string
//si es un bool se declara bool y como lo retornamos el metodo tambien infiere esto por medio de un
//del generic, tipo de dato T y metodo T
//dependiendo de el tipo de dato que toma cambia a tipo de dato XXXX y metodo XXXX
//a diferencia de dejarlo solo o ponerle any ahora si toma un tipo de dato
export function whatsMyName2<T>(argument:T){
    return argument;
}

const imString2 = whatsMyName2("Hola");
console.log(imString2);

const imNumber2 = whatsMyName2(123);
console.log(imNumber2);

const imArray2 = whatsMyName2([12,12,12]);
console.log(imArray2);

//Ahora si queremos que un tipo de dato que le mandemos al metodo sea explicito
//Hacemos lo siguiente:

const imString3 : string = whatsMyName2("Hola2");
console.log(imString3);
//es mas recomendable esta con el uso de generic:
const imString4 = <string>whatsMyName2("Hola2");
console.log(imString4);
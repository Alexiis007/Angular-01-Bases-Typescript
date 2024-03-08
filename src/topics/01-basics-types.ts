//Explicaion de tipo de datos Typescrtipt
//
//Const quiere decir que la variable siempre sera del tipo que se le asigne
//En eset ejemplo la constante name es string y siempre sera string
//  const name : string = "Alexis";
//En este caso de acontinuacion la constante es de tipo Alexis
//  const name2 : "Alexis" = "Alexis";
//En este caso el tipo de vaiable let es variable y puede tomar distintos tipo de dato
//Dependiendo de si se le asigna el tipo
//Ejemplo este caso solo contiene number
//  let hpPoints: number = 10;
//Este de acontinuacion puede con number y string
//  let hpPoints2: number | string = 10;
//O tambien se puede con datos especiales o especificos
//En el caso de acontinuacion solo se aceptan numeros o la palabra Alexis
//  let hpPoints3: number | "Alexis" = 10;
//En dado caso que no se asigne el tipo de dato Typsecript lo adivinara solo
//Ejemplo, la variable skills es un arreglo de tipo string porque asi lo determino Ts
//  let skills = ['A','B','C'];
//En el siguiente Ts Determina que la variable skills es un arreglo de tipo string o booleano
//  let skills = ['A,'B','C',true];
//O ya sea que yo mismo establesca el tipo
//  let skills : string[] = ['A','B','C'];
//------------------------------------------------------------------------------------------

const name : string = "Alexis";
let hpPoints: number | "Full" = "Full";
const isAlive : boolean = true;

export{};

let datos : object = {
  name,
  hpPoints,
  isAlive
};

console.log(datos);
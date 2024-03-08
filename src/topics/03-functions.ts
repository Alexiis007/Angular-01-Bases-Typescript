//Esta funcion es de tipo void osea no regresa nada, ni siquiera undifined.
function addNumbers( a: number, b:number){

    return a + b;
}
//const result : number = addNumbers(1,2);

//console.log(result);

//Funciones Flecha
const addNumbersArrow = (a:number, b:number) =>{
    return a+b;
}

//Si no queremos que Ts defina la el tipo de funcion simplemente la establecemos:
/*
function addNumbers( a: number, b:number) : number{

    return a + b;
}
const result : number = addNumbers(1,2);

console.log(result);

const addNumbersArrow = (a:number, b:number) : number =>{
    return a+b;
}


const addNumbersArrow = (a:number, b:number) : string =>{
    return $`{a+b}`;
}

const addNumbersArrow = (a:number, b:number) : void =>{

}
*/
//Ejemplo de parametros obligatorios, opcionales y obligatorios con valor por defecto
function multiply(firstNumber: number, secondNumber? : number, base : number = 2){
    return firstNumber * base;
}

//console.log(multiply(1));

interface Character{
    name: string,
    hp: number,
    //dentro de esta interface podemos declara una variable de tipo funcion
    showHp: ()=>void
}

const healCharacter=(character : Character, amount : number)=>{
    character.hp += amount;
}

const strider : Character = {
    name: 'Strider',
    hp:50,
    showHp()
    {
        console.log(`Puntos de vida ${this.hp}`);
    }
}
strider.showHp();
healCharacter(strider,30);
strider.showHp();
export{};
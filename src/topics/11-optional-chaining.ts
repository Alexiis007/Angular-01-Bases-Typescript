export interface Passenger{
    name:string,
    children?:string[]
}

const passenger1 : Passenger = {
    name:"Alexis",
}
const passenger2:Passenger={
    name:"Fernando",
    children:["Natalia","Elizabeth"]
}

const printChildren=(passenger:Passenger)=>{
    //Datos opcionales, si el valor es undifined osea no tiene nada regresa 0 mejor
    const howManyChildren = passenger.children?.length || 0;
    console.log(howManyChildren); 
}

// es ! al final de una variable o propiedad le dice estrictamente a Ts
//Que el valor nunca sera null y si llegara a ser null romperias esa promesa
//Dando con sigo un error, asi que tienes que estar muy seguro de esta promesa
//El ! al principio es para la negacion
/*
Ejemplo:
if(!variable){}
con esto decimos si la variable es null entonces

*/

printChildren(passenger1);
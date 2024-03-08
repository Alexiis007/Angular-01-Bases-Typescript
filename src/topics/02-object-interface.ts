/*
En el caso de losobjetos la manera de establecer los objetos cambia, miremos el objeto strider:
    const strider = {
        name: 'Strider',
        hp:10,
        skills:['Bash','Counter']
    }
Podemos ver que las variables estan establecidas por valor y no por el tipo ya que en este caso no
podriamos hacerlo por el tipo como antes lo hicimos con let o const, lo que se usa en este caso 
es el interface el cual nos da la posibilidad de establecer con un tipo a una variable para que esta
no pueda a llegar a tomar otro tipo de variable con el dinamismo de Ts
    interface Character{
        name: string;
        hp:number;
        skills:string[];
        hometown:string;
    }
Ahora con esta base se la asignamos como tipo de variable al objeto antes creado
    const strider : Character = {
        name: 'Strider',
        hp:10,
        skills:['Bash','Counter']
    }
En este caso queda resuelto el tema sobre los datos pero si nos damos cuenta nos marcara un error ya que
asi como el interface le pasa al objeto el establecimiento de las variables tambien le pasa las variables
entonces marcara el mensaje de que hara falta la variable hometown en el objeto y si es que no la queremos
o todavia no la tenemos simplemente le agregamos un signo de interrogacion volciendola una variable
opcional de la interface volviedo la variable string o undifined
  interface Character{
        name: string;
        hp:number;
        skills:string[];
        hometown?:string;
    }
*/
let skills : string[] = ['Bash','Counter','Healing'];

interface Character{
    name: string;
    hp:number;
    skills:string[];
    hometown?:string;
};

const strider : Character = {
    name: 'Strider',
    hp:10,
    skills:['Bash','Counter']
};

//si nos decidimos que queremos agregar ahora si la variable opcional hometown simplemento lo hacemos:
strider.hometown = 'Rivendell;'

console.table(strider);

export{}
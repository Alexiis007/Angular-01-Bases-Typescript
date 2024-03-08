/*
El decorador es una funcion parecida a la herencia,
lo que se hace es definir una funcion en la cual pasaremos como parametro
constructor con tipo de dato generico (T) que como vimos antes es cualquier cosa
pero definida.
Y dentro de la funcion retornamos una clase extendida de esta variable creada,
dentro ponemos lo que queremos que sea pasado a la clase hija por asi llamarlo
*/

function classDecorator<T extends {new (...args:any[]):{}}>(constructor : T)
{
    return class extends constructor{
        newProperty = "New Propery";
        hello="override";
    }
}

//En este apartado le damos a la clase SuperClass todo lo que le esta retornando classDecorator
//Esta funcion es muy parecida a la herencia y funciona de la misma manera
//Pero con algunas pequeñas diferencias.

@classDecorator
export class SuperClass{
    public myProperty : string = "Abc123";
    print(){
        console.log("Hello World");
    }
}


console.log(SuperClass);

const myClass = new SuperClass();

console.log(myClass);

export class Person{
    //la creacion de estas variables (propiedades) no es comun en TS declararlas aqui
    //en cambio en Angular si, y la forma en que se aria si no queremos hacer la convencion en angular
    //seria declarar las variables en el mismo constructor:
    //     constructor(public name:string, private address:string)
    public name : string;
    private address : string;

    constructor(name:string, address:string = "No address")
    {
        this.name=name;
        this.address=address;
    }  

}

// export class Hero extends Person
// {
//     constructor(public alterEgo:string,public age:number,public realName:string)
//     {
//         super(realName, "Nueva York")
//     }
// }

export class Hero
{
    //metodo de instanciamiento en dos lineas
    //public person:Person;

    constructor(public alterEgo:string,public age:number,public realName:string, public person:Person)
    {
        //metodo de instanciamiento 
        //this.person = new Person(realName);

        //este metodo de instanciamiento o el habitual no es recomendable ya que puede haber cambios en la clase Person
        //Lo que haremos para evitar este posible error es que mejor no la instanciemos sino solo
        //recivimos los datos que necesitamos de la clase en un parametro adicional ejemplo arriba
        // public person:Person   
        //Con esto le decimos que reciviremos un dato de tipo Person este dato puede ser a llamada a la clase
        //el ejemplo esta abajo
    }
}

const tony = new Person("Tony","New York");

const ironman = new Hero("Ironman",45,"Tony",tony);

//Nos da error ya que la proiedad address es private y se supone que no deveria de acceder a esta variable
//Ts lo permite pero no es correcto asi que nos avisa
console.log(ironman);
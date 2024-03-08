export interface Product{
    description:string,
    price:number,
};

const Phone:Product = {
    description:"Nokia 01",
    price:150.00,
}
const Tablet:Product = {
    description:"Ipad Air",
    price:250.00,
}

//arreglo con 2 objetos
const shoppingCart =[Phone,Tablet];

//Desetructuracion de arreglo


const tax = 0.15;

interface TaxtCalculationOptions{
    tax:number,
    products:Product[],
};
//Desestructuracion de datos
// const taxtCalculation=(options:TaxtCalculationOptions): number[] =>{
// const taxtCalculation=({tax, products}:TaxtCalculationOptions): number[] =>{
    export const taxtCalculation=(options:TaxtCalculationOptions): number[] =>{
    //Desestructuracion
    const {tax, products} = options;
      let total = 0;
      //Desestructuracion de price de products
      products.forEach(({price}) => {
        total += price;
      });
      //Se retornan dos elementos de tipo number
       return [total, total * tax];
} 

//Desestructuracion de datos taxTotal y total
const [taxTotal, total] = taxtCalculation({tax:tax, products:shoppingCart});

console.log(`Total ${total}`);
console.log(`Total with tax ${taxTotal}`);

export{};
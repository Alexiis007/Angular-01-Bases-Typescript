import {Product, taxtCalculation} from './06-function-destructuring';

//Las interface se pueden pasar como la base para un object o para un arreglo de objetos
const shoppingCart:Product[]=
[
    {
        description: 'Nokia',
        price:100
    },
    {
        description: 'iPad',
        price:150
    }
]

const [total, taxtTotal] = taxtCalculation({products:shoppingCart, tax:0.15});

console.log(total);

console.log(taxtTotal);
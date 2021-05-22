import express from "express";
import {Products} from './products';

// define express
const app = express();
const port = 3000;

// get Product Function
function getProduct() {
    let product = new Products();

    // get value
    product.Id = 'p1';
    product.Price = 200;
    product.Title = "First Product API";

    // return value
    return product;
}


// use the function

let ptoclient = getProduct();
console.log(ptoclient);

// getting route
app.get('/products', (req, res) => {
    res.send(getProduct());
});


// run express
app.listen(port);
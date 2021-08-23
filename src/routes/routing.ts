import express from "express";
import cart from "./cart-items";
const route = express.Router();

route.get("/cart-items", (req,res) => {
    let maxPrice = req.query.maxPrice;
    let prefix = req.query.prefix;
    let pageSize = req.query.pageSize;
    //let {maxPrice, prefix, pageSize} = req.query;
    let filteredCart = cart;
    if (maxPrice) {
        // res.json(filteredCart.filter(function(item) {
        //     return item.price <= Number(maxPrice); //the Number turns it into a number 
        // }))
        // res.json(filteredCart.filter(item => item.price <=Number(maxPrice)));
        filteredCart = filteredCart.filter(itme => itme.price <=Number(maxPrice));
    }

    if (pageSize) {
        filteredCart = filteredCart.slice(0, Number(pageSize));
       
    }
    if (prefix) {
        filteredCart = filteredCart.filter(item => item.product.startsWith(prefix as string));
    }
    res.status(200);
    res.json(filteredCart);
})

route.get("/cart-items/:id", (req,res) => {
    let id: number = Number(req.params.id);
    let foundItem = cart.find(item => item.id === id);
    
    if(foundItem) {
        res.status(200);
        res.json(foundItem);
    } else {
        res.status(404);
        res.json(`ID ${id} Not Found`);
    }
    res.json()
})

route.post("/cart-items", (req, res) => {
    
})




export default route;
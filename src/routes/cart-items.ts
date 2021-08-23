interface CartItem {
    id: number;
    product: string;
    price: number;
    quantity: number;
}

let cart: CartItem[] = [
   {
    id: 1,
    product: "iPhone",
    price: 1000,
    quantity: 1
   },
   {
    id: 5,
    product: "Apple Watch",
    price: 400,
    quantity: 1
   },
   {
    id: 2,
    product: "iPad",
    price: 1500,
    quantity: 1
   },
   {
    id: 3,
    product: "MacBook Pro",
    price: 5000,
    quantity: 2
   },
   {
    id: 1,
    product: "iPod",
    price: 600,
    quantity: 3
   },
]

export default cart;
export {CartItem};

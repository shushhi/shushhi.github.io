let shoppingCart = 
[
    { name: "T-shirt", price: 20 },
    { name: "Jeans", price: 50 },
    { name: "Sneakers", price: 80 },
    { name: "Backpack", price: 30 },
];
let total = 0;
let discountedPrice = 0;
for (let i = 0; i < 4; i++) {
    total = total + shoppingCart[i].price;
}
    (total > 100) 
        discountedPrice = total - 0.1 * total;
    
    console.log("total is", total);
    console.log("discounted price", discountedPrice);
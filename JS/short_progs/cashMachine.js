/*
Exercise: build a cash register machine
- machine object contains default items in array 'fopSale'
- default items are added to 'cart' array
- total price of items in cart is calculated
*/

const Machine = {
    forSale: [
    {name: "phone", price: 300},
    {name: "tv", price: 400},
    {name: "ps", price: 500},
    ],
    cart: [],
    addItem: function(item) {
        let foundItem = this.forSale.find(function(x) {
            return x.name === item;
        });
        if (foundItem) {
            console.log(`Item "${item}" was added.`);
            this.cart.push(foundItem);
        }
        else
            console.log("we do not have that item.");
    },
    totPrice: function() {
        let sum = 0;
        for(let i = 0; i < this.cart.length; i++) {
            sum += this.cart[i].price;
        }
        console.log(sum);
    },
};

//add items to cart
Machine.addItem("tv");
Machine.addItem("ps");

//print total price of items in cart
Machine.totPrice();
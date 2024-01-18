// OBJECTS
// key:value format:
let Book = {
    author: "Bob",
    title: "theBook",
    printInfo: function () {
        console.log(`author is ${this.author}`);
        console.log(`title is ${this.title}`);
    },
};
Book.printInfo();						// > author is Bob\n > title is theBook

// Object keys can be accessed/changed with '.' and '[]':
Book.author = "Frank";
Book["title"] = "laLibre";
Book.printInfo();						// > author is Frank\n > title is laLibre

// Add/Delete keyvalue pairs with object:
let Car = {
    brand: "Toyota",
};
Car.submodel = "Yaris";
Car["value"] = 1000;
console.log(Car);						// > {brand: 'Toyota', submodel: 'Yaris', value: 1000}
delete Car.value;
console.log(Car);						// > {brand: 'Toyota', submodel: 'Yaris'}

// To check if a property exists in the object:
if ("submodel" in Car)
    console.log("contains submodel");
else
    console.log("does not contain submodel");		// > contains submodel




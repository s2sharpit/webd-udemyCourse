const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/fruitsDB');

const fruitSchema = new mongoose.Schema ({
    name: {
        type: String,
        required: [true, "Please check your data entry, no name specified!"]
    },
    rating: {
        type: Number,
        min: 1, max: 10
    },
    review: String
});

const Fruit = mongoose.model("Fruit", fruitSchema);

// const fruit = new Fruit ({
//     name:"Apple",
//     rating: 34,
//     review: "Pretty solid as a fruit"
// });

const fruit = new Fruit ({
    rating: 10,
    review: "Peaches are so yummy!"
});

// fruit.save();

const peopleSchema = new mongoose.Schema ({
    name: String,
    age: Number,
    favouriteFruit: fruitSchema
});

const Person = mongoose.model("Person", peopleSchema);

const mango = new Fruit ({
    name: "Mango",
    rating: 10,
    review: "Fantastic Fruit."
});

mango.save();

Person.updateOne({name: "John"}, {favouriteFruit: mango}, (err) => {
    console.log((err) ? err : "Successfully updated the document.");
});

// const person = new Person({
//     name: "Amy",
//     age: 12,
//     favouriteFruit: pineapple
// })

// const person = new Person ({
//     name: "John",
//     age: 37
// });

// person.save();

// const kiwi = new Fruit({
//     name: "Kiwi",
//     rating: 10,
//     review: "The best fruit!"
// });
// const orange = new Fruit({
//     name: "Orange",
//     rating: 4,
//     review: "Too sour for me"
// });
// const banana = new Fruit({
//     name: "Banana",
//     rating: 3,
//     review: "Weired texture"
// });

// Fruit.insertMany([kiwi, orange, banana], (err) =>
//     console.log((err) ? err : "Successfully saved all the fruits to fruitsDB")
// );

Fruit.find((err, fruits) => {
    if (err) {
        console.log(err);
    } else {

        mongoose.connection.close();

        fruits.forEach((fruit) => {
            console.log(fruit.name);
        });
    }
});

// Fruit.updateOne({_id: "6317a0e3e46a9c7283c1617c"}, {name: "Peach"}, (err) => {
//     console.log((err) ? err : "Successfully updated the document.");
// })

// Fruit.deleteOne({name: "Peach"}, (err) => {
//     console.log((err) ? err : "Successfully deleted the document.");
// });

// Person.deleteMany({name: "John"}, (err) => {
//     console.log((err) ? err : "Successfully deleted all the documents.");
// });
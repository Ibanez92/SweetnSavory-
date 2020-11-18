const Product = require('../models/product');
const mongoose = require('mongoose');

mongoose.connect(
    process.env.MONGODB_URI ||
    'mongodb://localhost:27017/cupcakes'
    );

var products = [
    new Product({
    imagePath: 'https://www.littlesugarshop.com/s/cc_images/teaserbox_4219841170.JPG?t=1476308349',
    title: 'Mangolassi',
    descriiption: 'A tender and moist Mango Lassi inspired cupcake based off of a traditional Indian style milkshake',
    price: 2
}),
    new Product({
    imagePath: 'https://www.littlesugarshop.com/s/cc_images/teaserbox_4219841170.JPG?t=1476308349',
    title: 'Rose',
    descriiption: 'Cuppcakes flavored with an exotic rose syrup infused in milk ',
    price: 2
}),
    new Product({
    imagePath: 'https://www.littlesugarshop.com/s/cc_images/teaserbox_4219841170.JPG?t=1476308349',
    title: 'Shrikand',
    descriiption: 'The rich and delicious flavors of an Indian desert made from yogurt tunred into a cupcake',
    price: 2
})
];

const done = 0;
for (let i = 0; i < products.length; i++) {
    products[i].save(function(err, result) {
        done++;
        if (done === products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}
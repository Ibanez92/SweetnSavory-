// const Product = require('../models');
const mongoose = require('mongoose');
const db = require('../models');

mongoose.connect(
    process.env.MONGODB_URI ||
    'mongodb://localhost:27017/cupcakes'
    );

const productSeed = [
{
    imagePath: 'https://www.littlesugarshop.com/s/cc_images/teaserbox_4219841170.JPG?t=1476308349',
    title: 'Mangolassi',
    description: 'A tender and moist Mango Lassi inspired cupcake based off of a traditional Indian style milkshake',
    price: 2
},
{
    imagePath: 'https://www.littlesugarshop.com/s/cc_images/teaserbox_4219841170.JPG?t=1476308349',
    title: 'Rose',
    description: 'Cuppcakes flavored with an exotic rose syrup infused in milk ',
    price: 2
},
{
    imagePath: 'https://www.littlesugarshop.com/s/cc_images/teaserbox_4219841170.JPG?t=1476308349',
    title: 'Shrikand',
    description: 'The rich and delicious flavors of an Indian desert made from yogurt tunred into a cupcake',
    price: 2
}
]

// const done = 0;
// for (let i = 0; i < products.length; i++) {
//     products[i].save(function(err, result) {
//         done++;
//         if (done === products.length) {
//             exit();
//         }
//     });
// }

// function exit() {
//     mongoose.disconnect();
// }

db.Product.remove({}) 

.then(() => db.Product.collection.insertMany(productSeed))
.then(data => {
    console.log(data.result.n + 'records inserted')
    process.exit(0);
})
.catch(err => {
    console.log(err)
    process.exit(1);
})
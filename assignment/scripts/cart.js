console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem(item) {
    basket.push(item);
    return true;
};
console.log(addItem('oranges'));
console.log(addItem('cat food'));
console.log(addItem('catnip'));
console.log(addItem('scratching post'));
console.log(addItem('goldfish (the animal)'));
console.log(addItem('treats'));
console.log(addItem('turtles'));
console.log(addItem('isopods'));

function listItems(array){
    for (item of array) {
        console.log(item);
    }
}
listItems(basket);

function empty(array) {
    array = [];
    console.log(array)
}
empty(basket);
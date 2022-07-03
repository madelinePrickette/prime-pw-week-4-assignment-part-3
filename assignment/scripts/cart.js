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

console.log(`My current basket contains ${basket}`);
console.log('I am now adding grapes', addItem('grapes'));
console.log(`Now my basket is: ${basket}`);

const maxItems = 5;

function isFull(array) {
    if (array.length < maxItems) {
        return false
    } else {
        return true
    }
}

console.log('Is my basket full?', isFull(basket));
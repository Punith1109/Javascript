(function() {
    var x = 10;
    console.log(x); 
})();
console.log(x); 


/////2
const numbers = [1, 2, 3, 4, 5];

const squared = numbers.map(function(num) {
    return num * num;
});
console.log(squared); 

////3
function greet(name, greetingFunction) {
    console.log(greetingFunction(name));
}

function sayHello(name) {
    return `Hello, ${name}!`;
}

function sayGoodbye(name) {
    return `Goodbye, ${name}!`;
}

greet("John", sayHello); 
greet("Jane", sayGoodbye); 


/////4
function multiplier(factor) {
    return function(x) {
        return x * factor;
    }
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); 
console.log(triple(5)); 

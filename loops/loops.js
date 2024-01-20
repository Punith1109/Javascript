/////--For loop
function Multiples(number, tableSize) {

    for (let i = 1; i <= tableSize; i++) {
        let result = number * i;

        console.log(`${number} * ${i} = ${result}${highlight}`);
    }
}
const baseNumber = 7;
const sizeOfTable = 10;
Multiples(baseNumber, sizeOfTable);


////whileloop

while(k>0){
    console.log(k);
    k-=1;
}

// ///iterating through object
let person={
    name:"qwerty",
    age:30,
    job:"Web 3.0 developer"
};
for(let key in person){
    console.log(`${key}-> ${person[key]}`);
}

///ForEach
const d=[];
const num=[1,2,3,4,5]

num.forEach(function(n){
    d.push(n*2);
})
console.log(d)
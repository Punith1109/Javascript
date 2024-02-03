let myset=new Set();
myset.add(1);
myset.add("punith")
myset.add({
    name:"Punith",
    age:21
})

console.log(myset.size); 

console.log(myset.has("Punith"))

myset.delete(1)


console.log(myset.size); 
/////////////////////
const set1 = new Set([1, 2, 3, 4]);
const set2 = new Set([3, 4, 5, 6]);

const unionSet = new Set([...set1, ...set2]);
console.log([unionSet]); 

const intersectionSet = new Set([...set1].filter(value => set2.has(value)));
console.log([...intersectionSet]); 


const differenceSet = new Set([...set1].filter(value => !set2.has(value)));
console.log([...differenceSet]); 

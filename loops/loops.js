/////--For loop
let k=0;
for(let i=0;i<10;i++){
k+=i
}

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
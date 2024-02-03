const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);
console.log(doubled); 


/////
const words = ['hello', 'world'];

const w=words.map((word)=>{
    word=word.toLocaleLowerCase();
})
console.log(w)
////
const users=[
    {
        name:'Punith',
        age:21
    },{
        name:'HAri',
        age20
    },
    {
        name:"Sai",
        age:22,
        Country:"India"
    }
]
const ppl=users.map((user)=>user.name)

console.log(ppl)
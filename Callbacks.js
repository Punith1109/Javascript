////1.
setTimeout(function(){
    console.log("Hii")
},4000);

//2.

setInterval(function(){
    console.log("Time limt")
},2000)

///3
function greet(name,bye){
    console.log("Hello "+name)
    bye();
}

function bye(){
    console.log("Goodbye")
}
greet("Hari",bye)

////4
function cube(n,square){
    return n*square(n)
}

function square(n){
    return n*n
}

console.log(cube(3,square))


/////////////Promises

const fetchh=()=>{
    return new Promise((resolve)=>{
        setTimeout(()=>{
            var data="Hii this is promise"
            resolve(data)
        },2000);
    })
}

fetchh().then((result)=>{
    console.log(result);
})
.catch((error)=>{
    console.error(error);
})
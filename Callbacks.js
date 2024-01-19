// ////1.
// setTimeout(function(){
//     console.log("Hii")
// },4000);

// //2.

// setInterval(function(){
//     console.log("Time limt")
// },2000)

// ///3
// function greet(name,bye){
//     console.log("Hello "+name)
//     bye();
// }

// function bye(){
//     console.log("Goodbye")
// }
// greet("Hari",bye)

// ////4
// function cube(n,square){
//     return n*square(n)
// }

// function square(n){
//     return n*n
// }

// console.log(cube(3,square))


// /////////////Promises

// const fetchh=()=>{
//     return new Promise((resolve)=>{
//         setTimeout(()=>{
//             var data="Hii this is promise"
//             resolve(data)
//         },2000);
//     })
// }

// fetchh().then((result)=>{
//     console.log(result);
// })
// .catch((error)=>{
//     console.error(error);
// })
///////promises

function fetchdata() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            const fd = "Some data from fetchdata Function";
            resolve(fd);
        }, 1000);
    });
}

function proceessdata(fd) {
    return new Promise(function (resolve, reject) {
        // Correct the typo: toUppercase should be toUpperCase
        const pd = fd.toUpperCase();
        resolve(pd);
    });
}

fetchdata()
    .then(fd => {
        console.log("Data : ", fd);
        return proceessdata(fd);
    })
    .then(pd => {
        console.log("Data Processed: ", pd);
    })
    .catch(error => {
        // This block runs if any of the Promises in the chain is rejected
        console.error("Error:", error);
    });

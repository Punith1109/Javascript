function outsider(){

     var out="hari"

function insideer(){
    console.log(out)
}
insideer()
    }

    outsider()
//////////////

function Cal(x){

    function Q(y){
        console.log(x**y);
    }
    Q(2);
}
Cal(20);
/////////////////////

// function createClosureArray() {
//     const closures = [];
  
//     for (let i = 0; i < 5; i++) {
//       (function(j) {
//         closures.push(function() {
//           console.log(j);
//         });
//       })(i);
//     }
  
//     return closures;
//   }
  
//   const closureArray = createClosureArray();
  
//   closureArray[0](); 
//   closureArray[1](); 
  


function createS(){
    const clou=[]

    for(let i=0;i<5;i++){
        (function(j){
            clou.push(j)
        })(i);
    }
    return clou;
}  
console.log(createS())

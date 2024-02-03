// //---------------------------->1)

// const numbers=[1,2,3,4,5];
// numbers.forEach((num)=>{
//     console.log(num*num,end=" ") 
// })



// const countries=['Usa','Canada','France']
// countries.forEach((country)=>{
//     console.log(country)
// })

// const students = [
//     { name: 'Alice', grade: 85 },
//     { name: 'Bob', grade: 92 },
//     { name: 'Charlie', grade: 78 },
//   ];


//   students.forEach((student)=>{
// console.log(`This is ${student.name}, and My grade is${student.grade}`)
//   })

// let k=[1,2,3,4,55]
// k.forEach((num,index,arr)=>{
//     arr[index]=num*2;
// })
// console.log(k)


// //------------------------>2)

// const numbers2=[1,2,3,4,5]
// const d = numbers.map((num) => num * 2);
// console.log(d)



// const members=  [{ name: 'Alice', grade: 85 },
// { name: 'Bob', grade: 92 },
// { name: 'Charlie', grade: 78 },
// ];

// const a=members.map((mem)=>mem.grade)

// console.log(a)

// const words = ['apple', 'banana', 'cherry'];
// let w=words.map((word)=>word.toUpperCase())
// console.log(w);

// const fruits = ['apple', 'orange', 'banana'];

// const i=fruits.map((fruit,index)=>index+'.'+fruit);
// console.log(i)

//------------------------->3)
// const number5s=[1,2,3,4,5,67,7,89,12,10]

// const en=number5s.filter((num)=>num%2===0)
// console.log(en)
// ///
// const students = [
//     { name: 'Alice', grade: 85 },
//     { name: 'Bob', grade: 92 },
//     { name: 'Charlie', grade: 78 },
//   ];

//   let q=students.filter((student)=>student.name=="Alice")

//   console.log(q)

//   let a=students.filter((student)=>student.grade>=90)

//   console.log(a)
//   ////
//   const words = ['apple', 'banana', 'kiwi', 'orange', 'grape'];
//   const w=words.filter((word)=>word.length>4)
//   console.log(w)

//   const namewitha=words.filter((word)=>word.includes('a'));
//   console.log(namewitha)

  ///---------------->4

//   const numbers=[1,2,3,4,5]
//   const sum=numbers.reduce((a,b)=>a+b,0);
//   console.log(sum)

//   ////
//   const arrays=[[1,2],[3,4],[5,6]]

//   const mergedarr=arrays.reduce((last,cur)=>last.concat(cur),[])
//   console.log(mergedarr)

//   /////

// const colors=['red', 'blue', 'green', 'yellow'];
// const curcolors=colors.slice(1,3);
// console.log(curcolors)

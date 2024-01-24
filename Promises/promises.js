const stringPromise = new Promise((resolve, reject) => {
    const myString = 'Hello, this is a resolved string!';
    resolve(myString);
  });

  stringPromise
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
  

//////2/////

const myPromise = new Promise((resolve, reject) => {
    const success = true;
  
    if (success) {
      resolve('Operation succeeded!');
    } else {
      reject('Operation failed!');
    }
  });
  
  myPromise
    .then((result) => {
      console.log(result);
    })
    .catch((error) => {
      console.error(error);
    });
  
////Rejection of promise
    const rejectedPromise = new Promise((resolve, reject) => {

        const success = false;
      
        if (success) {
          resolve('Operation succeeded!');
        } else {
          reject('Operation failed!');
        }
      });
      rejectedPromise
        .then((result) => {
          console.log(result);
        })
        .catch((error) => {
          console.error(error);
        });
      
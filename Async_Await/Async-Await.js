function fetchData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Data fetched successfully!');
      }, 2000);
    });
  }
  

/////2)
async function fetchDataAsync() {
    try {
      console.log('Fetching data...');
      let result = await fetchData();
      console.log(result);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  
  fetchDataAsync();
/////3)  
function readFileAsync() {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve('File content: Hello, Async/Await!');
      }, 2000); 
    });
  }
  
  async function readAndPrintFile() {
    try {
      console.log('Start reading file...');
      const fileContent = await readFileAsync();
      console.log(fileContent);
      
      console.log('File reading complete!');
    } catch (error) {
      console.error('Error reading file:', error);
    }
  }
  readAndPrintFile();
  
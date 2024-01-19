function sample() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve("Data has been fetched!");
      }, 2000);
    });
  }
  

  async function sample() {
    console.log("Fetching data...");
    
    try {
      const result = await sample();
      console.log(result);
      console.log("Data successfully fetched!");
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
  

  fetchDataAsync();
  
/**
 * Asynchronous function that waits for a specified duration before resolving.
 * @param {number} ms - The duration to sleep in milliseconds (default is 5000 ms).
 * @returns {Promise<void>} A Promise that resolves after the specified duration.
 */
async function sleep(ms = 5000): Promise<void> {
    // Create a Promise that resolves after the specified duration (ms).
    return await new Promise((resolve) => setTimeout(resolve, ms));
  }
  
  // Example usage:
  // async function exampleUsage() {
  //   console.log("Start sleeping...");
  //   await sleep(3000); // Sleep for 3000 milliseconds (3 seconds).
  //   console.log("Awake now!");
  // }
  // exampleUsage();
  
  export {sleep};
  
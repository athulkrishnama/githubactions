console.log("running application");
const interval = setInterval(()=>console.log("Application is running"), 1000)
setTimeout(()=>{clearInterval(interval)}, 5000)
// sample change
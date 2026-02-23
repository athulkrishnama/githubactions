console.log("running application");
setInterval(()=>console.log("Application is running"), 1000)
setTimeout(()=>{throw new Error("completed")}, 5000)
// sample change
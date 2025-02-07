// TO ACTIVATE SERVER ON PORT 3000
const {server} = require("./www/server.js");

(()=>{
    server.listen(3000, ()=>{
        console.log("server running on http://localhost:3000");
    })
})()
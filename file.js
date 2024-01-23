const fs = require("fs");

fs.writeFile("./test.txt", "Hello Harshil", () =>{
    console.log("File Created");
});
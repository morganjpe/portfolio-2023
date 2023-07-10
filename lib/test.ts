const fs = require("fs");

const result = fs.readdirSync("../client/dist");

console.log(result);

var fs = require("fs");
var content = fs.readFileSync("twitt3rhai.json");

var jsonContent = JSON.parse(content);

for (var key in jsonContent) {
  var obj = jsonContent[key];
  for (var prop in obj) {
    console.log(obj[prop].text);
  }
}

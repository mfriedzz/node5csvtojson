// CSV to JSON
	var fs = require('fs');

	var filetoconvert = fs.readFile("test.txt");
	//var jsonfile = fs.writeFile("test_copy.txt")
	var jsonfile = "jsonresult.txt";
	//var csv is the CSV file with headers
var csvtojson = function csvJSON(csv) {
 
  var lines = csv.split("\n");
 
  var result = [];
 
  var headers=lines[0].split(",");
 
  for(var i=1;i<lines.length;i++){
 
	  var obj = {};
	  var currentline=lines[i].split(",");
 
	  for(var j=0;j<headers.length;j++){
		  obj[headers[j]] = currentline[j];
	  }
 
	  result.push(obj);
 
  }
  
  	//return result;
  	//console.log("JSON", JSON.stringify(result));
  return JSON.stringify(result); //JSON
};

fs.readFile('test.txt', 'utf-8', function(err, contents){
		if (err) {
			throw err;
		}

  		
			var temp = csvtojson(contents);
			console.log("temp ", temp);
			//jsonfile.pipe(jsonfile);
			fs.writeFile(jsonfile, temp);
			return temp;
	})

	//console.log("csvtojson", csvtojson);
	//var jsonresult = JSON.stringify(csvtojson);
	//console.log("JSON", csvtojson);
	//fs.writeFile(jsonfile, csvtojson);


module.exports = {
	csvjson: csvtojson
};
var fs = require('fs'), 
	request = require('request'), 
	url = process.argv[2], 
	dest = process.argv[3]; 

request(url).pipe(fs.createWriteStream(dest)); 

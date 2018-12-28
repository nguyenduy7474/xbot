var fs = require('fs');
var arr = JSON.parse(fs.readFileSync('standard.json', 'utf8'));

function Criteria(str) {
	let result = []
	arr.forEach((data) => {
		data.criteria.forEach((obj) => {
			if(obj.name.indexOf(str) != -1){
				result.push(data)
			}
		})
	})

	return result
}

console.log(Criteria("chiến lược"))
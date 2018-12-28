var fs = require('fs');
var arr = JSON.parse(fs.readFileSync('standard.json', 'utf8'));

function FlattenIndices(str) {
	let result = []
	arr.forEach((data) => {
		data.criteria.forEach((obj) => {
			result = result.concat(obj.indices)
		})
	})

	return result
}

//console.log(FlattenIndices())

function GroupIndices(arr){//  [[level1],[level2],[level3],...]
	let result = []
	let arrlevel = []
	for(var i=0; i<arr.length; i++){
		let index = arr[i].level - 1
		if(arrlevel.indexOf(index) == -1){
			result[index] = []
			arrlevel.push((index))
		}
		result[index].push(arr[i])
	}
	return result
}

console.log(GroupIndices(FlattenIndices()))
function insertionSort(array) {
for(let i = 1; i < array.length; i++){
	let latest = array[i]
	let old = i-1
	while(old > -1 && latest < array[old]){
		array[old+1] = array[old]
		old -= 1;
}
array[old+1] = latest
}
	return array;
}

module.exports = insertionSort;
oiu       
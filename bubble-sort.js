function bubbleSort(array) {
	/*
    ** Compare the first two elements and swap if necessary.
    ** Then compare the second and third elements and swap if
    ** necessary. Continue until you've checked and swapped (if needed)
    ** the last and second last elements.
    
    ** Repeat the above process until you get through an entire
    ** cycle without needing any swaps
    */

let changed = false;
for(let x = 0; x < array.length; x++){
    changed = false;
//if nothing changes ends loop
    for(let i = 0; i < array.length; i++){
        if (array [i] > array [i + 1]){
            let temp = array [i] 
            array [i] = array [i + 1]
            array[i + 1] = temp
            changed = true;
        }
    }
    if(!changed){
        return array;
    }
}
	return array;
}

module.exports = bubbleSort;

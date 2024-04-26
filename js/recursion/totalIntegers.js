const multiArr = [[[5], 3], 0, 2, ['foo'], [], [4, [5, [6, 200]]]];

function totalIntegers2(arr) {
    if (!Array.isArray(arr) || arr.length === 0) {
        return 0;
    }

    const copy = arr.slice();
    let total = 0;

    for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
            total += totalIntegers(arr[i]);
        } else if (Number.isInteger(arr[i])) {
            total++;
        }

        copy.shift();
    }

    return total;
}

// without for loop
function totalIntegers(array){
	if(array.length === 0) return 0;

	let total = 0;
	let first = array.shift();

	if (Array.isArray(first)){
		total += totalIntegers(first); 
	} else if (Number.isInteger(first)) {
		total += 1;
	}

	return total + totalIntegers(array);
}

console.log(totalIntegers2(multiArr));
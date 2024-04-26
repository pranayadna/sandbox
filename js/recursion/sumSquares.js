const squaresArr = [10,[[10],10],[10]];

function sumSquares(arr) {
    if (arr.length === 0) {
        return 0;
    }

    const first = arr.shift();
    let total = 0;

    if (Array.isArray(first)) {
        total += sumSquares(first);
    } else {
        total = first ** 2;
    }

    return total + sumSquares(arr);
}

// with for loop
function sumSquares2(array){
	if(array.length === 0) return 0;
	let total = 0;

	for(let i = 0; i < array.length; i++){
		if(Array.isArray(array[i])){
			total += SumSquares(array[i]);
		} else {
			total += array[i] * array[i];
		}
		
	}
	return total;
}


console.log(sumSquares(squaresArr));
// console.log(Array.isArray(5));

// const nestedObject = {
//     moreStuff: {
//       magicNumber: 44,
//       something: 'foo2'
//     }
// }  

// console.log(Object.values(nestedObject.moreStuff.magicNumber));

//   //     data: {
//   //         info: {
//   //             stuff: {
//   //                 thing: {
//   //                 }
//   //             }
//   //         }
//   //     }
//   // }
  
//   function contains(object, searchValue) {
//     if (typeof object !== "object" || object === null) {
//         console.log(object);
//       return object === searchValue;
//     }
  
//     for (const value of Object.values(object)) {
//         console.log(value);
//       if (contains(value, searchValue)) {
//         return true;
//       }
//     }
//     return false;
//   }
  
//   console.log(contains(nestedObject, 44));

// const allAreLessThanSeven = all([1,[2,3],6], function(num){
// 	return num < 7;
// });

// console.log(allAreLessThanSeven); // false

// function all(array, callback){
// 	const copy = array.slice(); // shallow copies array

//     console.log(copy);

// 	if(copy.length === 0) return true;

// 	if(callback(copy[0])){
// 		copy.shift(); // remove first element from array
// 		return all(copy, callback);
// 	} else {
// 		return false;
// 	}
// }

console.log(3 ** 2);
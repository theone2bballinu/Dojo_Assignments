// Go through each value in the array x, where x = [3,5,"Dojo", "rocks", "Michael", "Sensei"]. Log each value.
// Add a new value (100) in the array x using a push method.
// Add a new array ["hello", "world", "JavaScript is Fun"] to variable x. Log x in the console and analyze how x looks now.

// var x = [3,5,"Dojo", "rocks", "Michael", "Sensei", newarray = ["hello", "world", "JavaScript is Fun"]];
// // x.push(100);
// 	// for(var i = 0; i < x.length; i++){
// 	// }
//
// console.log(x);

// Create a simple for loop that sums all the numbers between 1 to 500. Have console log the final sum.

// var sum = 0;
// for(var i = 2; i <= 499; i++){
// 	sum += i;
// }
// console.log(sum);

// Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the minimum value, and then print it

// var array = [1, 5, 90, 25, -3, 0];
// var min = 0;
// 	for(var i = 0; i < array.length; i++){
// 		if(min > array[i]){
// 			min = min + array[i];
// 		}
// }
// 		console.log(min);

// Write a loop that will go through the array [1, 5, 90, 25, -3, 0], find the average of all of the values, and then print it
// var array = [1, 5, 90, 25, -3, 0];
// var sum = 0;
// 	for(var i = 0; i < array.length; i++){
// 		sum += array[i];
// 	}
// 		console.log(sum/array.length);
// 
var newNinja = {
	name: 'Jessica',
	profession: 'coder',
	favorite_language: 'JavaScript',
	dojo: 'Dallas'
}
for (var key in newNinja) {
	console.log(key + ": " + newNinja[key]);
}

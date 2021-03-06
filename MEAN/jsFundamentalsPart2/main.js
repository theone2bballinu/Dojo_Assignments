// Problem 1 Create a simple for loop that sums all the integers between x and y (inclusive). Have it console log the final sum.
function forLoop(){
var arr = [1, 5, 90, 25, -3, 0];
var sum = 0;
	for (var i = 0; i < arr.length; i++){
		sum += arr[i];
	}
		console.log(sum);
}
forLoop();

// Write a loop that will go through an array, find the minimum value, and then return it
var arr = [1,5,90,25, -3,0];
function minimum(){
	if(arr){
	var min = arr[0];
		for (var i = 1; i < arr.length; i++){
			if(min < arr[i]);
				min = arr[i];
			}
			return min;
	}
}

console.log(minimum(arr));


function sumXY(x, y) {
    var sum = 0;
    for (var i = x; i < y + 1; i++) {
        sum += i;
    }
    return sum;
}

function findMin(arr) {
    if (arr) {
        var min = arr[0];
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        return min;
    }
}

function findAvg(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
}

// Anonymous functions assigned to variables.

var sumXY = function(x, y) {
    var sum = 0;
    for (var i = x; i < y + 1; i++) {
        sum += i;
    }
    return sum;
};

var findAvg = function(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
};

var findMin = function findMin(arr) {
    if (arr) {
        var min = arr[0];
        for (var i = 1; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i];
            }
        }
        return min;
    }
};

var myObject = {
    sumXY: function(x, y) {
        var sum = 0;
        for (var i = x; i < y + 1; i++) {
            sum += i;
        }
        return sum;
    }, //end sumXY
    findAvg: function(arr) {
        var sum = 0;
        for (var i = 0; i < arr.length; i++) {
            sum += arr[i];
        }
        return sum / arr.length;
    }, //end findAvg
    findMin: function findMin(arr) {
        if (arr) {
            var min = arr[0];
            for (var i = 1; i < arr.length; i++) {
                if (arr[i] < min) {
                    min = arr[i];
                }
            }
            return min;
        }
    }// end find min
}//end object
/*
This is a basic person object, declared as an object literal, it has
  properties: name, distanceTraveled,
  methods: aayName, saySomething, walk, run, crawl
  "DON'T FORGET THE COMMAS AFTER EACH METHOD/PROPERTY"
*/

var person = {
  name : "Charlie",
  distance_traveled : 0,
  say_name : function(){
    console.log(person.name);
  },
  say_something : function(phrase){
    console.log(`${person.name} says: ${phrase}`);
  },
  walk : function(){
    console.log(`${person.name} is walking!`);
    person.distance_traveled += 3;
    return person;
  },
  run : function(){
    console.log(`${person.name} is running!`);
    person.distance_traveled += 10;
    return person;
  },
  crawl : function(){
    console.log(`${person.name} is crawling!`);
    person.distance_traveled += 1;
    return person;
  },
  chewGum:function(){
    console.log("I can walk and chew gum, but I can't chew gum and walk...");
  }
}

person.walk().chewGum();

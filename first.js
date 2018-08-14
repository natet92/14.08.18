/*function isEmail(str) {
	if (str.length > 5 && !parseInt(str[0])) {
		return true;
	} else {
		return false;
	}
}
*/
/*
function isEmail(str) {
	if (str.length > 5 && !parseInt(str[0])) {
		var dogPos = str.indexOf("@");
		if (dogPos > 0) {
			str = str.slice(dogPos + 1);
			if (str.includes("@")) {
				console.log(stl);
				if (!str.includes("@")) {
					console.log(str);
				}
			}

		}
		return falce;
	}
}
*/
/*
function x2(array) {
	for (var i = 0; i < array.length; i++) {
		array[i] *= 2;
	}
}
var a = [1, 2, 3];
console.log(a);
x2(a);
console.log(a);
*/
/*
var arr = [1, 2];
arr.unshift(0);
console.log(arr);

var arr = [1, 2];
arr.shift(0);
console.log(arr);
*/
/*
function push() {
	var a = arguments[0];
	var b = [...a];
	function f() {
		/*console.log(arguments);
		for (var i = 0; i < b.length; i++) {
			b.push(a[i]);
		}
		for (var i = 1; i < arguments.length; i++) {
			b.push(arguments[i]);
		}
		return b;
	}
}
*/
/*
function a() {
	setTimeout(function () {
		var b = prompt("enter number");
		console.log(b);
		if (b !== "stop") {
			a();
		}
	}, 2000);
}
a();
*/
/*
var timerId = aetInterval(function () {
	var b = prompt();
	console.log(b);
	if (b === "stop") {
		clearInterval(timerId);
	}
}, 2000);
*/
/*
var a = [1, 2, 3, 4];
a.splice(2, 1);
console.log(a);
*/
/*
a = [1, 2, 3];
a.forEach(function (element, index, self) {				//or like that 
	console.log("element -> " + element);
	console.log("index -> " + index);
	console.log(self);
	//self[index] = 222; //меняет значение массива.
});
*/
/*																										//boath the same
a = [1, 2, 3];
for (var i = 0; i < a.length; i++); {						//like that 
	var element = a[i];
	a[i] = -2;
}
console.log(a);
*/

a = [1, 2, 3];
a.forEach(function (element, index, self) {				//or like that 
	console.log("element -> " + element);
	console.log("index -> " + index);
	console.log(self);
	//self[index] = 222; //меняет значение массива.
});
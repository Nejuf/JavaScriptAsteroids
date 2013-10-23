var sum = function(){
	var total = 0;
	var args = Array.prototype.slice.call(arguments, 0);
	args.forEach(function(el){
		total += el;
	});
	return total;
}

// console.log(sum(1,2,3,4,5));

Function.prototype.myBind = function(myObj){
	var args = [].slice.call(arguments, 1);
	var fun = this;
	return function(){ fun.apply(myObj, args);};
}

function times(num, fun) {
  for (var i = 0; i < num; i++) {
    fun(); // call is made "function-style"
  }
}

var cat = {
  age: 5,

  age_one_year: function (arg1, arg2) {
    this.age += arg1 + arg2;
		console.log(this.age);
  }
};

// Function argument is different:
// times(10,cat.age_one_year.myBind(cat, 3, 5));

var curriedSum = function(numArgs) {
	var numbers = [];
	var _curriedSum = function(number) {
		numbers.push(number)
		if (numbers.length === numArgs) {
			return sum.apply(null, numbers);
		}
		else {
			return _curriedSum;
		}
	}
	return _curriedSum;
}

// var numSum = curriedSum(4);
// console.log(numSum(5)(30)(20)(1));

Function.prototype.curry = function(numArgs){
	var args = [].slice.call(arguments, 1);
	var that = this;
	if(args.length >= numArgs){
		return this.apply(this, args);
	}
	else{
		var _curried = function(arg) {
			args.push(arg);
			if (args.length === numArgs) {
				var newArgs = [numArgs].concat(args);
				return that.curry.apply(that, newArgs);
			}
			else {
				return _curried;
			}
		}
	}
	return _curried;
}

function sumThree(num1, num2, num3) {
  return num1 + num2 + num3;
}

// sumThree(4, 20, 3); // == 27

// you'll write `Function#curry`!
// var f1 = sumThree.curry(3);
// var f2 = f1(4);
// var f3 = f2(20);
// var result = f3(3); // = 27

// or more briefly:
console.log(sumThree.curry(3)(4)(20)(3)); // == 27

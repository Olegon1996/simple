// function * generatorFunction() { // Line 1
//   console.log('This will be executed first.');
//   yield 'Hello, ';   // Line 2
//   console.log('I will be printed after the pause');
//   yield 'World!';
// }
// const generatorObject = generatorFunction();
// for (const g of generatorObject) {
//   console.log(g)
// }


// var a = 10
//
// function f() {
//   console.log("a", a)
//   var a = 12
// }
//
// console.log(a)
// f()
// console.log(typeof variable);


// function hoist() {
//   a = 20;
//   var b = 100;
// }
// hoist();

// console.log(a);
// console.log(b);

// console.log(hoist); // Вывод: undefined
// var hoist = 'The variable has been hoisted.';
// console.log(hoist); // Вывод: undefined


// function getCircumference(radius) {
//   console.log(circumference)
//   circumference = PI*radius*2;
//   const PI = 22/7;
// }
//
// getCircumference(2)

// expression(); //Вывод: "TypeError: expression is not a function

// var expression = function() {
//   console.log('Will this work?');
// };


// todo: sort words
// const words = ['orange', 'banana', 'melon', 'apple', 'melon', 'banana', 'melon'];
//
// const customSort = (array) => {
//   const object = array.reduce((acc, cur) => {
//     acc[cur] = (acc[cur] || 0) + 1;
//     return acc
//   }, {})
//
//   const arr1 = []
//   let maxValue = 0
//   for (const key in object) {
//     if (object[key] > maxValue) {
//       arr1.unshift(key)
//       maxValue = object[key]
//     } else {
//       arr1.push(key)
//     }
//   }
//   return arr1;
// }
// console.log(customSort(words))

// todo: concat 2 lines
// const shortLine = '1';
// const longLine = '22';
//
// const concatLine = (string1, string2) => {
//   if (string1.length > string2.length) {
//     return string2 + string1 + string2
//   }
//   return string1 + string2 + string1
//
// }
//
// console.log('line', concatLine(longLine, shortLine))
//
//
// console.log('result', 018 - 015)

// todo: karring
// const say = (firstWord) => {
//   return (secondWord) => (firstWord + ' ' + secondWord)
// }
//
// console.log('say', say("Hello")("World"));


// todo: sum 2 array

// const arr1 = [-1, -2, -3];
// const arr2 = [-4, -5, -6];
//
// const func = sumArray = (firsArr, secondArr) => {
//   const concatArr = [...firsArr, ...secondArr]
//   return concatArr.reduce((acc, el) => (acc + el))
// }
// console.log('result: ', func(arr1, arr2))


//
// Object.prototype.getFullName = function () {
//   console.log('fullName is:', this.name + ' ' + this.lastName)
// }
//
// const userOne = new User('Oleh', 'Kutsyk', 'kutsyk1304@gmail.com');
// console.log('userOne', userOne)
//
// userOne.login().updateScore().updateScore().updateScore().logout()

// що виведе консоль
// var x = 10;
// var y = 20;
//
// function foo() {
//   console.log(x, y);
// }
//
// foo();
//
// function bar() {
//   console.log(x, y);
//   var y = 30;
//   foo();
// }
//
// bar();



// створити функцію яка приймає масив чисел і додаю до числа його позицію(вертає новий масив)
// const plusIndex = (list) => list.map((element, index) => element + (index + 1))
// console.log('plusIndex', plusIndex([1, 2, 3, 5, 8]))


// який результат?
// const num = 3;
// const obj = {
//   num: 6,
//   getResult() {
//     return () => console.log('result',this.num)
//   }
// }
//
// obj.getResult()()


// який результат?
// class Animal {}
// class Cat extends Animal {}
//
// const volt = new Cat();
//
// console.log(volt instanceof Animal)
// console.log(volt instanceof Cat)


//написати таку функцію
// say('Hello')('World')('It is me') => Hello World It is me














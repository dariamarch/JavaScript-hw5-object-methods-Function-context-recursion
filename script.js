
// Методы объектов и контекст выполнения функции

// задание №1
//1.	Создайте объект calculator с методами:
//a.	read() запрашивает prompt для двух значений и сохраняет их как свойства объекта x, y
//b.	sum() возвращает сумму этих двух значений
//c.	multi() возвращает произведение этих двух значений
//d.	diff() возвращает разницу
//e.	div() возвращает частное
//calculator.read();
//alert( calculator.sum() );
//alert( calculator.multi() );

"use strict" 

let calculator = {
	read() {
	  this.x = +prompt("Введите число х");
	  this.y = +prompt("Введите число y");
	},
	
	sum() {
	  return this.x + this.y;
	},
  
	multi() {
	  return this.x * this.y;
	},
	  
	diff() {
	  return this.x - this.y;
	},
	
	div() {
	  return this.x / this.y;
	},
};
  
calculator.read();
alert(calculator.sum());
alert(calculator.multi());
alert(calculator.diff());
alert(calculator.div());

  //Задание 2
  //2.Создайте объект coffeeMachine со свойством message: ‘Your coffee is ready!’ и методом start(), при вызове которого – coffeeMachine.start() – 
  //через 3 секунды появляется окно с сообщением, записанным в свойстве объекта message.

let coffeeMachine = {
	message: "Your coffee is ready!",
	start: function() {
  		setTimeout(function() {
	  	return alert(coffeeMachine.message);
		}, 3000);
  	},
}
  
coffeeMachine.start();

//3.Создайте объект counter с методами увеличения, уменьшения значения счетчика и методом возврата текущего значения.
// Используйте концепцию chaining для создания цепочки вызовов.
//var current = counter.inc().inc().dec().inc().dec().getValue();
//alert(current); // 1

let counter = {
	Count: 0,
	inc() {
	  this.Count++;
	  return this;
  	},
	dec() {
	  this.Count--;
	  return this;
	},
	getValue() {
  	  return this.Count;
	}
}
  
let current = counter.inc().inc().dec().inc().dec().getValue();
alert(current); // 1

//Задача 4
//4.Создайте объект с данными: x, y и методами: getSum, getDiff, getMulti, getDiv. Методы объекта ничего не реализуют,
// а только выводят в alert сообщения вида ‘1 + 1 = 2’ или ‘1 / 0 = Infinity’. Для расчетов все методы используют функционал ранее созданного калькулятора.
//alert(me.getSum(1, 1));
//alert(me.getDiv(1, 0));

let calculator = {
  
	sum() {
		return this.x + this.y;
	},
	
	multi() {
		return this.x * this.y;
	},
		
	diff() {
		return this.x - this.y;
	},
	  
	div() {
		return this.x / this.y;
	},
};
  
let me = {
	getSum(x,y) {
	this.x =x;
	this.y =y;
		return (this.x + "+" + this.y + "=" + calculator.sum.call(me));
	},
	
	getMulti(x,y) {
	  this.x =x;
	  this.y =y;
		return (this.x + "*" + this.y + "=" + calculator.multi.call(me));
	},
	
	getDiff(x,y) {
	this.x =x;
	this.y =y;
		return (this.x + "-" + this.y + "=" + calculator.diff.call(me));
	},
	
	getDiv(x,y) {
	this.x =x;
	this.y =y;
		return (this.x + "/" + this.y + "=" + calculator.div.call(me));
	},
};
	
alert(me.getSum(1,2));
alert(me.getMulti(1,2));
alert(me.getDiff(1,2));
alert(me.getDiv(1,2));

	
   
//Задание № 5
//5.	Есть следующий код:
// var country = {
//     name: 'Ukraine',
//     language: 'ukrainian',
//     capital: {
//         name: 'Kyiv',
//         population: 2907817,
//         area: 847.66
//     }
// };
// function format(start, end) {
//     console.log(start + this.name + end);
// }
// Допишите код, чтобы в консоли браузера появились строки, которые написаны в комментариях:
// format.call(/* Ваш код */); // Ukraine
// format.apply(/* Ваш код */); // [Ukraine]
// format.call(/* Ваш код */); // Kyiv
// format.apply(/* Ваш код */); // Kyiv
// format.apply(/* Ваш код */); // undefined

var country = {
    name: 'Ukraine',
    language: 'ukrainian',
    capital: {
        name: 'Kyiv',
        population: 2907817,
        area: 847.66
    }
};
function format(start, end) {
    console.log(start + this.name + end);
}

format.call(country, "", ""); // Ukraine
format.apply(country, ["[", "]"]); // [Ukraine]
format.call(country.capital, "", ""); // Kyiv
format.apply(country.capital,["", ""]); // Kyiv
format.apply(this,[""]); // undefined

//Задание № 6
//6.	Создайте объект user с полем name. Создайте функцию format с параметрами start и end:
// function format(start, end) {
//     console.log(start + this.name + end);
// }
// Привяжите функцию format() к объекту user таким образом, чтобы ее вызов возвращал отформатированное имя пользователя
// userFormat('<<<', '>>>'); // <<<John>>>
// Реализуйте решение текущего задания используя метод bind().

let user = {
	name: "John",
}; 
  
function format(start, end) {
	console.log(start + this.name + end);
}

let userFormat = format.bind(user);
  
userFormat('<<<', '>>>'); // <<<John>>>

//Задание №7
//7.Напишите функцию concat, которая соединяет две строки, разделенные каким-то символом: разделитель и строки передаются в параметрах функции.
// Используя карринг, создайте новую функцию hello, которая которая выводит приветствие тому, кто передан в ее параметре:
//hello('World'); // Hello World
//hello('John'); // Hello John

let concat = function(greeting, symbol, name) {
	return function(name) {
		console.log(greeting + symbol + name);
	};
};

let hello = concat("Hello", " ");

hello('World'); // Hello World
hello('John'); // Hello John
  
//Рекурсия
//Задание1
//1.Напишите функцию, которая возвращает куб переданного числа, аналог Math.pow(x, 3) – a) используя цикл b) используя рекурсию:
//console.log( cube(2) ); // 8

//a):

function cube(x) {
	let result = 1;
	for (let i = 0; i < 3; i++) {
	  result = result * x;
	}
	return result;
}
  
console.log(cube(2)); // 8

  //b):

let n = 3;
function cube(x) {
  if (n == 1) {
    return x;
  } else {
    n = n - 1;
    return x * cube(x);
  }
}
alert(cube(2)); // 8

//Задание №2
//2.Придумайте алгоритм расчета суммы всех фактических параметров функции с использованием только рекурсии:
//console.log( sum(1, 2, 3, 4, 5) ); // 15

let sum = function(...arguments)  {
	if (arguments.length == 1) {
	  return arguments[0];
	} else return arguments[0] + sum(...arguments.slice(1));
}
  
console.log( sum(1, 2, 3, 4, 5) ); // 15
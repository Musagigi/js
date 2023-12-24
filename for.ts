"АННОТАЦИИ ТИПОВ ПЕРЕМЕННЫХ";
let r: boolean = true;
console.log(r);

let t: number[] = [];
t.push(12);
console.log(t);

let t2: Array<string> = [];
t2.push("test");
console.log(t2);

let d: Array<string | number | boolean> = [];

// GENERICS - универсальные типы
// позволяют гибко указывать типы
// type User0<S, N> = {
// name: S;
// age: N;
// };
interface User<S, N> {
	name: S;
	age: N;
}
let user1: User<string, number> = {
	name: "user1",
	age: 25,
};
let user2: User<string, string> = {
	name: "user2",
	age: "22",
};
console.log(user1, user2);

function usInfo<T>(args: T): T {
	return args;
}
console.log(usInfo("testGen"));
("АННОТАЦИИ ТИПОВ ПЕРЕМЕННЫХ");

////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////

("АННОТАЦИИ ТИПОВ ФУНКЦИй");
// проставлять аннотации не обязательно, TS сам определяет их
function greet(person: string, date: Date): string {
	return `Hello ${person}, today is ${date.toDateString()}!`;
}
console.log(greet("Brendan", new Date()));

function sum(num1: number, num2: number): number {
	return num1 + num2;
}
console.log(sum(10, 10));

async function getAsync(): Promise<number> {
	return 22;
}
console.log(getAsync());

//Анонимные функции немного отличаются от объявлений функций. Когда функция появляется в месте, где TypeScript может определить, как она будет вызвана, параметрам этой функции автоматически присваиваются типы.
const names = ["Alice", "Bob", 23, "Eve"];
names.forEach((element) => {
	console.log(element);
});
("АННОТАЦИИ ТИПОВ ФУНКЦИЙ");

////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////

("АННОТАЦИИ ТИПОВ ОБЪЕКТА");
//Типы объектов также могут указывать, что некоторые или все их свойства являются необязательными. Для этого добавьте ? после имени свойства
function printName(obj: { first: string; last?: string }) {
	console.log(obj.first + " " + obj.last);
}
printName({ first: "ivan" });
printName({ first: "ivan", last: "ivanov" });
("АННОТАЦИИ ТИПОВ ОБЪЕКТА");

////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////

("СПОСОБЫ ОБЪЕДИНЕНИЯ ТИПОВ");
//функция работает с двуями типами
function printId(id: number | string) {
	console.log("Your ID is: " + id);

	//Если мы захотим использовать метод для параметра функции. Например, если у вас есть объединение string | number, вы не можете использовать методы, доступные только для string:

	// console.log(id.toUpperCase()); - выдаст ошибку
	// Решить это можно таким путем
	if (typeof id === "string") {
		console.log(id.toUpperCase());
	} else {
		console.log(id);
	}
}
printId(12);
printId("202ds");

function welcomePeople(x: string[] | string) {
	if (Array.isArray(x)) {
		console.log(`Hello, ${x.join(" and ")}`);
	} else {
		console.log(`Welcome ${x}`);
	}
}
welcomePeople(["ivan", "petr", "igor"]);
welcomePeople("test");
("СПОСОБЫ ОБЪЕДИНЕНИЯ ТИПОВ");

////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////

("ПСВЕДОНИМЫ ТИПОВ");
//Мы использовали типы объектов и типы объединений, записывая их непосредственно в аннотациях к типам. Это удобно, но часто возникает желание использовать один и тот же тип более одного раза и ссылаться на него одним именем.

//Псевдоним типа - это именно - имя для любого типа. Синтаксис для псевдонима типа следующий:
type Point = {
	x: number;
	y: number;
	z: number;
};

type ID = number | string; // - можно применять type не только к объекту

function su(pt: Point): number {
	return pt.x + pt.y;
}
console.log(su({ x: 10, y: 20, z: 30 }));
("ПСВЕДОНИМЫ ТИПОВ");

////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////

("ИНТЕРФЕЙСЫ");
interface Pointr {
	x: number;
	y: number;
}

function printCoord(pt: Pointr) {
	console.log("The coordinate's x value is " + pt.x);
	console.log("The coordinate's y value is " + pt.y);
}

printCoord({ x: 100, y: 100 });
("ИНТЕРФЕЙСЫ");

////////////////////////////////////////////
////////////////////////////////////////////
////////////////////////////////////////////

// 객체 생성자 함수
function Item(title, price){
    // this = {};    
    this.title = title;
    this.price = price;
    this.showPrice = function() {
       console.log(`price is ${this.price}`);
   }
   // return this;
}

var i = 0;
for (i = 0; i < 10; i++) {
    console.log("i : " + i);
    if (typeof document != "undefined"){
        document.write("Hello, World!");
        document.write("<br>");
        console.log (typeof document);
    } else {
        console.log("Hello World!");
    }
}

let n = "name";
let a = "age";

const user ={
    [n] : "mike",
    [a] : 30,
};

console.log (typeof(user));

const id = Symbol("identity1");
console.log(typeof id);
const id2 = Symbol("Identity2");

const number1 = 2;
const string2 = "hihi";
console.log(number1+string2);

const user2 = {
    [number1+string2]: "computed prop",
    name : "Jane",
    age : 30,
    id3: "Jane's Id3",
    [id]: "Jane's Id",
};

for (key in user2){
    console.log(`value of "${key}" is ${user2[key]}`);
}

const symbols = Object.getOwnPropertySymbols(user2);
console.log(symbols);

console.log(user2.id3);
console.log(user2[id]);
console.log(user2[number1+string2]);
console.log('Hello world!!!');

// 여러가지 다양한 배열 조작법 및 Array 내장 메소드들 

let arr = ["나는", "철수", "입니다"];
arr.splice(1,1,"대한민국","소방관");
console.log(arr);

let users3 = ["Mike", "Tom", "Jane"];
users3.forEach((element, index, arr) => {
    console.log(`${index}, ${element}, ${arr}`);
});


let arr5 = [1,4,3,6,5,1,2,3];
var result = arr5.indexOf(0);
result = arr5.indexOf(3);
result = arr5.lastIndexOf(3);

result = arr5.find((item)=>{
    return (item % 2 === 0);
});
console.log(result);

result = arr5.filter((item)=>{
    return item % 2 === 0;
});

let userList = [
    {name:"Mike", age:36},
    {name:"Jane", age:19},
    {name:"Tom", age:20},
    {name:"Terrence", age:39},
    {name:"Clare", age:17},
    {name:"Ukon", age:45},
    {name:"Kipffer", age:33},
];

let result2 = userList.filter((item)=>{
    return item.age >= 20;
});
console.log(result2);

let newUserList = userList.map((item, index, array)=>{
    return Object.assign({includesI:item.name.indexOf('i') !== -1,}, item, {
        id : index+1,
        isAdult: item.age>20,
    });
});

console.log(newUserList);

let strings1 = ["곽", "은", "호"];
onestr = strings1.join(" ");

const sentence = "안녕하세요 저는 곽은호예요 ㅎㅎㅎ";
result = sentence.split(" ");

console.log(typeof(result));
console.log(Array.isArray(result));
console.log(typeof sentence);
console.log(typeof newUserList);
console.log(typeof strings1);
console.log(Array.isArray(strings1));

let arr6 = [27,8,5,14,100,140,7];

arr6.sort((one, two)=>{
    return one - two;
});

// 배열 소트 함수 대신 잘 쓰이는 강력한 외부라이브러리 lodash
// lodash의 소트 함수는 stable sort방식 정렬을 수행하고 그 결과배열을 따로 반환함 
//var _ = require('lodash');
//let sortedArr6 = _.sortBy(arr6); 

console.log(arr6);
//console.log(sortedArr6);

result = arr6.reduce((prev,cur)=>{
    return prev + cur;
},0);

console.log(result)

let over20List = newUserList.reduce((prev,cur)=>{
    if (cur.age > 20){
        prev.push(cur);
    }
    return prev;
},[]);

console.log(over20List);

//let sortedNewUserList = _.sortBy(newUserList,(o)=>{return o.name});
//console.log(sortedNewUserList)

// Destructuring Assignment

let users6 = ["mike","Tome", "Jane"];
let [user6_1, user6_2, user6_3] = users6;

let miketom = "Mike-tom";
let [p1, p2, p3="Kim"] = miketom.split("-");
console.log(`${p1}, ${p2}, ${p3}`);

let [user11,,user12]= ["Mike", "Tom", "Jane", "Kim"];
console.log(`${user11}, ${user12}`);

let aaa = 1;
let bbb = 2;
[aaa, bbb] = [bbb, aaa]; // 간편한 스왑
console.log(`${aaa}, ${bbb}`);

let people = {name:"곽용재", age:48};
let {name:peopleName, age: peopleAge, gender="Male"} = people;
console.log(`${peopleName.length} ${peopleAge}, ${gender}`);

// Rest parameters, 
// 나머지 매개변수, 

function showMyName (name){
    console.log (arguments.length);
    console.log (arguments[0]);
    console.log (arguments[1]);
}

showMyName("곽", "은호", "만세");

function showMyName2(...names){
    console.log(names);
}

showMyName2();
showMyName2("곽", "은호");
showMyName2("곽", "은호","만세");

function addAll (...numbers){
    return numbers.reduce((prev, cur)=>{
        prev += cur;
        return prev;
    },0);
}

console.log (addAll(3,4,5,6,7,8,9,10,123,1,5,6,78, 100, 103));
console.log (addAll(1,2,3,4,5,6,7,8,9,10));


function People (name, age, gender,...skills){
    this.name = name;
    this.age = age;
    this.skills = skills;
}

const people1 = new People("Mike", 36,"Male", "C++", "Ruby");
const people2 = new People("Kim", 19, "Female", "Python", "Js", "Hadoop");
const people3 = new People("Jane", 48, "Female","Java", "Spring", "PHP");

console.log(people1);
console.log(people2);
console.log(people3);

// spread syntax 전개 구문
let arr1 = [1,2,3];
let arr2 = [...arr1, 4,5,6];
console.log(arr2);

let person = {name:"Kim"};
let info = {age:48};
let fe = ["JS", "React"];
let lang = ["Korean", "English"];

let person1 = {
    ...person,
    ...info,
    skills : [
        ...fe,
        ...lang,
    ],
};

console.log(person1);

// Closure, Scope, Lexical Env.
var arrr = [];
for(let i = 0; i < 5; i++){
    arrr[i] = function(){
        return i;
    }
}

var list = [];
for(let index in arrr) {
    list.push(arrr[index]());
}
console.log(list);

function outter(arg){    // 이름을 가진 외부 함수
    var title = 'Thank you, ' + arg;  
    return function(){   // 익명 내부 함수. outer()의 함수 유효범위와 자신까지가 클로저이다.        
        console.log(title);    // title의 원래 텍스트에 arg가 붙은 문자열을 출력하는 함수로 만들어짐. 
    }
}
// 외부함수 outer의 호출 후에도 inner는 'Thank you, Kwak!" 문자열을 지님.
const inner = outter(" Kwak!"); 
inner();

/* setTimeout setInterval */

function fnToBeCalledBySetTimeout(name){
    console.log(`1second-out : ${name}`);
}

var num = 0;
function fnToBeCalledBySetInterval(message){
    console.log(`${++num} seconds elapsed: ${message}`);
    if (num > 5)
    {
        console.log("setInterval end");
        clearInterval(tid2);
    }
}

//const tid1 = setTimeout(fnToBeCalledBySetTimeout, 2000, "hehehe");
//// 같은 함수는 두번 불러도 타임아웃 안 걸림
//setTimeout(fnToBeCalledBySetTimeout, 1000, "hihihi");
//clearTimeout(tid1); 
//setTimeout(fnToBeCalledBySetTimeout, 1000, "hahahaha");
//const tid2 = setInterval(fnToBeCalledBySetInterval, 1000, "hohoho");
//var iii =3;


//// call apply, bind
const Mikey = {name:"Mikey"};
const Tomy = {name:"Tomy"};
const Jenny = {name:"Jenny"};

function addProperty(age, job){
    this.age = age;
    this.job = job;
}

addProperty.call(Mikey, 23, "Homeless");
addProperty.apply(Tomy, [22, "Poet"]);
(addProperty.bind(Jenny))(23, "Student");

const numbers = [10, 203, 304, 506, 203, 45,78,9];
let res = Math.min.call(null, ...numbers);
res = Math.max.call(null, ...numbers);
res = Math.max.apply(null, numbers);

// 상속. 프로토타입.
const car = {
    wheels : 4,
    drive (){
        console.log("drive...");
    }
};

const bmw = {
    color: "red",
    navigation: 1,
};

bmw.__proto__ = car;

const x5 = {
    color : "white",
    name: "x5",
};

x5.__proto__ = bmw;

for (let prop in x5){
    if (x5.hasOwnProperty(prop)){
        console.log ("o", prop, x5.__proto__);
    } else{
        console.log("x", prop, x5.__proto__);
    }
}

const Audi = function(color){
    this.color = color;
};

Audi.prototype.wheels = 4;
Audi.prototype.drive = function (){
    console.log("audi drive..");
};

const a4 = new Audi("red");
const a6 = new Audi("blue");



// 클래스 (class)
class UserDeclaredByClass {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showClassMembers(){
        for (let prop in this){
            console.log("obj by class's property:",prop);
        }
    }
}

function UserByConstructorFunction (name, age){
    this.name = name;
    this.age = age;
    this.showClassMembers = function(){
        for (let prop in this){
            console.log("obj by constructor's property:", prop);
        }
    }   
}

const UDBC2 = new UserDeclaredByClass("Jack", 23);
UDBC2.showClassMembers();

const UBCF2 = new UserByConstructorFunction("Mary", 40);
UBCF2.showClassMembers();

//// Promise
//const prm = new Promise( (resolve, reject) => {
//    setTimeout(()=>{
//        if (Math.random() < 0.5){
//            console.log("resolved: under 0.5");
//            resolve("OK"); 
//        }else {
//            console.log("reject: over 0.5");    
//        }
//    }, 2000);
//});
//
//
//prm.then((result)=>{
//    console.log("[resolved]");
//}).catch((result)=>{
//    console.log("[rejected]");
//});

const order1 = (msg) => {
    console.log (msg);
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve("order 1 complete");     
        },500);
    });
};


const order2 = (msg) => {
    console.log (msg);
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve("order 2 complete");     
        },2000);
    });
};


const order3 = (msg) => {
    console.log (msg);
    return new Promise ((resolve, reject)=>{
        setTimeout(()=>{
            resolve("order 3 complete");     
        },3000);
    });
};

// promise chaining
//console.log("order start");
//console.time("sequential");
//order1("order start")
//.then((result)=>order2(result))
//.then((result)=>order3(result))
//.then((result)=>{console.log(result);})
//.catch(console.log)
//.finally(()=>{
//    console.log("order end");
//    console.timeEnd("sequential");
//});

//console.time('parallel');
//console.log("Promise.all test");
//Promise.all([order1("order1"), order2("order2"), order3("order3")])
//.then((result)=>{
//    console.log(result);
//    console.timeEnd('parallel');})
//.catch(result => console.log(result))
//.finally(()=>{console.log("finally end")});
//
//
// async, await
async function orderByAsync(){
//function orderByAsync(){
    await order1();
    await order2();
    const res3 = await order3();
    //res3 = await Promise.race([order1("order1"), order2("order2"), order3("order3")]);
    console.log(res3);
    console.log("finally end in async block");
}

orderByAsync();

const pp = new Promise((res, rej) => {
    res(1);
  })
  
  async function asyncReturn() {
    return pp;
  }
  
  function basicReturn() {
    return Promise.resolve(pp);
  }
  
  console.log(pp === basicReturn()); // true
  console.log(pp === asyncReturn()); // false


// iterable, generator
const iter = "kwak"[Symbol.iterator]();
do{
    var state=iter.next();
    console.log(state);
}while (state.done != true);

iterableGen1 = function* () {
   console.log("yield 1"); 
   yield 1;
   console.log("yield 2"); 
   yield 2;
   console.log("yield 3"); 
   yield 3;
   console.log("yield 4"); 
   yield 4;
}

const iterable1 = iterableGen1();
console.log ('xxx');
//const it2 = iterable1[Symbol.iterator]();
do {
    var st2 = iterable1.next();
    console.log(st2);
} while(st2.done != true);

function* gen1(){
    yield "H";
    yield "E";
    yield "L";
    yield "L";
}

const aaaa = function* gen2(){
    yield "HI, ";
    yield* "HELLO"; 
    yield* iterableGen1();
    yield "!";
}();

//console.log(aaaa);
console.log(...aaaa);

////// end
console.log("really end");
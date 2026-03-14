// let user = new Object();
// console.log(user);

// let user = {
//     name: "Alex",
//     age: 40,

// };
// console.log(user.age);

// user.isAdmin = true;
// // delete user.age;

// console.log(user);

// const user = {
//     name: "John"
// };

// user.name = "Alex";

// console.log(user.name);

// let user = {
//     name: "Alex",
//     age: 40,
// };

// let key = prompt( "Что вы хотите знать о пользователе", "name");
//     alert( user[key]);

// let fruit = prompt("Какой фрукт купить", "apple");

// let bag = {
//     [fruit]: 5
// };

// alert(bag.apple);

// let fruit = prompt("Какой фрукт купить?", "apple");
// let bag = {};

// // имя свойства будет взято из переменной fruit
// bag[fruit] = 5;

// console.log(bag);

// function makeUser(name, age) {
//     return {
//         name,
//         age,
//     };
// }

// let user = makeUser("Alex", 40);
// console.log(user)
// alert(user.name);

// let user = {
//     name: "Alex",
//     age: 40,
// };
// user.admin = false
// alert("age" in user);
// console.log(user);


// let user = {
//     name: "Alex",
//     age: 40,
//     isAdmin: true,
// };

// for (let key in user) {
//     alert(key);
//     alert(user[key]);
// }

// let user = {};

// user.name = "John";

// user.surname = "Smith";

// user.name = "Peter";

// delete user.name;

// let schedule = {};

// function isEmpty(obj) {
//     for (let key in obj) {
//         return false;
//     }
//     return true;
// }

// // alert ( isEmpty(schedule) );

// schedule["8:30"] = "get up";

// console.log( schedule);

// alert ( isEmpty(schedule) );

// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };


// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] === 'number') {
//             obj[key] *= 2
//         }

//     }
// }

// multiplyNumeric(menu);
// console.log(menu);



// let user = {};

// user.name = 'Alex'
// user.surname = 'Kasapov';
// user.name = 'John';
// delete user.name;

// function isEmpty(obj) {
//     for (let key in obj) {
//         return false;
//     }
//     return true;
// }

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

//  let sum = 0;
// for (let key in salaries) {
//     sum += salaries[key];
// }
// console.log(sum);

let menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         if (typeof obj[key] === 'number') {
//             obj[key] *= 2;
//         }
//     }
// }

// multiplyNumeric(menu);
// console.log(menu);

// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         typeof obj[key] === 'number' && (obj[key] *= 2);
//     }
// }


// function multiplyNumeric(obj) {
//     for (let key in obj) {
//         typeof obj[key] === 'number' ? obj[key] *= 2 : obj[key];
//     }
// }

// multiplyNumeric(menu);
// console.log(menu);


const array = [1, 2, 3, 4, 5];

// const reversedArray = _.reverse(array);

const array2 = structuredClone(array)

console.log(array === array2);
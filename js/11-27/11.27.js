// let number = 1;
// console.log(number % 2);
// if (number % 2 === 0 && number > 10) {
//   console.log("tegsh 10-s ih ");
// } else if (number % 2 === 0 && number < 10) {
//   console.log("tegsh 10-s baga ");
// } else if (number % 2 !== 0 && number > 10) {
//   console.log("sondgoi 10-s ih ");
// } else if (number % 2 !== 0 && number < 10) {
//   console.log("sondgoi 10-s baga ");
// }

// let y = 89;
// if (y >= 90 && y < 101) {
//   console.log("A");
// } else if (y >= 80 && y < 89.9) {
//   console.log("B");
// } else if (y >= 70 && y < 79.9) {
//   console.log("C");
// } else if (y >= 60 && y < 69.9) {
//   console.log("D");
// } else if (y >= 0 && y < 59.9) {
//   console.log("F");
// }

// let p = 9;
// if (p === 1) {
//   console.log("Monday");
// } else if (p === 2) {
//   console.log("Tuesday");
// } else if (p === 3) {
//   console.log("Wednesday");
// } else if (p === 4) {
//   console.log("Thursday");
// } else if (p === 5) {
//   console.log("Friday");
// } else if (p === 6) {
//   console.log("Saturday");
// } else if (p === 7) {
//   console.log("Sunday");
// } else if (p > 8) {
//   console.log("zail");
// }

// let number = 9;
// if (number > 0) {
//   console.log("positive");
// } else {
//   console.log("negative");
// }

// let n1 = 1;
// let n2 = 2;
// let n3 = 3;
// if (n1 > n2 && n1 > n3) {
//   console.log("n1 ih");
// } else if (n2 > n1 && n2 > n3) {
//   console.log("n2 ih");
// } else if (n3 > n1 && n3 > n2) {
//   console.log("n3 ih");
// }

// let wei = 75;
// let hei = 185 / 100;
// let hi = wei / hei ** 2;
// if (hi < 18.5) {
//   console.log("dutagdaltai");
// } else if (hi >= 18.5 && hi < 24.9) {
//   console.log("eruul");
// } else if (hi >= 24.9 && hi < 30) {
//   console.log("iludel");
// } else if (hi >= 30) {
//   console.log("targan");
// }

// let day = 0;
// let dayName;
// switch (day) {
//   case 1:
//     dayName = "monday";
//     break;
//   case 2:
//     dayName = "tuesday";
//     break;
//   case 3:
//     dayName = "wednesday";
//     break;
//   case 4:
//     dayName = "thursday";
//     break;
//   case 5:
//     dayName = "friday";
//     break;
//   case 6:
//     dayName = "saturday";
//     break;
//   case 7:
//     dayName = "sunday";
//     break;
//   default:
//     dayName = " invalid day ";
// }
// console.log(dayName);

// let person = "galt";
// let text;
// switch (person) {
//   case "dulma":
//     text = "dulma irsen";
//     break;
//   case "galt":
//     text = "galt irsen";
//     break;
//   case "chodog":
//     text = "chodog irsen";
//     break;
//   case "tulga":
//     text = "tulga irsen";
//     break;
//   case "ursgal":
//     text = "ursgal irsen";
//     break;
//   default:
//     text = " zail ";
// }
// console.log(text);

// ternori
// let age = 18;
// let message = age >= 18 ? "ta nasand hurse" : "ta nasand huregu";
// console.log(message);

// let currencyFrom = window.prompt(
//   "End temdegt oruulna uu ? \n1. USD\n2. MNT\n3. CNY\n4 .RUB"
// );
// switch (currencyFrom) {
//   case "1":
//     currencyFrom = 3450;
//     break;
//   case "2":
//     currencyFrom = 1;
//     break;
//   case "3":
//     currencyFrom = 480;
//     break;
//   case "4":
//     currencyFrom = 38;
//     break;
//   default:
//     console.log("Buruu orolt");
// }
// let value = window.prompt("End toon utga oruulna uu ?");
// let currencyTo = window.prompt(
//   "End temdegt oruulna uu ? \n1. USD\n2. MNT\n3. CNY\n4 .RUB"
// );
// switch (currencyTo) {
//   case "1":
//     currencyTo = 3450;
//     break;
//   case "2":
//     currencyTo = 1;
//     break;
//   case "3":
//     currencyTo = 480;
//     break;
//   case "4":
//     currencyTo = 38;
//     break;
//   default:
//     console.log("Buruu orolt");
// }
// window.alert((currencyFrom * value) / currencyTo);

// let baraniune = window.prompt(
//   "yamar bara awah we ? \n1. cola 1200 \n2. sprite 1500 \n3. alpen gold 2000 \n4. suu 2200 \n5. talh 1000 \n6. zairmag 500 \n7. bohi 150 \n8.arhi 15000"
// );
// switch (baraniune) {
//   case "1":
//     baraniune = 1200;
//     break;
//   case "2":
//     baraniune = 1500;
//     break;
//   case "3":
//     baraniune = 2000;
//     break;
//   case "4":
//     baraniune = 2200;
//     break;
//   case "5":
//     baraniune = 1000;
//     break;
//   case "6":
//     baraniune = 500;
//     break;
//   case "7":
//     baraniune = 1500;
//     break;
//   case "8":
//     baraniune = 15000;
//     break;
//   default:
//     console.log("Buruu orolt");
// }
// let dewsgert = window.prompt(
//   "orulah dewsgerte songono uu ? \n1. 5000 \n2. 10000 \n3. 20000"
// );
// switch (dewsgert) {
//   case "1":
//     dewsgert = 5000;
//     break;
//   case "2":
//     dewsgert = 10000;
//     break;
//   case "3":
//     dewsgert = 20000;
//     break;
//   default:
//     console.log("Buruu orolt");
// }
// window.alert = dewsgert - baraniune;

// const name = window.prompt("nere bich");
// const second = window.prompt("ovgo orul ");
// function nerbichne(firstname, secondname) {
//   console.log("hi", firstname, secondname);
// }
// nerbichne(name, second);

// function tonimashin() {
//   let a = prompt("ehni too bich");
//   let temdeg = prompt("orulah temdegtuud ? \n1.* \n2. % \n3. + \n4.-");
//   let b = prompt("2dahi too bich");
//   let zaa;
//   switch (temdeg) {
//     case "1":
//       zaa = a * b;
//       break;
//     case "2":
//       zaa = a % b;
//       break;
//     case "3":
//       zaa = a + b;
//       break;
//     case "4":
//       zaa = a - b;
//       break;

//     default:
//       console.log("Buruu orolt");
//   }
//   console.log(`${zaa}`);
//   return zaa;
// }
// tonimashin();

// let names = ["Bat", "Baldan", "Dulmaa", "Gonchig", "Luubat", "Manjin"];
// let index = 0;
// while (index < 6) {
//   console.log(names[index]);
//   index++;
// }

// // toni-niilber-olno
// let sum = 0;
// let i = 1;
// let a = prompt("yamr negen too orul");
// while (i <= a) {
//   console.log((sum = sum + i)), i++;
// }
// window.alert(sum);

// let randomNumber = 48;
// let a = prompt("1-100-giin hoorondoh random toog oloroi");
// while ((randomNumber = a)) {
//   console.log();
// }

// let i = 0;
// const arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.leght; i++) {
//   console.log(arr[i]);
// }

// // garas ogson tooni zergiig olno 1000-aas ih boltol
// let number = window.prompt("too orul");
// let result = 0;
// let power = 1;
// while (result < 1000) {
//   result = number ** power;
//   if (result > 1000) {
//     window.alert(`${number}-iin ${power} zereg 1000-aa ih bn `);
//     window.alert(result);
//   }
//   power++;
// }

// // gras ogson toonii tegsh tooni niilber
// let number = window.prompt("yamar neg too bichde");
// if (isNaN(number)) {
//   window.alert("bru utga bn");
// } else {
//   let result = 0;

//   for (let i = 1; i < number; i++) {
//     if (i % 2 === 0) {
//       result += i;
//     }
//   }
//   console.log(`${number}-iin tegsh tooni niilber ${result}`);
// }

// const str = "hello";
// const str2 = "world";
// console.log(str.concat(" ", str2));

// // dorjsambuu amarmend iig A.Dorjsambuu bolgono
// const fullName = "dorjsambuu amarmend";
// const firstName = fullName.split(" ")[0];
// const lastName = fullName.split(" ")[1];
// const firstLetterToUpperCase = (str) => {
//   return str.slice(0, 1).toUpperCase();
// };
// const firstNameToUpperCase = (str) => {
//   const firstStr = firstLetterToUpperCase(str);
//   const lastStr = str.slice(1, str.length);
//   return firstStr + lastStr;
// };
// const lastNameStr = firstLetterToUpperCase(lastName);
// console.log(
//   lastNameStr + "." + " " + firstNameToUpperCase(firstName, lastName)
// );

// ...spread operator ilerhiilne

// //object
// let person = {
//   name: "sambuu",
//   age: 18,
// };
// console.log(person["age"]);
// console.log(person.name);
// let person1 = {
//   firstname: "naraa",
// };
// let person2 = person1;
// person2.firstname = "erdee";
// console.log(person1.firstname);
// console.log(person2.firstname);

// const friut1 = ["banana", "apple", "orange", "mango"];
// console.log(friut1.toString()); //"banana, apple, orange, mango"

// const friut2 = ["banana", "apple", "orange", "mango"];
// console.log(friut2.join(" and ")); //"banana and apple and orange and mango"

// const friut3 = ["banana", "apple", "orange", "mango"];
// console.log(friut3.includes("apple")); //true

// const friut4 = ["banana", "apple", "orange", "mango"];
// console.log(friut4.indexOf("mango"));

// const friut5 = ["banana", "apple", "orange", "mango"];
// const findIndex = (friut) => {
//   for (let i = 0; i < friut5.length; i++) {
//     if (friut5[i] === friut) {
//       console.log(i);
//     }
//   }
//   return 0;
// };
// findIndex("orange");

// const friut6 = ["banana", "apple", "orange", "mango"];
// const toString = (friutname) => {
//   let str = "";
//   let com = ",";
//   for (let i = 0; i < friutname.length; i++) {
//     str += friutname[i] + com;
//     console.log(str);
//   }
// };
// toString(friut6);

// const friut7 = ["banana", "apple", "orange", "mango"];
// const toJoin = (friuts1) => {
//   let str = "";
//   let com = " and ";
//   for (let i = 0; i < friuts1.length; i++) {
//     str += friuts1[i] + com;
//     if (i < friut7.length - 1) console.log(str);
//   }
// };
// toJoin(friut7);

// const arr = [1, 2, 3, 4];
// let input = 5;
// function add(input) {
//   let index = arr.length;
//   arr[index] = input;
//   return arr;
// }
// let result = add(input);
// console.log(result);

// const arr = [2, 3, 5, 10, 7];
// const target = 9;
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] + arr[j] === target) {
//       sum = [arr[i], arr[j]];
//     }
//   }
// }
// console.log(sum);

// //Object----------------------
// const numberObject = { a: 3, b: 10, c: 3 };
// const keys = Object.keys(numberObject);
// let sum = 0;
// for (let i = 0; i < keys.length; i++) {
//   sum += numberObject[keys[i]];
// }
// console.log(sum);

// // ehni usgiig tom bolgoj butsana---------------------------
// const stringObject = { name: "john", age: 25, city: "example" };
// const capitalizeLetter = (text) => {
//   return text.slice(0, 1).toUpperCase() + text.slice(1); //ehni usgiig tom bolgodog
// };
// const capitalizeLetterInObject = (obj) => {
//   const keys = Object.keys(obj);
//   for (let i = 0; i < keys.length; i++) {
//     if (typeof obj[keys[i]] === "string") {
//       obj[keys[i]] = capitalizeLetter(obj[keys[i]]);
//     }
//   }
//   return obj;
// };
// console.log(capitalizeLetterInObject(stringObject));

//DOM==================================//

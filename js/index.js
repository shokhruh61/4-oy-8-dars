/* _________________________ for va ternary operatorlari __________________________*/
// // 1
// for (let i = 1; i <= 50; i++) {
//   if (i % 3 == 0 && i % 5 == 0) {
//     console.log("3 ga va 5ga bo'linadi");
//   } else if (i % 3 == 0) {
//     console.log("3ga bolinadi");
//   } else if (i % 5 == 0) {
//     console.log("5 bolinadi");
//   }
//   else {
//     console.log(i);
//   }
// }

let sum = 0;

for (let i = 1; i <= 100; i++) {
  i > 30 && i < 70 && i % 2 === 0 ? (sum += i) : null;
}

console.log("30 va 70 orasidagi juft sonlarning yig‘indisi:", sum);

/* ________________________ switch cse masala______________________*/
// // 1
// // let days = +prompt(" Hafta kunini kiriting");

// // switch (days) {
// //   case 1:
// //     console.log("dushanba");

// //     break;
// //   case 2:
// //     console.log("seshanba");

// //     break;
// //   case 3:
// //     console.log("chorshanba");

// //     break;
// //   case 4:
// //     console.log("payshanba");

// //     break;
// //   case 5:
// //     console.log("juma");

// //     break;
// //   case 6:
// //     console.log("shanba");

// //     break;
// //   case 7:
// //     console.log("yakshanba");

// //     break;

// //   default:
// //     console.log('bunday hafta kuni mavjud emas');
// //     break;
// // }

// // 2

// let day = +prompt(" yilni faslini kiriting");

// switch (day) {
//   case 12:
//     console.log("qish");

//     break;
//   case 1:
//     console.log("qish");

//     break;
//   case 2:
//     console.log("qish");

//     break;
//   case 3:
//     console.log("bahor");

//     break;
//   case 4:
//     console.log("bahor");

//     break;
//   case 5:
//     console.log("bahor");

//     break;
//   case 6:
//     console.log("yoz");

//     break;
//   case 7:
//     console.log("yoz");

//     break;
//   case 8:
//     console.log("yoz");

//     break;
//   case 9:
//     console.log("kuz");

//     break;
//   case 10:
//     console.log("kuz");

//     break;
//   case 11:
//     console.log("bir bor");

//     break;
//   default:
//     console.log("bunday yil fasli mavjud emas mavjud emas");
//     break;
// }

// // 3

// let evl = +prompt(" bahoni kiriting ");

// switch (evl) {
//   case 1:
//     console.log('juda yomon');
//     break;
//   case 2:
//     console.log('yomon');
//     break;
//   case 3:
//     console.log('qoniqarli ');
//     break;
//   case 4:
//     console.log('yaxshi');
//     break;
//   case 5:
//     console.log('alo');
//     break;

//   default:
//     console.log('bunday baxo qoyish mumkin emas');
//     break;
// }

// // 4

// let enr = +prompt ('elektor tarifini kiriting');
// switch (enr) {
//   case 1:
//     console.log('ekanom');

//     break;
//   case 2:
//     console.log('standart');

//     break;
//   case 3:
//     console.log('premium');

//     break;

//   default:
//     console.log('mavjud emas');
//     break;
// }
// // 5

// let price = +prompt ('meva narxini kiriting');

// switch (price) {
//   case 1:
//     console.log("olma");
//     break;
//   case 2:
//     console.log("Apelsin");
//     break;
//   case 3:
//     console.log("banan");
//     break;
//   case 4:
//     console.log("uva");
//     break;
//   default:
//     console.log('bunady meva soni kritilmagan');
//     break;
// }
// //6

// let pasw = +prompt("parol sonini kiriting");

// switch (pasw) {
//   case 1:
//     console.log("parolni tiklash");
//     break;
//   case 2:
//     console.log("parolni o'zgartirish");
//     break;
//   case 3:
//     console.log("qayta tiklash");
//     break;

//   default:
//     console.log("bunday parol mavjud emas");
//     break;
// }

/* ________________________________ while do-while _______________________*/

// let g = 1;

// while (g <= 10) {

//   console.log(g);
//   g++
// }

// let g = 1;

// do {
//   console.log(g);
//   g++

// } while (g <= 10)

// let i = 10;

// while (i >= 1) {
//   console.log(i);
//   i--
// }

// let i = 10;

// do {
//   console.log(i);
//   i--
// } while (i >= 1);

// let num = 0;

// while (num <= 0) {
//   num = +prompt("musbat son kiriting");
// }

// console.log("musbat son");

// let num;

// do {
//   num = +prompt("musbat son kiriting");
// } while (num <= 0);

// console.log('musbat son');

// let g = 2;

// while (g <= 20) {
//   console.log(g);
//   g += 2;
// }

// let g = 2;

// do {
//   console.log(g);
//   g += 2;
// } while (g <= 20);

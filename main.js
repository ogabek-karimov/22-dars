// let name = prompt(`ismini ${users} kiriting:`);
// let age = prompt(`yoshini ${users} kiriting:`);
// let job = prompt(`ish joyingizni ${users} kiriting`);
// let from = prompt(`${users} Qayerliksiz?`);

// let users = {
//   1: {
//     name: " ",
//     age: " ",
//     job: " ",
//     from: " ",
//     info: function () {
//       return `Mening ismim ${this.name}, yoshim ${this.age}da, kasbim ${this.job} va ${this.from}da yashayman.`;
//     },
//   },
// };
// for (const key in users) {
//   console.log(users[key].info());
// }

let users = {};

for (let i = 1; i <= 3; i++) {
  let name = prompt(`Foydalanuvchi ${i} uchun ismini kiriting:`);
  let age = prompt(`Foydalanuvchi ${i} uchun yoshini kiriting:`);
  let job = prompt(`Foydalanuvchi ${i} uchun ish joyini kiriting:`);
  let from = prompt(`Foydalanuvchi ${i} qayerlik?`);

  users[i] = {
    name: name,
    age: parseInt(age),
    job: job,
    from: from,
    info: function () {
      return `Mening ismim ${this.name}, yoshim ${this.age}da, kasbim ${this.job} va ${this.from}da yashayman.`;
    },
  };
}

for (const key in users) {
  console.log(users[key].info());
}

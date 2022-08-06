// program to count the number of keys/properties in an object

// const student = { 
//     name: 'Anna',
//     age: 33,
//     hobbies: ['reading', 'games', 'coding'],
// };

// let count = 0;

// for(let key in student) {

//     ++count;
// }

// console.log(count);


// let array = ['1', '2', '1', '3', '2'];

// let uniqueArray = [];
// array.forEach((c) => {
//     if (!uniqueArray.includes(c)) {
//         uniqueArray.push(c);
//     }
// });

// console.log(uniqueArray);

// class Car {
//     constructor (year) {
//         this.year = year;
//     }

//      getAge(now){
//         return now - this.year;
//      }
// }

// let fiat = new Car(2018)

// console.log(fiat.getAge(2022));

class User{
    constructor(name, lastName){
        this.name = name;
        this.lastName = lastName;
    }

    get fullName(){
        return this.name + " " + this.lastName;
    }
}

var user = new User("Hanna", "Alokhina");
console.log(user.fullName);

// class Media{
//     constructor(name, year, imdb){
//         this.name = name;
//         this.year = year;
//         this.imdb = imdb;
//     }
// }
//     class Tvshows extends Media{
//         constructor(name, year, imdb, episodes, seasons){
//             super(name, year, imdb);
//             this.episodes = episodes;
//             this.seasons = seasons;
//         }
//     }

//     class Movies extends Media{
//         constructor(name, year, imdb, duration){
//             super(name, year, imdb);
//             this.duration = duration;
//         }
//     }



   
`use strict`

let academyMembers = [
    {
    memID: 101,
    name: "Bob Brown",
    films: ["Bob I", "Bob II", "Bob III", "Bob IV"]
    },
    {
    memID: 142,
    name: "Sallie Smith",
    films: ["A Good Day", "A Better Day"]
    },
    {
    memID: 187,
    name: "Fred Flanders",
    films: ["Who is Fred?", "Where is Fred?",
    "What is Fred?", "Why Fred?"]
    },
    {
    memID: 203,
    name: "Bobbie Boots",
    films: ["Walking Boots", "Hiking Boots",
    "Cowboy Boots"]
    },
   ];

   //exercise 2-A

   const Member = academyMembers.find((item) => item.memID == 187);
      console.log(Member.name);

      //exercise 2-B
console.log('');
      const in3Films = academyMembers.filter((item) => item.films.length >= 3);
     in3Films.forEach((item) => {
        console.log(item.name);
     });
   
     //exercise 2-C
console.log(``)
     const startsWithBob = academyMembers.filter((member) => member.name.startsWith(`Bob`));
     startsWithBob.forEach((member) => console.log(member.name));

     //exercise 2-D
     console.log(``)
     const filmsbob = [`Bob I`,`Bob II`, `Bob III`,`Bob IV`];
     const filmsA = [`A Good Day`, `A Better Day`];

    const startsWithA = (filmName) => filmName.startsWith(`A`);
const containsTitleThatStartsWithA = films => films.find(startsWithA);

const found = containsTitleThatStartsWithA(filmsbob)

if (found) {
    console.log(`Has a title with A`);
} else {
    console.log(`no titles that start with A`)
}
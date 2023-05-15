`use strict`

let courses = [
    {
    CourseId: "PROG100",
    Title: "Introduction to HTML/CSS/Git",
    Location: "Classroom 7",
    StartDate: "09/08/22",
    Fee: "100.00",
    },
    {
    CourseId: "PROG200",
    Title: "Introduction to JavaScript",
    Location: "Classroom 9",
    StartDate: "11/22/22",
    Fee: "350.00",
    },
    {
    CourseId: "PROG300",
    Title: "Introduction to Java",
    Location: "Classroom 1",
    StartDate: "01/09/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROG400",
    Title: "Introduction to SQL and Databases",
    Location: "Classroom 7",
    StartDate: "03/16/23",
    Fee: "50.00",
    },
    {
    CourseId: "PROJ500",
    Title: "Introduction to Angular",
    Location: "Classroom 1",
    StartDate: "04/25/23",
    Fee: "50.00",
    }
   ];

// find() or filter() functions

   //when does PROG200 course start?
function prog200Start (course) {
   return course.CourseId === 'PROG200';
}

const prog200 = courses.find(prog200Start);
console.log(`PROg200 starts`, prog200.StartDate)

//what is the title of PROJ500 course?
function findProj500(course) {
return course.CourseId === `PROJ500`;
}

const proj500 =courses.find(findProj500) 
console.log(`the title is`, proj500.Title)

//what are the titles of the courses that cost $50 or less?
function isUnder50USD (course) {
return Number(course.Fee) <= 50;
} 
const courseUnder50 = courses.filter(isUnder50USD);
console.log(`titles under 50`)
for (const course of courseUnder50) {
console.log(` `,course.Fee, course.Title); }

//---------------------------------------------------------------
function classesInClassroom1(course) {
    return course.location === `Classroom 1`;
}

const allClassesInClassroom = courses.filter(classesInClassroom1);

console.log(`Courses in Classroom 1`);
for (const course of allClassesInClassroom) {
    console.log(` `, course.Title);
}
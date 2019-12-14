// const todos =[
//     {
//         id:1,
//         name: 'sahil',
//         isComplete :true
//     },
//     {
//         id:2,
//         name:'raj',
//         isComplete :true
//     },
//     {
//         id:3,
//         name:'gupta',
//         isComplete :false
//     }
// ];
// //array methods
// // const todoJSON = JSON.stringify(todos);
// // console.log(todoJSON);
// // todos.forEach((todo)=>{
// //     console.log(todo.name);
// // });
// // const todoiscomplete = todos.filter((todo)=>{
// //     return todo.isComplete==true;
// // }).map((todo)=>{
// //     return todo.name;
// // });
// // console.log(todoiscomplete);

// //constructor

// // function Person(firstName, lastName, dob){
// //     this.firstName=firstName;
// //     this.lastName=lastName;
// //     this.dob=new Date(dob);
// //     this.getBirthYear=()=>{
// //         return this.dob.getFullYear();
// //     }
// // }

// // const person1 =  new Person('sahil', 'raj', '2001-01-21');
// // console.log(person1.dob);
// const companies= [
//     {name: "Company One", category: "Finance", start: 1981, end: 2004},
//     {name: "Company Two", category: "Retail", start: 1992, end: 2008},
//     {name: "Company Three", category: "Auto", start: 1999, end: 2007},
//     {name: "Company Four", category: "Retail", start: 1989, end: 2010},
//     {name: "Company Five", category: "Technology", start: 2009, end: 2014},
//     {name: "Company Six", category: "Finance", start: 1987, end: 2010},
//     {name: "Company Seven", category: "Auto", start: 1986, end: 1996},
//     {name: "Company Eight", category: "Technology", start: 2011, end: 2016},
//     {name: "Company Nine", category: "Retail", start: 1981, end: 1989}
//   ];

//   const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

// //   const candrink = ages.filter(age=>age>=21);
// //   console.log(candrink);    

// //filter the companies

// const retailCompany = companies.filter((company)=>{
//     if (company.category=='Retail')
//     {
//         return true;
//     }
// }).map((company)=>{
//     return company.name;
// })

// console.log(retailCompany);

// //get 80s company

// const eightiescompanies = companies.filter(company=> company.start<=1990).map(company=>{
//     return company.name;
// })
// console.log(eightiescompanies); 

// //sort array function

// const sortCompanies = companies.sort((a,b)=>(a.start>b.start?1:-1));
// console.log(sortCompanies);

// // const sortAges = ages.sort((a,b)=>a-b);//ascending
// // //const sortAgesD = ages.sort((a,b)=>b-a); //descending
// // console.log(sortAges);
// // console.log(sortAgesD);

// //reduce array function

// // const sumAge = ages.reduce((age,total)=>total+age);
// console.log(sumAge);


// const totalYears = companies.reduce((total,company)=> total+(company.end-company.start),0);
// console.log(totalYears);

//combined methods

const books = [
    {
        name: 'first',
        author: 'sahil',
        year: 2013,
        getSummary: function () {
            return `${this.name} was written by ${this.author} in the year ${this.year}`;
        }
    },
    {
        name: 'second',
        author: 'raj',
        year: 2016,
        getSummary: function () {
            return `${this.name} was written by ${this.author} in the year ${this.year}`;
        }
    }

];

const bookSummary = books.forEach((book) => {
    console.log(book.getSummary());
})

console.log(Object.keys(books[0]));

class Books {
    constructor(name, author, year) {
        this.name = name;
        this.author = author;
        this.year = year;
    }
    getSummary() {
        return `${this.name} was written by ${this.author} in the year ${this.year}`;
    }
}
const book1 = new Books('third', 'gupta', 2000);
console.log(book1.getSummary());
Books.prototype.getAge = function () {
    const years = new Date().getFullYear() - this.year;
    return `${this.name} is ${years} old`
}
console.log(book1.getAge());


//tried inheritancd but not working as this a es5 method
// class Magazine {
//     constructor(name, author, year, month) {
//         Books.call(this, name, author, year);
//         this.month = month;
//     }
// }
// const mag1 = new Magazine('mag1','dope',2010,'jan');
// console.log(mag1);

const bookProtos = {
    getSummary: function () {
        return `${this.name} is written by ${this.author} in the year ${this.year}`
    },
    getAge: function () {
        const years = new Date().getFullYear() - this.year;
        return `${this.name} is ${years} old`
    }
}

// const book2 = Object.create(bookProtos);
// book2.title = 'sahil';
// book2.name = 'RAJ';
// book2.author = 'gupta';
// book2.year = 2009;
// console.log(book2);
// console.log(book2.getAge());
// console.log(book2.getSummary());

//magazine subclass 

class Magazine extends Books {
    constructor(name, author, year, month) {
        super(name, author, year);
        this.month = month;
    }
}

const mag1 = new Magazine('dear zindagi', 'nandita singh', 2015, 'jan');
console.log(mag1.getSummary());
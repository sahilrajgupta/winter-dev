const todos =[
    {
        id:1,
        name: 'sahil'
    },
    {
        id:2,
        name:'raj'
    },
    {
        id:3,
        name:'gupta'
    }
];
const todoJSON = JSON.stringify(todos);
console.log(todoJSON);
todos.forEach((todo)=>{
    console.log(todo.name);
});
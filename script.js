// class TodoList{
//     constructor(){
//         this.tasks=[];
//     }
   

//     addTask(description){
//         this.tasks.push({
//             text:description,
//             completed:false
//         })
//     }
//     completeTask(index){
//         if(index<0 || index>=this.tasks.length){
//             return;
//         }
//         this.tasks[index].completed=true;
//     }
//     displayTasks(){
//         if(this.tasks.length==0){
//             return
//         }
//         for(let i=0;i<this.tasks.length;i++){
//             console.log(`${this.tasks[i].text} : ${this.tasks[i].completed}`)
//         }

//     }
// }

// let todo=new TodoList();
// console.log(todo.tasks)
// todo.addTask("playing chess");
// todo.addTask("playing teniss");

// console.log(todo.tasks);
// todo.completeTask(0);
// console.log(todo.tasks)
// todo.displayTasks();
// let todo2=new TodoList("playing tennis");
// console.log(todo2.tasks);

// class Vehicle{
//     age=20;
//     constructor(name,year){
//         this.name=name;
//         this.year=year;
//     }
//     displayInfo(){
//         console.log(`vehicle ${this.name}, age is  ${this.year}`)
//     }
//     returnNumber(){
//         return 5;
//     }

// }

// class Car extends Vehicle{
   
//     constructor(name,year,numberOfDoors){
//         super(name,year)
        
//         this.numberOfDoors=numberOfDoors;
//     }
//     displayInfo(){
//         super.displayInfo();
//         console.log(`number of doors : ${this.numberOfDoors}`);
//     }
   
   
// }

// let car=new Car("mercedes",2020,4);
// car.displayInfo();







// !- Create an alert that lists all users, with their ids, names and what city they're from
let credentials=[]

for (let i = 0; i < users.length; i++) {
    credentials.push(
        `${users[i].id} - ${users[i].name} - ${users[i].address.city}\n`,
    )
}
alert(credentials)


// !- Prompt the user for a user id
let userId =Number(prompt("Enter a user id from 1 to 10"))
while(isNaN(userId)){
    alert("Please enter a number");
    userId = Number(prompt("Enter the user id again from 1 to 10"));
}



// !- Display an alert with the username and all the todos titles that belong to that user 
let userAndTodos = []

for (let name in users) {
    if (users[name].id === userId) {
        userAndTodos.push(
            `${users[name].name}:\n`,
        )
    }
}

// !Ask Nico how to put a loop that raises the number of tasks by 1
let counter = 0;
for (let t in todos) {
    counter++
}

for(let todo in todos){
    if(todos[todo].userId === userId){
        userAndTodos.push(
            `Task${counter} : ${todos[todo].title}\n`,
        )
    }
}


console.log(userAndTodos)

alert(userAndTodos)


// !Tips
// !- The user id creates an identifiable relationship with the todos
// !- Sometimes it's good to map some values into a new data structure

// !Challenge
// !After you select a user, add the option to either show the todos or add a new todo to the list

// !Challenge 2
// !Now that you can add a todo, add the option to either delete or update a todo. Add also the option to repeatedly choose a different user, or to finish the program
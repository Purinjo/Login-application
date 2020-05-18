var objPeople = [
    {
        username: "djole"
        password: "password25"
    },
    {
        username: "pura"
        password: "password88"
    },
    {
        username: "neca"
        password: "password3"
    }
]

//login functionality
function login() {
//retrive data input from form
var username = document.getElementById("username").value
var password = doument.getElementById("password").value

//loop through all the user objects and confirm the username and passwords are corect
for(i = 0; i < objPeople.length; i++) {
    if username = objPeople[i].username && password == objPeople[i].password {
        console.log(username + "is logged in!!!")
        return
    }
}

//error if username and password do not match
console.log("incorect username of password")
}

function registerUser() {
    var registerUser = document.getElementById("newUser").value
    var registerPassword = doument.getElementById("newPassword").value
    var newUser = {
        username: registerUser,
        password: registerPassword
    }
    objPeople.push(registerUser, registerPassword)
    console.log(objPeople)
}

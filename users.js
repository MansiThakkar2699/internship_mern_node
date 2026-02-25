console.log("users file loaded...")
var userName = "Mansi"
var userAge = 23
// module.exports = userName 
// module.exports = userAge

const userData = (x)=> {
    console.log("user data called...",x)
    return x*x
}

module.exports = {
    userName,userAge,userData
}
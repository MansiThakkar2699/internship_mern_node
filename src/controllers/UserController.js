const getUser = (req,res)=>{
    console.log("get user called");
    res.send("user api called");
};

const getUserData = (req,res)=>{
    const user = {id: 101,name: "Mansi",age: 23};
    res.json({
        message: "user fetch successfully",
        data: user
    });
};

const users = [
    {id: 1001,name: "Mansi",age: 23},
    {id: 1002,name: "Raj",age: 24},
    {id: 1003,name: "Amit",age: 25}
];

const allUsers = (req,res)=>{
    res.json({
        message: "All users",
        data: users
    });
};

const getUserById = (req,res)=>{
    const user = users.find((user)=> user.id == req.params.id);
    if (user) {
        res.json({
            message: "user found",
            data: user
        });
    } else {
        res.json({
            message: "user not found",
        });
    }
};

module.exports = {
    getUser,
    getUserData,
    allUsers,
    getUserById
};
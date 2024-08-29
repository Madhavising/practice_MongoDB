const express = require("express");
const app = express();

const dbConnection = require("./dbConnection");
const userController = require("./controller/student.controller");

app.use(express.json());

app.use("/user", userController);

app.listen("3000",()=>{
    console.log("Server is running at 3000");
    dbConnection();
});
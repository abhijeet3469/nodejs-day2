
// Frontend is which the user is watching. Server side is responsible to give some data to the front end or take the input of user from
// frontend and make that particular action performed by user in such a way to perform all the logical operation we are doing
// over the backend.
// Node Js ? 
// Backend?
// Database?
// API - POST MAN is aap used to check or test api, api is link which u get to perform to connect to database.so in order to check
// your backend, the post man is a software to check api. It is a testing tool.

// const http = require("http"); // importing module we use the statement require
// var htmlDoc = `
// <h1>Hello</h1><h2>Hello</h2>
// <h1>Hello</h1><h2>Hello</h2>
// <h1>Hello</h1><h2>Hello</h2>
// <h1>Hello</h1><h2>Hello</h2>
// `;
// http.createServer(function(request, response){ // createServer ius a function that takes callback function and in cb we have two parameters i.e. req and res.
//     response.write("Hello World"); // send simple text response.
//     response.write("<h1>Hello</h1><h2>Hello</h2>"); // send html response.
//     const jsonData = {name : "Abhijeet", age : "25"}
//     response.write(htmlDoc); // send html file response.
//     response.write(JSON.stringify(jsonData))
//     response.end();
// }).listen(3000); // Every server should have different port number. .listen is function which helps to define in which port server need to created.
// request is a parameter where whatever  data are sent by the front end. Those are known as request pahrameter.
//  Those parametres can be accessed using the reqest parameter of the function and  what ever you want to send as a reponse you need to send using response parameter.
// Local Host is the address of own system
// ipconfig in cmd.
// ping google.com in cmd.

// express is a module which helps us for faster development of backend system in order to interact with the database. it help us to : 1. coding smaller, 2. process faster and easy.

// const express = require("express"); // importing express module.
// const x = express(); // creating object of express module inside varable x or creating a server.
// x.get("/", function(req, res){
    // res.send("Hello World");
    // res.json({name:"Abhijeet"});
    // res.send("<h1>Hi</hi>");
    // res.send({name:"Abhi"}); Ask what is difference between send and json?
// }) // get function create a get type of api, where you want get data sever.
// x.listen(3001);
// What You're Aiming For

// In this checkpoint, you will be performing a series of guided instructions to create a REST API by manipulating your database with mongoose.

// PS: don't forget to comment on your code before submitting it.

// Instructions

// Start a new Node JS project  with ‘ npm init ‘
// Install the mongoose and express and  .env
// Configure the environment variables with .env
// Lunch a server with express in the server.js file
// Connect your database locally or with mongo atlas
// The Folder structure should be like this :
// config/ .env

// Server.js

//      7. Create a models folder and a User.js file in it

//      8. In User.js you must define a mongoose Schema and export the model , you will use it in the server.js

//      9. The Folder structure should be like this :

// config/ .env

// models/User.js

// Server.js

//      10. In the server.js create four routes :

//        GET :  RETURN ALL USERS

//        POST :  ADD A NEW USER TO THE DATABASE

//        PUT : EDIT A USER BY ID

//        DELETE : REMOVE A USER BY ID

// NB : in each callback function you will use mongoose methods to manipulate your data and return it in the response

//      11.  Use postman to test each route.

//   Useful Links :

// .env : https://www.npmjs.com/package/dotenv
// Express js : https://expressjs.com/
// Req.params && req.query : https://coursework.vschool.io/express-params-and-query/
// Mongoose : https://mongoosejs.com/
// Rest api : https://www.youtube.com/watch?v=SLwpqD8n3d0

import dotenv from "dotenv"; //it helps us import our environmental variable ,,, from that env we created guy ,that we put our mong password
dotenv.config({ path: "./config/.env" });
//import express
import express from "express";
const app = express();
const port = 3000;
//port

//import mongoose
import mongoose from "mongoose"; //so we can use the mongoose altas cloud

//import
import createUser from "./controller/register.js";
import Use from "./get.js";
import update_Position from "./Put.js";
import delete_user from "./delete-user.js";

//use to extract value sent from incoming request
app.use(express.json());

//      10. In the server.js create four routes :
//  POST :  ADD A NEW USER TO THE DATABASE
app.post("/api/v1/create-user", createUser);

//        GET :  RETURN ALL USERS
app.get("/api/v1/search-user", Use);

//        PUT : EDIT A USER BY ID
app.put("/api/v1/update-user", update_Position);
//        DELETE : REMOVE A USER BY ID
app.delete("/api/v1/delete-user", delete_user);

// NB : in each callback function you will use mongoose methods to manipulate your data and return it in the response

//      11.  Use postman to test each route.

//router.post("/register", registerUser); .. (/api/v2/register)

async function connnectDatabase() {
  try {
    await mongoose.connect(process.env.MONGO_CONNECTION_STRING);
    console.log("server started sucessfully");
    console.log("connection to data base");
  } catch (error) {
    console.log(error);
  }
}

app.listen(port, () => connnectDatabase());

//imports the dotenv package and calls the config method
import "dotenv/config";

//import dotenv from "dotenv";
//dotenv.config();
//dotenv.config({ path: "path/to/your/env/file" }); <--- if you want to specify the path to the .env file



//prints the value of the environment variable
console.log(process.env.SOMETHING);
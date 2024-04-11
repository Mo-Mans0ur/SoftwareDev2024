import express from "express";

const app = express();

// allow CORS from all requests from all origins
import cors from "cors";
/*
app.use(cors());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/timestamp", (req, res) => { 
    res.send({time: new Date()} );
});
*/

// allow CORS from all requests from all origins only on this route
app.get("/timestamp", cors(), (req, res) => {
    res.send({time: new Date()} );
});

const PORT = process.env.PORT ?? 8080;
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});
import express from "express" //Henter express biblioteket

const app = express(); //express bliver instantieret



app.get("/", (req, res) =>{
    res.send({message: "Hello"})
});

app.get("/otherRoute", (req, res) => { //req indeholder information, res er respondsen fra clienten
    res.send({message: "this is some other route"})
});

app.post("/postrequest", (req, res) => {
    res.send({message: "Post request made!"})
});

const PORT = 8080;
app.listen(8080, () => console.log("Server is running on port", PORT));
import express from "express";

const app = express();

app.get("/requestFastAPI", async (req, res) => {
    const response = await fetch("http://localhost:8000/fastapiData");
    const result = await response.json();
    res.send({ });
});


app.get("/expressData", (req, res) => {
    res.send({ isRunning: true});
});

const PORT = 8080;
app.listen(PORT, () => console.log("Server is running on port", PORT));

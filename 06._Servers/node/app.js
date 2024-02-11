import express from "express" //Henter express biblioteket
import cors from 'cors';
import { readFile } from 'fs/promises';
import { parseStringPromise } from 'xml2js'; // For XML parsing
import { parse } from 'csv-parse/sync'; // For CSV parsing
import yaml from 'js-yaml'; // For YAML parsing


const app = express(); //express bliver instantieret
app.use(cors());

const dataFilesPath = 'C:\\Users\\moha1\\SoftwareDev2024-1\\02._Data_Files';

app.get("/", (req, res) =>{
    res.send({message: "Hello"})
});

//parse JSON
app.get('/data/json', async (req, res) => {
    try {
      const jsonData = await readFile(`${dataFilesPath}/me.json`, 'utf8');
      res.json(JSON.parse(jsonData));
    } catch (error) {
      res.status(500).send(error.message);
    }
});


// parsing XML
app.get('/data/xml', async (req, res) => {
    try {
      const xmlData = await readFile(`${dataFilesPath}/me.xml`, 'utf8');
      const result = await parseStringPromise(xmlData);
      res.json(result);
    } catch (error) {
      res.status(500).send(error.message);
    }
});


//parsing CSV
app.get('/data/csv', async (req, res) => {
    try {
      const csvData = await readFile(`${dataFilesPath}/me.csv`, 'utf8');
      const records = parse(csvData, { columns: true, skip_empty_lines: true });
      res.json(records);
    } catch (error) {
      res.status(500).send(error.message);
    }
});

//parsing YAML
app.get('/data/yaml', async (req, res) => {
    try {
      const yamlData = await readFile(`${dataFilesPath}/me.yaml`, 'utf8');
      const result = yaml.load(yamlData);
      res.json(result);
    } catch (error) {
      res.status(500).send(error.message);
    }
});
  
// parisng TXT
app.get('/data/txt', async (req, res) => {
    try {
      const txtData = await readFile(`${dataFilesPath}/me.txt`, 'utf8');
      res.type('text/plain').send(txtData);
    } catch (error) {
      res.status(500).send(error.message);
    }
});



//i Klassen 
app.get("/otherRoute", (req, res) => { //req indeholder information, res er respondsen fra clienten
    res.send({message: "this is some other route"})
});

app.post("/postrequest", (req, res) => {
    res.send({message: "Post request made!"})
});

const PORT = 8080;
app.listen(8080, () => console.log("Server is running on port", PORT));
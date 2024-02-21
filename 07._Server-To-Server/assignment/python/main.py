from fastapi import FastAPI
import requests

app = FastAPI()

@app.get("/parse/xml")
def parse_xml():
    # Parse XML data here
    return {"data": "XML data"}

@app.get("/parse/csv")
def parse_csv():
    # Parse CSV data here
    return {"data": "CSV data"}

@app.get("/parse/yaml")
def parse_yaml():
    # Parse YAML data here
    return {"data": "YAML data"}

@app.get("/parse/txt")
def parse_txt():
    # Parse TXT data here
    return {"data": "TXT data"}

import json

@app.get("/parse/json")
async def parse_json():
    with open('02._Data_Files/me.json', 'r') as f:
        data = json.load(f)
    return data

@app.get("/requestServerB")
def request_server_b():
    response = requests.get("http://localhost:8000/requestServerA")
    return response.json()
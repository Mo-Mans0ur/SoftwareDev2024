from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from datetime import datetime

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# assignment: Create a /timestamp that serves the time in the same format as the express server
@app.get("/timestamp")
async def read_timestamp():
    return {"time": datetime.now().strftime("%Y-%m-%d %H:%M:%S")}
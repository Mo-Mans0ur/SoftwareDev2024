from fastapi import FastAPI, Form , File, UploadFile
import aiofiles
from typing import Optional


app = FastAPI()

@app.post("/form")
def basic_form(username: str = Form(...), password: str = Form(default="...", min_length=8)):
    print(username, password)
    return {"username": username}
    

#@app.post("/fileform")
#def file_form(file: bytes = File(...)):
#    with open('file', 'wb') as f:
#        f.write(file)

#    return {"message": "File uploaded successfully"}

        
#@app.post("/fileform")
#async def file_form(file: UploadFile = File(...)):
#   contents = await file.read()
#   print(contents)

#   return {"filename": file.filename}


@app.post("/fileform")
async def file_form(file: UploadFile = File(...), description: Optional[str] = Form(None)):
    safe_filename = file.filename.replace("/", "_").replace("\\", "_")
    # with aiofiles it ensures that is asyncronous

    async with aiofiles.open(safe_filename, 'wb') as f:
        # Walrus operator
        while content := await file.read(1024): # Read 1024 chunks
            await f.write(content)

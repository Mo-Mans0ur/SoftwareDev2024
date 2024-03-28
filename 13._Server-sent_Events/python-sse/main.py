from fastapi import FastAPI, Request
from fastapi.templating import Jinja2Templates
from fastapi.responses import StreamingResponse
from datetime import datetime
import asyncio

app = FastAPI()

# Jinja2Templates is a class that comes from the fastapi.templating module.
templates = Jinja2Templates(directory="templates")

# The templates object will be in charge of loading the templates from the templates directory.


@app.get("/")
def serv_root_page(request: Request):
    return templates.TemplateResponse("index.html", {"request": request})


# The date_generator function is a generator that will yield the current date and time every second.
async def date_generator():
    while True:
        now = datetime.now().strftime("%Y-%m-%d %H:%M:%S")
        # The yield statement will return the current date and time as a string.
        # the f in f"data: {now}\n\n" is used to format the string
        yield f"data: {now}\n\n"
        # The await asyncio.sleep(1) statement will make the generator sleep for one second.
        await asyncio.sleep(1)


@app.get("/sse")
def sse():
    # pass is a keyword that does nothing. It is used when a statement is required syntactically but the program requires no action.
    # The StreamingResponse class will return a response that will stream the data to the client.
    return StreamingResponse(date_generator(), media_type="text/event-stream")

# a webhook is a way for an app to provide other applications with real-time information.
# how it works is that when an event occurs in the app, it makes an HTTP request to the URL configured by the user.
# and then the user can use the data from the request to trigger a specific action in their app. but the user has to configure the webhook URL in their app first.
# the pro: it's real-time, the con: it's not reliable, it's not guaranteed that the request will be received by the user's app.

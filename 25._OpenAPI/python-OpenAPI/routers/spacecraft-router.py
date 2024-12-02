from fastapi import APIRouter, HTTPException
from pydantic import BaseModel

class Spacecraft(BaseModel):
    id: int
    name: str
    

spacecrafts = [
    Spacecraft(id=0, name="Apollo 13"),
    Spacecraft(id=1, name="Voyager 1"),
    Spacecraft(id=2, name="Voyager 2"),
    Spacecraft(id=3, name="Hubble Space Telescope"),
]

router = APIRouter()

@router.get("/api/spacecrafts/", tags=["spacecrafts"], response_model=list[Spacecraft])
async def _():
    return spacecrafts

@router.get("/api/spacecrafts/{spacecraft_id}", tags=["spacecrafts"], response_model=list[Spacecraft])
async def _(spacecraft_id: int):
    for spacecraft in spacecrafts:
        if spacecraft.id == spacecraft_id:
            return spacecraft
    return None
    raise HTTPException(status_code=404, detail="Spacecraft not found")

@router.post("/api/spacecrafts/", tags=["spacecrafts"], response_model=Spacecraft)
async def _(spacecraft: Spacecraft):
    spacecrafts.append(spacecraft)
    return spacecraft
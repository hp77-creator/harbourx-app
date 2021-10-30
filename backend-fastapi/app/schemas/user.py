from typing import Any
from pydantic import BaseModel, HttpUrl, EmailStr
from datetime import datetime

class User(BaseModel):
    id: int
    username: str
    first_name: str
    last_name: str
    email: EmailStr 
    phone_number: int
    profile_image: Any
    owes: int
    owed: int
    joined_at: datetime


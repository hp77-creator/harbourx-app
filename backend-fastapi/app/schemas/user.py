from typing import Any
from pydantic import BaseModel, HttpUrl, EmailStr
from datetime import datetime

class UserBase(BaseModel):
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

class UserCreate(UserBase):
    pass

class UserUpdate(UserBase):
    phone_number: int
    profile_image: Any
    owes: int
    owed: int

class UserInDBBase(UserBase):
    id: int
    username: int

    class Config:
        orm_mode = True


class User(UserInDBBase):
    pass


class UserinDB(UserInDBBase):
    pass




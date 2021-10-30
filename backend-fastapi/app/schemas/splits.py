from pydantic import BaseModel

class Splits(BaseModel):
    id: int
    split_amount: int
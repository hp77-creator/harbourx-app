from pydantic import BaseModel

class Groups(BaseModel):
    id: int
    group_name: str
    group_image: str
    category: str
    split_type: str
    total_members: int
    expenses: int
    created_at: str
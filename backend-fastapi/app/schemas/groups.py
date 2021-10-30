from pydantic import BaseModel

class GroupsBase(BaseModel):
    id: int
    group_name: str
    group_image: str
    category: str
    split_type: str
    total_members: int
    expenses: int
    created_at: str


class GroupCreate(GroupsBase):
    pass

class GroupUpdate(GroupsBase):
    total_members: int
    expenses: int


class GroupsInDBBase(GroupsBase):
    id: int

    class Config:
        orm_mode = True


class Groups(GroupsInDBBase):
    pass

class GroupsInDB(GroupsInDBBase):
    pass
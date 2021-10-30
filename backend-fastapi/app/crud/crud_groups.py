from app.crud.base import CRUDBase
from models.groups import Groups
from app.schemas.groups import GroupCreate, GroupUpdate

class CRUDGroups(CRUDBase[Groups, GroupCreate, GroupUpdate]):
    ...

group = CRUDGroups(Groups)

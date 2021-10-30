from sqlalchemy import Column, ForeignKey, Integer, DateTime
from app.models.groups import Groups
from app.models.user import User
from db.base_class import Base

class Join(Base):

    user_id = Column(Integer, ForeignKey("user.id"), primary_key=True)
    group_id = Column(Integer, ForeignKey("group.id"), primary_key=True)
    group_joined_time = Column(DateTime, default=DateTime.now())

    


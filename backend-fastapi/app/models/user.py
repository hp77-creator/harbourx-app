from enum import unique
from sqlalchemy import ForeignKey, Column, Integer, String

from app.db.base_class import Base

class User(Base):
    __tablename__ = "user"
    id = Column(Integer, primary_key=True)
    username = Column(String, nullable=False, unique=True)
    email = Column(String, unique=True, index=True)

    


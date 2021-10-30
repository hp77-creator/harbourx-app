from sqlalchemy import Column, Integer, String, ForeignKey, DateTime
from sqlalchemy.orm import relationship
from sqlalchemy_imageattach.entity import Image, image_attachment


from app.db.base_class import Base

class Groups(Base):
    id = Column(Integer, primary_key=True, index=True)
    group_name = Column(String(30), nullable=False)
    group_image = image_attachment('GroupPicture') 
    category = Column(String(30))
    split_type = Column(String(30))
    toatl_members = Column(Integer)
    expenses = Column(Integer)
    created_at = Column(DateTime)

    __tablename__ = 'group'


class GroupPicture(Base, Image):
    group_id = Column(Integer, ForeignKey('group.id'), primary_key=True)
    group = relationship('group')
    __tablename__ = 'group_picture'
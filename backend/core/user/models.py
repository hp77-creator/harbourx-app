from typing import Type
from django.contrib.auth.base_user import BaseUserManager
from django.db import models

from django.contrib.auth.models import AbstractBaseUser, BaseUserModel, PermissionsMixin
from django.db.models.fields import BLANK_CHOICE_DASH

# Create your models here.

class User(AbstractBaseUser, PermissionsMixin):

    username = models.CharField(db_index= True, max_length=255, unique=True)
    email    = models.EmailField(db_index=True, unique=True, null=True, blank=True)
    first_name = models.CharField(max_length=255)
    last_name = models.CharField(max_length=255)
    phone_no = models.I
    




class UserManager(BaseUserManager):

    def create_user(self, username, email, password=None, **kwargs):
        """Create and return a 'User' with an email, phone number, username."""

        if username is None:
            raise TypeError("Users must have an username.")
        
        elif email is None:
            raise TypeError("Users must have an email.")
        
        
        

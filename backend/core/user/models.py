from re import U
from typing import Type
from django.contrib.auth.base_user import BaseUserManager
from django.db import models

from datetime import datetime

from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin
from django.core.validators import RegexValidator
from django.db.models.fields import BLANK_CHOICE_DASH

# Create your models here.

class UserManager(BaseUserManager):

    def _create_user(self, username, email, password, is_active, is_staff, is_superuser, **extra_fields):
        now = datetime.now()
        
        if not username:
            raise TypeError("User should have an username")
        
        if not email:
            raise TypeError("User should have an email")

        email = self.normalize_email(email)

        user = self.model(username=username, email= email, is_active=is_active, is_staff=is_staff, is_superuser=is_superuser,
        joined_at = now,  **extra_fields)

        user.set_password(password)

        user.save(using=self._db)

        return user


    def create_user(self, username, email, password, **extra_fields):
        """Create and return a 'User' with an email, phone number, username."""

        return self._create_user(username=username, email=email, password=password, is_active=True, is_staff=False, is_superuser=False, **extra_fields)
 
    
    def create_superuser(self, username, email, password, **extra_fields):

        user = self._create_user(username=username, email=email, password=password, is_active=True, is_staff=True, is_superuser=True,
        **extra_fields)

        user.save(using = self._db)

        return user
    

class User(AbstractBaseUser, PermissionsMixin):

    phone_regex = RegexValidator(regex=r'^\+?1?\d{9,15}$', message="Phone number must be entered in the format: '+999999999'. Up to 15 digits allowed.")

    username = models.CharField(db_index= True, max_length=25, unique=True)
    email    = models.EmailField(db_index=True, unique=True)
    first_name = models.CharField(max_length=30, blank=True, null=True)
    last_name = models.CharField(max_length=30, blank=True, null=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    is_superuser = models.BooleanField(default=False)

    
    phone_number = models.CharField(validators=[phone_regex], max_length=17, blank=True) # validators should be a list

    image = models.ImageField(blank=True, null=True)
    joined_at = models.DateTimeField(default=datetime.now)
    owes = models.IntegerField(default=0)
    owed = models.IntegerField(default=0)

    USERNAME_FIELD = 'username'
    REQUIRED_FIELDS = ['email']

    objects = UserManager()


    def __str__(self):
        return f"{self.first_name} + {self.last_name}"

       
        
        

from django.shortcuts import render
from rest_framework import generics

from core.user.models import User

from core.user.serializers import UserSerializer

# Create your views here.

class UserApiView(generics.ListAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

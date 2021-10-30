from core.user.models import User

from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):

    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'first_name', 'last_name', 'phone_number', 'image', 'joined_at', 'owes', 'owed']
        read_only_field = ['is_active', 'created', 'updated']


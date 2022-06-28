
from django.db.models import fields

from .models import Account
from rest_framework import serializers 
from django.contrib.auth.hashers import make_password
from django.contrib.auth import authenticate


class UserSignUpSerializer(serializers.ModelSerializer):
    password2 = serializers.CharField(style={'input_type':'password'}, write_only=True)
    class Meta:
        model = Account
        fields = ['email','name','password','password2']
        extra_kwargs = {
            'password':{'write_only':True}
        }
    # password and confirm password getting validated
    def validate(self, data): 
        email = data.get('email',None)
        # name = data.get('name',None)
        password = data.get("password", None)
        password2 = data.get("password2", None)
        if '@' not in email:
            raise serializers.ValidationError(
                'Invalid mail id'
            )
        if password != password2:
            raise serializers.ValidationError(
                'Passwords do not match'
            )
        data.pop('password2',None)
        return super().validate(data)
    def create(self, validated_data):
        # token = get_tokens_for_user(validated_data)
        return Account.objects.create(**validated_data)

class UserLoginSerializer(serializers.ModelSerializer):
    email = serializers.EmailField(max_length=255)
    class Meta:
         model = Account
         fields = ['email','password']

# class UserProfileSerializer(serializers.ModelSerializer):

#     class Meta:
#         model = Account
#         fields = ['id','email','name']    
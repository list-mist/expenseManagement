from .models import ExpenseItem
from rest_framework import serializers 


class UserProfileSerializer(serializers.ModelSerializer):

    class Meta:
        model = ExpenseItem
        # fields = '__all__'
        fields = ('id','title','amount','date')
        read_only = 'added_by'
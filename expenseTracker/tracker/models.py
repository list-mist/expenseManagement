from datetime import datetime
from django.conf import settings
from django.db import models

# Create your models here.
class ExpenseItem(models.Model):
  
    title = models.CharField(max_length=255)
    amount = models.CharField(max_length=255)
    date = models.DateField()
    added_by = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def __str__(self) -> str:
        return self.title
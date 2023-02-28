from datetime import datetime
from django.db import models
from django.contrib.auth.models import AbstractUser
import datetime


class CloudUser(AbstractUser):
    email = models.EmailField(max_length=45, unique=True)
    REQUIRED_FIELDS = ['username']
    USERNAME_FIELD = 'email'

    def get_username(self):
        return self.email

    def __str__(self):
        return self.username

    class Meta:
        verbose_name_plural = "Użytkownicy"


class Files(models.Model):
    file = models.FileField(upload_to='data/')

    def __str__(self):
        return self.file
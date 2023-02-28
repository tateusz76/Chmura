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


class Plik(models.Model):
    nazwa = models.CharField(max_length=80)
    typ = models.CharField(null=True, max_length=100)
    rozmiar = models.PositiveBigIntegerField(null=True)
    dataModyfikacji = models.DateTimeField(auto_now_add=True)
    plik = models.FileField(upload_to="./data/", null=False, blank=False)

    def __str__(self):
        return self.nazwa

    class Meta:
        verbose_name_plural = "Punkty szczepień"
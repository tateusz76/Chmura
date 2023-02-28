from rest_framework.serializers import Serializer, FileField

from django.forms import widgets
from rest_framework import serializers
from .models import Files


class FilesSerializer(serializers.ModelSerializer):
    class Meta:
        model = Files
        fields = ['id','file']

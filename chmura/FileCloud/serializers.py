from rest_framework.serializers import Serializer, FileField

from django.forms import widgets
from rest_framework import serializers
from .models import Plik


class PlikSerializer(serializers.ModelSerializer):
    class Meta:
        model = Plik
        fields = '__all__'

    def to_representation(self, instance):
        representation = super().to_representation(instance)
        plik = {
            "rozmiar": instance.plik.size,
            "nazwa": instance.plik.name,
        }
        representation['plik'] = plik
        return representation

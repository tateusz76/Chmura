from django.urls import path, include
from . import views
from django.contrib import admin
from .views import PlikView


admin.site.site_url = 'http://127.0.0.1:8000/chmura/'
urlpatterns = [
    path('', include('djoser.urls')),
    path('', include('djoser.urls.authtoken')),
    path('upload/', PlikView.as_view(), name='file-upload'),
]
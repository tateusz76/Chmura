from django.urls import path, include
from . import views
from django.contrib import admin
from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import FilesViewSet

router = DefaultRouter()
router.register('files', FilesViewSet, basename='files')


admin.site.site_url = 'http://127.0.0.1:8000/chmura/'
urlpatterns = [
    path('', include('djoser.urls')),
    path('', include('djoser.urls.authtoken')),
    path('api/', include(router.urls)),
]
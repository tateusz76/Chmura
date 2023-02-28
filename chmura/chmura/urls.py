from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import (
    TokenObtainPairView,
    TokenRefreshView,
)

urlpatterns = [
    path('api/', include('rest_framework.urls')),
    path('admin/', admin.site.urls),
    path('chmura/', include('FileCloud.urls')),
    path('chmura/token/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('chmura/token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
]

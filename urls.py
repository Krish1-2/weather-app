from frontend.views import *
from django.contrib import admin
from django.urls import path,include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('',ReactView.as_view(), name="something")
]

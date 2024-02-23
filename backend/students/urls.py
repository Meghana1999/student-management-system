 
from django.urls import path
from .views import studentView

urlpatterns = [
    path("students/", studentView.as_view()),
    path("students/<int:pk>", studentView.as_view()),
]
from django.contrib import admin
from .models import Student

# Register your models here.
models_list = [Student]
admin.site.register(models_list)

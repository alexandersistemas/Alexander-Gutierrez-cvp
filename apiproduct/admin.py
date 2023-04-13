from django.contrib import admin
from apiproduct.models import Producto

@admin.register(Producto)
class ProductAdmin(admin.ModelAdmin):
    list_display = ['id', 'nombre', 'descripcion', 'precio', 'cantidad']


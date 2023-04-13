from rest_framework.serializers import ModelSerializer
from apiproduct.models import Producto

class apiproductSerializer(ModelSerializer):
    class Meta:
        model= Producto
        fields = ['id', 'nombre', 'descripcion', 'precio', 'cantidad']

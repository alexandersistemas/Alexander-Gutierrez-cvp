from rest_framework.viewsets import ModelViewSet
from apiproduct.models import Producto
from apiproduct.api.serializers import apiproductSerializer

class apiproductViewSet(ModelViewSet):
    serializer_class = apiproductSerializer
    queryset = Producto.objects.all()
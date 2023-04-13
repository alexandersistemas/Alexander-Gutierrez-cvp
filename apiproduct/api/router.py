from rest_framework.routers import DefaultRouter
from apiproduct.api.views import apiproductViewSet

router_posts = DefaultRouter()

router_posts.register(prefix='apiproduct', basename='apiproduct', viewset=apiproductViewSet)

urlpatterns =  router_posts.urls
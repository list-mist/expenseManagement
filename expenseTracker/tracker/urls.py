from django.urls import path
from .views import UserProfileView
# from rest_framework import routers

# router = routers.DefaultRouter()


# router.register('api/users/profileView',UserProfileView,'users')
urlpatterns = [
     path('api/users/profileView/', UserProfileView.as_view()),
 ]
# urlpatterns = []

# urlpatterns += router.urls
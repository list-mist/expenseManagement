
from django.urls import path
from rest_framework import routers
from .views import UserSignUpViewSet , UserLogin
router = routers.DefaultRouter()


router.register('api/users/signup',UserSignUpViewSet,'users')

urlpatterns = [
    path('api/users/login/',UserLogin.as_view(),name='login'),
    # path('api/users/profileView', UserProfileView.as_view()),
]

urlpatterns += router.urls
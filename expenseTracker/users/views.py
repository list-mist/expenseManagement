
from rest_framework import viewsets, status
from rest_framework.views import APIView
from rest_framework.response import Response

from .models import Account
from .Serializers import UserSignUpSerializer, UserLoginSerializer
from django.contrib.auth import authenticate

from .renderers import UserRenderer
from rest_framework_simplejwt.tokens import RefreshToken

from rest_framework.authentication import TokenAuthentication
def get_tokens_for_user(user):
    refresh = RefreshToken.for_user(user)

    return {
        'refresh': str(refresh),
        'access': str(refresh.access_token),
    }

class UserSignUpViewSet(viewsets.ModelViewSet):
    serializer_class = UserSignUpSerializer
    queryset = Account.objects.all()
    renderer_classes = [UserRenderer]
    # permission_classes = [IsAuthenticated,]
    # authentication_classes = (get_tokens_for_user)
    authentication_classes = [TokenAuthentication]

class UserLogin(APIView):
    
    renderer_classes = [UserRenderer]


    # authentication_classes = [authentication.TokenAuthentication]
    # permission_classes = [permissions.IsAdminUser]
    # serializer_class = UserLoginSerializer
    def post(self, request, format=None):
        serializer = UserLoginSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        email = serializer.data.get('email')
        password = serializer.data.get('password')
        user = authenticate(email=email, password=password)
        # print(email+" "+password)
        if user is not None:
            token = get_tokens_for_user(user)
            return Response({'token':token, 'msg':'Login Success'}, status=status.HTTP_200_OK)
        # else:
        #     return Response({'errors':{'non_field_errors':['Email or Password is not Valid']}}, status=status.HTTP_404_NOT_FOUND)
        return Response({'errors':{'non_field_errors':['Email or Password is not Valid']}}, status=status.HTTP_404_NOT_FOUND)



# class UserProfileView(APIView):
#     renderer_classes = [UserRenderer]
#     permission_classes = [IsAuthenticated,]
#     def get(self, request, format = None):
#         serializer = UserProfileSerializer(request.user)
#         return Response(serializer.data, status = status.HTTP_200_OK)
        


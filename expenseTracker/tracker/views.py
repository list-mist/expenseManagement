
from rest_framework import status
from rest_framework.views import APIView
from rest_framework.response import Response
from .Serializers import  UserProfileSerializer
from users.renderers import UserRenderer
from .models import ExpenseItem
from rest_framework.permissions import IsAuthenticated


class UserProfileView(APIView):
    
    renderer_classes = [UserRenderer]
    permission_classes = [IsAuthenticated,]
    
    def get(self, request, format = None):
        data = ExpenseItem.objects.filter(added_by = request.user)
        serializer = UserProfileSerializer(data, many = True)
        return Response(serializer.data, status = status.HTTP_200_OK)

    def post(self,request, format = None):
        serializer = UserProfileSerializer(data = request.data)
        if serializer.is_valid():
            serializer.save(added_by = request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors)
    def delete(self, request):
        print(request.data, "golu")
        data = ExpenseItem.objects.filter(title = request.data['title'], date = request.data['date'])
        # serializer = UserProfileSerializer(data, many = True)
        data.delete()
        return Response("Data deleted", status = status.HTTP_202_ACCEPTED)

# class UserProfileView(viewsets.ModelViewSet):
#     serializer_class = UserProfileSerializer
#     queryset = ExpenseItem.objects.all()
#     renderer_classes = [UserRenderer]
    # permission_classes = [IsAuthenticated,]
    # print()
    # authentication_classes = (get_tokens_for_user)

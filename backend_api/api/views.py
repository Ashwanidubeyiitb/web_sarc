from django.shortcuts import render
from django.http import JsonResponse
from api.models import User
from rest_framework import viewsets
from .models import Todo
from api.serializer import MyTokenObtainPairSerializer, RegisterSerializer ,TodoSerializer

from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework import status
from rest_framework.decorators import api_view, permission_classes
from rest_framework import viewsets

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer

class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer


# Get All Routes

@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token/',
        '/api/register/',
        '/api/token/refresh/'
    ]
    return Response(routes)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def testEndPoint(request):
    if request.method == 'GET':
        data = f"Congratulation {request.user}, your API just responded to GET request"
        return Response({'response': data}, status=status.HTTP_200_OK)
    elif request.method == 'POST':
        text = "Hello buddy"
        data = f'Congratulation your API just responded to POST request with text: {text}'
        return Response({'response': data}, status=status.HTTP_200_OK)
    return Response({}, status.HTTP_400_BAD_REQUEST)


class TodoView(viewsets.ModelViewSet):
    serializer_class = TodoSerializer
    queryset = Todo.objects.all()

@api_view(['PUT'])
def mark_todo_completed(request, pk):
    todo = Todo.objects.get(pk=pk)
    todo.mark_completed()
    return Response({"message": "Task marked as completed"})

@api_view(['PUT'])
def mark_todo_incomplete(request, pk):
    todo = Todo.objects.get(pk=pk)
    todo.mark_incomplete()
    return Response({"message": "Task marked as incomplete"})    
from rest_framework.response import Response 
from rest_framework.decorators import api_view
from .serializers import  CoursesSerializer, RegisterSerializer
from .models import Courses, Register
from rest_framework  import status 

# Create your views here.
@api_view(['POST'])
def register(request):
    if request.method == 'POST' :
        serializer = RegisterSerializer(data=request.data)
        print(serializer)
        if serializer.is_valid():
            serializer.save()
            return Response({'msg' : 'Saved Successfully', 'data' : serializer.data})
        else:
            return Response({'msg' : 'Failed', 'data' : serializer.errors})

@api_view(['GET'])
def get_courses(request):
    if request.method == 'GET':
        data = Courses.objects.all()
        serializer = CoursesSerializer(data, many=True, context = {'request' : request})
        return Response(serializer.data)


@api_view(['GET'])
def get_users(request):
    if request.method == 'GET':
        data= Register.objects.all()
        serializer = RegisterSerializer(data, many=True, context= {'request' : request})
        return Response(serializer.data)

@api_view(['PUT'])
def update(request, id):
    try:
        instance = Register.objects.get(id=id)
    except Register.DoesNotExist:
        return Response({'error' : 'Not Found'}, status=status.HTTP_404_NOT_FOUND)
    if request.method == 'PUT':
        serializer = RegisterSerializer(instance, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors , status=status.HTTP_400_BAD_REQUEST)

@api_view(['DELETE'])
def delete(request, id):
    try:
        instance = Register.objects.get(id=id)
    except Register.DoesNotExist:
        return Response({'error' : 'Not Found'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == 'DELETE':
        instance.delete()
        return Response({'data' : 'delete'})


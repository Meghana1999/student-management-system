from django.shortcuts import render
from .models import Student
from .serializers import StudentSerializer
from rest_framework.views import APIView 
from django.http.response import JsonResponse
from django.http.response import Http404
from rest_framework.response import Response

# Create your views here.
class studentView(APIView):

    def post(self, request):
        data = request.data
        serializer = StudentSerializer(data=data)

        if serializer.is_valid():
            serializer.save() # saves the model to database
            return JsonResponse("Student Created Succesfully !!!", safe=False)
        
        # if not valid
        return JsonResponse("Failed to ADD student", safe=False)
    
    def get_student(self, pk):
        try:
            student = Student.objects.get(studentId=pk)
            return student
        except Student.DoesNotExist:
            raise Http404

    
    def get(self, request, pk=None):
        if pk:
            data = self.get_student(pk)
            serializer = StudentSerializer(data)
        else:
            data = Student.objects.all()
            serializer = StudentSerializer(data, many=True)

        return Response(serializer.data)
    
    def put(self, request, pk=None):
        student_to_update = Student.objects.get(studentId=pk) 
        serializer = StudentSerializer(instance= student_to_update, data= request.data, partial=True)

        if serializer.is_valid():
            serializer.save() 
            return JsonResponse("Student Updated Succesfully !!!", safe=False) 
        # if not valid
        return JsonResponse("Failed to Update student", safe=False)
    
    def delete(self, request, pk=None):
        student_to_delete = Student.objects.get(studentId=pk)
        student_to_delete.delete()
        return JsonResponse("Student Deleted Succesfully!!!", safe=False)



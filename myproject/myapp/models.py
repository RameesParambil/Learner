from django.db import models

# Create your models here.


class Register(models.Model):
    UserName = models.CharField(max_length=255)
    UserEmail = models.CharField(max_length=255)
    UserPassword = models.CharField(max_length=255)

    def __str__(self):
        return self.UserName


class Courses(models.Model):
    CourseId = models.AutoField(primary_key=True)
    CourseName = models.CharField(max_length=50)
    CoursePrice = models.CharField(max_length=50)
    CourseDescription = models.TextField()
    CourseDetails = models.TextField()
    CourseImage = models.ImageField(upload_to = 'static/images/')

    def __str__(self):
        return self.CourseName

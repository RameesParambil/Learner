from django.urls import path
from .views import register, get_courses , get_users, update, delete

urlpatterns = [
    path('register1', register, name='register'),
    path('getcourses', get_courses, name='get_courses'),
    path('getusers', get_users, name='get_users' ),
    path('userupdate/<int:id>/', update, name='userupdate'),
    path('userdelete/<int:id>/', delete, name='userdelete'),
]
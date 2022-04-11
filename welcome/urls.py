from django.urls import path

from .views import Contact, Welcome

urlpatterns = [
    path('', Welcome.as_view(), name='welcome'),
    path('contact/', Contact.as_view(), name='contact'),
]

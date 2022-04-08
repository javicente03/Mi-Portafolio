from msilib.schema import ListView
from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic.base import TemplateView, View
from django.core.mail import EmailMessage
from django.core.validators import validate_email
import re

# Create your views here.

class Welcome(TemplateView):
    template_name = 'welcome.html'

class Contact(View):
    def post(self, request):
        name = request.POST.get('name').strip()
        email = request.POST.get('email').strip()
        message = request.POST.get('message').strip()

        if name !="" and email !="" and message !="":
            try:
                validate_email(email)
                valid_email = True
            except:
                valid_email = False

            if not valid_email:
                print("NOT EMAIL")
                return HttpResponse(status=400)
            return HttpResponse(status=200)
        else:
            return HttpResponse(status=400)

def send_email(request):
    email = EmailMessage('Vamos','xd', to=['javicentego@gmail.com'])
    email.send()
    return HttpResponse("ok")
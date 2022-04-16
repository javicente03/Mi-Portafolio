from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic.base import TemplateView, View
# from django.core.mail import EmailMessage
from django.core.validators import validate_email
import re
# from portafolio.settings import EMAIL_HOST_USER
from panel.views import Message

# Create your views here.

# class Email():
#     def send_email(request, subject, body, to):
#         email = EmailMessage(subject,body, to=[to])
#         send = email.send()
#         if send:
#             return 1
#         return 0

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
                return HttpResponse(status=409)

            if len(name) > 50 or len(email) > 50 or len(message) > 500:
                return HttpResponse(status=400)

            Message.objects.create(
                name = name,
                email = email,
                message = message
            )
            return HttpResponse(status=200)

            # subject = "Mensaje enviado de "+name+" | "+email
            # email = Email()
            # try:
            #     email.send_email(subject, message, EMAIL_HOST_USER)
            #     return HttpResponse(status=200)
            # except:
            #     return HttpResponse(status=500)                
        else:
            return HttpResponse(status=400)
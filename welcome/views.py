from msilib.schema import ListView
from django.shortcuts import render
from django.views.generic.base import TemplateView

# Create your views here.

class Welcome(TemplateView):
    template_name = 'welcome.html'

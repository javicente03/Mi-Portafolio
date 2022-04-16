from django.shortcuts import render
from django.views.generic.base import TemplateView, View
from django.http import HttpResponse
from django.contrib.auth import authenticate, login as auth_login
from django.shortcuts import redirect
# Create your views here.

class Login(TemplateView):
    template_name = 'login.html'

    def dispatch(self, request, *args, **kwargs):
        if self.request.user.is_authenticated:
            return redirect('/panel/list-pending-message/')
        return super().dispatch(request, *args, **kwargs)

    def get_context_data(self, *args, **kwargs):
        context = super().get_context_data(*args, **kwargs)
        context['next'] = self.request.GET.get('next', None)
        return context

    def post(self, request, *args, **kwargs):
        username = request.POST['username'].strip()
        password = request.POST['password'].strip()
        if username == "" or password == "":
            return HttpResponse(status=400)
        user = authenticate(request, username=username, password=password)
        if user is not None:
            auth_login(request, user,backend='django.contrib.auth.backends.ModelBackend')
            return HttpResponse(self.request.POST.get('next', None), status=200)
        else:
            return HttpResponse(status=403)



# if request.method == 'GET':
#         next_login =  request.GET.get('next', None)
#         if request.user.is_authenticated:
#             return redirect('/dashboard/')     
#         return render(request, "login.html", {'next_login':next_login})
#     elif request.is_ajax():
#         if request.POST['username'] == "" or request.POST['password'] == "":
#             return HttpResponse("Debes ingresar todos los datos solicitados")
#         next_login =  request.GET.get('next', None)
#         username = request.POST['username']
#         password = request.POST['password']
#         next_login = request.POST['next_login']
#         user = authenticate(request, username=username, password=password)
#         if user is not None:
#             if user.userprofile.active:
#                 auth_login(request, user,backend='django.contrib.auth.backends.ModelBackend')
#                 if next_login:
#                     return  HttpResponse(next_login)
#                 else:
#                     return HttpResponse('ok')
#             else:
#                 return HttpResponse("Usuario bloqueado")
    #     else:
    #         return HttpResponse("Usuario o contraseña incorrecta")
    # else:
    #     raise Http404
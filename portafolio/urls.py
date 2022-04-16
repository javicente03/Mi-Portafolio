from django.urls.conf import include
from django.contrib import admin
from django.urls import path
from welcome.views import Welcome
from django.conf import settings
from django.conf.urls.static import static
from django.contrib.auth import views as auth_views
from userprofile.views import Login

urlpatterns = [
    # path('admin/', admin.site.urls),
    path('', Welcome.as_view(), name='welcome'),
    path('welcome/', include('welcome.urls')),
    path('panel/', include('panel.urls')),
    path('login/', Login.as_view(), name='login'),
    path("logout/", auth_views.LogoutView.as_view(), name="logout"),
]+ static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
from django.urls.conf import include
from django.contrib import admin
from django.urls import path
from welcome.views import Welcome
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    # path('admin/', admin.site.urls),
    path('', Welcome.as_view(), name='welcome'),
    path('welcome/', include('welcome.urls')),
] + static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)
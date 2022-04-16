from django.urls import path
from django.contrib.auth.decorators import login_required
from .views import ListPendingMessage, MessageDetail, ListReadMessage

urlpatterns = [
    path('list-pending-message/', login_required(ListPendingMessage.as_view()), name='list-pending-message'),
    path('list-read-message/', login_required(ListReadMessage.as_view()), name='list-read-message'),
    path('message-detail/<int:pk>/', login_required(MessageDetail.as_view()), name='message-detail'),
]
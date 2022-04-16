from django.shortcuts import render
from django.views.generic.detail import DetailView
from django.views.generic.list import ListView
from .models import Message
from django.http import HttpResponse, Http404

# Create your views here.

class ListPendingMessage(ListView):
	model = Message
	template_name = "list_pending_message.html"

	def dispatch(self, request, *args, **kwargs):
		if not self.request.user.is_superuser:
			raise Http404
		return super().dispatch(request, *args, **kwargs)

	def get_queryset(self, *args, **kwargs):
		messages = Message.objects.filter(read=False)
		return messages

class ListReadMessage(ListView):
	model = Message
	template_name = "list_read_message.html"

	def dispatch(self, request, *args, **kwargs):
		if not self.request.user.is_superuser:
			raise Http404
		return super().dispatch(request, *args, **kwargs)

	def get_queryset(self, *args, **kwargs):
		messages = Message.objects.filter(read=True)
		return messages


class MessageDetail(DetailView):
	model = Message
	template_name = "message_detail.html"

	def dispatch(self, request, *args, **kwargs):
		if not self.request.user.is_superuser:
			raise Http404
		return super().dispatch(request, *args, **kwargs)

	def post(self, request, *args, **kwargs):
		if self.request.POST["method"] == 'post':
			Message.objects.filter(pk=self.kwargs['pk']).update(read=True)
		elif self.request.POST["method"] == 'delete':
			Message.objects.filter(pk=self.kwargs['pk']).delete()
		return HttpResponse(status=200)
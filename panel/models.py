from django.db import models
from django.utils import timezone

# Create your models here.
class Message(models.Model):
	name = models.CharField(max_length=50)
	email = models.CharField(max_length=50)
	message = models.CharField(max_length=500)
	read = models.BooleanField(default=False)
	creation_date = models.DateTimeField()
	def save(self, *args, **kwargs):
		if not self.id:
			self.creation_date = timezone.now()
		return super().save(*args, **kwargs) 
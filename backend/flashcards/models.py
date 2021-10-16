from django.db import models

# Create your models here.
class Flashcard(models.Model):
    term = models.TextField()
    definition = models.TextField()
    image_url = models.TextField(blank=True)
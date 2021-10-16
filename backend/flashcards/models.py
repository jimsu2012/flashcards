from django.db import models

class Deck(models.Model):
    title = models.CharField(max_length=255)
    author_id = models.IntegerField()
    description = models.CharField(max_length=511, blank=True)
    stars = models.IntegerField(default=0)

class Flashcard(models.Model):
    deck = models.ForeignKey(Deck, on_delete=models.CASCADE)
    term = models.TextField()
    definition = models.TextField()
    image_url = models.TextField(blank=True)
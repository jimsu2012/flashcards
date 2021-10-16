from rest_framework import serializers
from flashcards.models import Flashcard

class FlashcardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flashcard
        fields = (
            'id',
            'term',
            'definition',
            'image_url'
        )
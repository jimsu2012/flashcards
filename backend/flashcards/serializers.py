from rest_framework import serializers
from flashcards.models import Flashcard, Deck

class FlashcardSerializer(serializers.ModelSerializer):
    class Meta:
        model = Flashcard
        fields = (
            'id',
            'deck',
            'term',
            'definition',
            'image_url'
        )

class DeckSerializer(serializers.ModelSerializer):
    class Meta:
        model = Deck
        fields = (
            'id',
            'title',
            'author_id',
            'description',
            'stars'
        )
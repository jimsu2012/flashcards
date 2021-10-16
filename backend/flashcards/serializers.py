from rest_framework import serializers
from flashcards.models import Flashcard, Deck
from django.contrib.auth.models import User

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
    flashcards = serializers.PrimaryKeyRelatedField(many=True, queryset=Flashcard.objects.all())

    class Meta:
        model = Deck
        fields = (
            'id',
            'title',
            'author_id',
            'description',
            'stars',
            'flashcards'
        )

class UserSerializer(serializers.ModelSerializer):
    decks = serializers.PrimaryKeyRelatedField(many=True, queryset=Deck.objects.all())

    class Meta:
        model = User
        fields = (
            'id',
            'username',
            'decks'
        )
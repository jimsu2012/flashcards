from django.shortcuts import render
from django.contrib.auth.models import User

from rest_framework import generics
from rest_framework.permissions import IsAuthenticatedOrReadOnly

from flashcards.models import Flashcard, Deck
from flashcards.serializers import FlashcardSerializer, DeckSerializer, UserSerializer

class FlashcardList(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)

    queryset = Flashcard.objects.all()
    serializer_class = FlashcardSerializer

class FlashcardDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    
    queryset = Flashcard.objects.all()
    serializer_class = FlashcardSerializer

class DeckList(generics.ListCreateAPIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)

    queryset = Deck.objects.all()
    serializer_class = DeckSerializer

class DeckDetail(generics.RetrieveUpdateDestroyAPIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)
    
    queryset = Deck.objects.all()
    serializer_class = DeckSerializer

class UserList(generics.ListAPIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)

    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveAPIView):
    permission_classes = (IsAuthenticatedOrReadOnly,)

    queryset = User.objects.all()
    serializer_class = UserSerializer
from django.conf.urls import url
from flashcards import views

urlpatterns = [
    url(r'^api/flashcards$', views.FlashcardList.as_view()),
    url(r'^api/flashcards/(?P<pk>[0-9]+)$', views.FlashcardDetail.as_view()),
    url(r'^api/decks$', views.DeckList.as_view()),
    url(r'^api/decks/(?P<pk>[0-9]+)$', views.DeckDetail.as_view()),
]
from django.conf.urls import url
from rest_framework.authtoken.views import obtain_auth_token
from flashcards import views

urlpatterns = [
    url(r'^api/flashcards$', views.FlashcardList.as_view()),
    url(r'^api/flashcards/(?P<pk>[0-9]+)$', views.FlashcardDetail.as_view()),
    url(r'^api/decks$', views.DeckList.as_view()),
    url(r'^api/decks/(?P<pk>[0-9]+)$', views.DeckDetail.as_view()),
    url(r'^api/users$', views.UserList.as_view()),
    url(r'^api/users/(?P<pk>[0-9]+)$', views.UserDetail.as_view()),
    url(r'^api/api-token-auth$', obtain_auth_token, name='api_token_auth'),
]
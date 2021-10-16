from django.conf.urls import url
from flashcards import views

urlpatterns = [
    url(r'^api/flashcards', views.flashcard_list),
    url(r'^api/flashcards/(?P<pk>[0-9]+)$', views.flashcard_detail),
]
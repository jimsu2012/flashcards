from django.shortcuts import render

from django.http.response import JsonResponse
from rest_framework.parsers import JSONParser
from rest_framework import status, generics

from flashcards.models import Flashcard
from flashcards.serializers import FlashcardSerializer
from rest_framework.decorators import api_view

# class FlashcardList(generics.ListCreateAPIView):
#     queryset = Flashcard.objects.all()
#     serializer_class = FlashcardSerializer

# class FlashcardDetail(generics.RetrieveUpdateDestroyAPIView):
#     queryset = Flashcard.objects.all()
#     serializer_class = FlashcardSerializer

@api_view(['GET', 'POST', 'DELETE'])
def flashcard_list(request):
    if request.method == 'GET':
        flashcards = Flashcard.objects.all()

        term = request.GET.get('term', None)
        if term is not None:
            flashcards = flashcards.filter(term__icontains=term)
        
        flashcards_serializer = FlashcardSerializer(flashcards, many=True)
        return JsonResponse(flashcards_serializer.data, safe=False)
    
    elif request.method == 'POST':
        flashcard_data = JSONParser().parse(request)
        flashcard_serializer = FlashcardSerializer(data=flashcard_data)
        if flashcard_serializer.is_valid():
            flashcard_serializer.save()
            return JsonResponse(flashcard_serializer.data, status=status.HTTP_201_CREATED)
        return JsonResponse(flashcard_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        count = Flashcard.objects.all().delete()
        return JsonResponse({'message': f'{count[0]} Flashcards were deleted successfully.'}, status=status.HTTP_204_NO_CONTENT)

@api_view(['GET', 'PUT', 'DELETE'])
def flashcard_detail(request, pk):
    try:
        flashcard = Flashcard.objects.get(pk=pk)
    except Flashcard.DoesNotExist:
        return JsonResponse(
            {'message': 'The flashcard does not exist'},
            status = status.HTTP_404_NOT_FOUND
        )
    
    if request.method == 'GET':
        flashcard_serializer = FlashcardSerializer(flashcard)
        return JsonResponse(flashcard_serializer.data)
    
    elif request.method == 'PUT':
        flashcard_data = JSONParser().parse(request)
        flashcard_serializer = FlashcardSerializer(flashcard, data=flashcard_data)
        if flashcard_serializer.is_valid():
            flashcard_serializer.save()
            return JsonResponse(flashcard_serializer.data)
        return JsonResponse(flashcard_serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    elif request.method == 'DELETE':
        flashcard.delete()
        return JsonResponse({'message': 'Flashcard was deleted successfully!'}, status=status.HTTP_204_NO_CONTENT)
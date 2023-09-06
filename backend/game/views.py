from rest_framework import viewsets, generics, views, permissions
from rest_framework.response import Response

from .permissions import IsAdminOrReadOnly, IsStaffOrReadOnly
from . import models
from . import serializers


class CardVS(viewsets.ModelViewSet):
    queryset = models.Card.objects.all()
    serializer_class = serializers.CardSerializer
    permission_classes = [IsStaffOrReadOnly]
    filterset_fields = ["name"]


class BoardVS(viewsets.ModelViewSet):
    queryset = models.Board.objects.all()
    serializer_class = serializers.BoardSerializer
    permission_classes = [IsStaffOrReadOnly]
    filterset_fields = ["name"]

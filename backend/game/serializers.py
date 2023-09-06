from rest_framework import serializers, permissions

from .permissions import IsStaffOrReadOnly, IsAdminOrReadOnly
from . import models


class CardSerializer(serializers.ModelSerializer):
    permission_classes = [IsStaffOrReadOnly]

    class Meta:
        model = models.Card
        fields = "__all__"


class BoardSerializer(serializers.ModelSerializer):
    permission_classes = [IsStaffOrReadOnly]

    class Meta:
        model = models.Board
        fields = "__all__"

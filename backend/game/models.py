from django.db import models
from django.contrib.auth.models import User


# Create your models here.
class Card(models.Model):
    name = models.CharField(max_length=50)
    description = models.TextField()
    image = models.ImageField(upload_to="cards")

    def __str__(self):
        return self.name


class Board(models.Model):
    name = models.CharField(max_length=80)
    description = models.TextField(null=True, blank=True)
    image = models.ImageField(upload_to="boards")
    cards = models.ManyToManyField(Card, related_name="boards")
    author = models.ForeignKey(User, on_delete=models.CASCADE)
    popularity = models.BigIntegerField(default=0)

    def __str__(self):
        return self.name

from django.urls import path, include
from rest_framework.routers import DefaultRouter

from . import views


router = DefaultRouter()
router.register("cards", views.CardVS)
router.register("boards", views.BoardVS)

urlpatterns = [
    path("", include(router.urls)),
]

from rest_framework.routers import DefaultRouter
from .views import AlbumViewSet, TrackViewSet

router = DefaultRouter()
router.register(r'albumes', AlbumViewSet)
router.register(r'tracks', TrackViewSet)

urlpatterns = router.urls

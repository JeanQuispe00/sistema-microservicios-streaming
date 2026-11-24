from django.db import models


class Album(models.Model):
    titulo = models.CharField(max_length=200)
    artista = models.CharField(max_length=200)
    anio = models.IntegerField()

    def __str__(self):
        return f"{self.titulo} - {self.artista}"


class Track(models.Model):
    album = models.ForeignKey(
        Album,
        related_name='tracks',
        on_delete=models.CASCADE
    )
    titulo = models.CharField(max_length=200)
    duracion = models.IntegerField(help_text="Duración en segundos")

    def __str__(self):
        return self.titulo

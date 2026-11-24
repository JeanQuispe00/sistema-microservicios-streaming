# Microservicio de Catálogo (Django REST Framework)

## Requisitos previos
- Python 3.10+
- pip

## Configuración y ejecución

```bash
# Crear y activar entorno virtual
python -m venv venv
venv\Scripts\activate

# Instalar dependencias
pip install -r requirements.txt

# Crear base de datos y migraciones
python manage.py makemigrations
python manage.py migrate

# (Opcional) Crear superusuario para el admin
python manage.py createsuperuser

# Levantar servidor
python manage.py runserver 8000
```

## Endpoints disponibles

| Método | Ruta                          | Descripción              |
|--------|-------------------------------|--------------------------|
| GET    | /api/albumes/                 | Listar álbumes           |
| POST   | /api/albumes/                 | Crear álbum              |
| GET    | /api/albumes/{id}/            | Detalle de álbum         |
| GET    | /api/tracks/                  | Listar tracks            |
| POST   | /api/tracks/                  | Crear track              |
| GET    | /admin/                       | Panel de administración  |

### Ejemplo POST /api/albumes/
```json
{
  "titulo": "Random Access Memories",
  "artista": "Daft Punk",
  "anio": 2013
}
```

### Ejemplo POST /api/tracks/
```json
{
  "album": 1,
  "titulo": "Get Lucky",
  "duracion": 248
}
```

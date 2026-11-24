# Sistema Distribuido de Streaming y Telemetría en Tiempo Real

Proyecto integrador de laboratorio - Arquitectura de Microservicios

## Descripción

Prototipo funcional de una plataforma de gestión musical y eventos basada en microservicios con el patrón **Database-per-Service**. Incluye:

- Microservicio de catálogo (Django REST Framework + SQLite)
- Microservicio de eventos/usuarios (Node.js + Firebase Firestore)
- Observabilidad en tiempo real con **New Relic APM**

## Arquitectura


```
Cliente (Postman)
        │
        ├──────────────────────────────┐
        │                              │
        ▼                              ▼
Microservicio Catálogo          Microservicio Eventos
Django REST (puerto 8000)       Node.js + Firebase (puerto 3000)
        │                              │
        └──────────────┬───────────────┘
                       │
                       ▼
                 New Relic APM
```


## Tecnologías utilizadas

- **Backend**: Django REST Framework, Node.js + Express
- **Bases de datos**: SQLite, Cloud Firestore
- **Observabilidad**: New Relic APM
- **Herramientas**: Postman, Firebase Admin SDK

## Cómo ejecutar

### Microservicio de Catálogo (Django)
```bash
cd microservicio-catalogo
python -m venv venv
source venv/bin/activate        # Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver 8000

cd microservicio-eventos
npm install
# Colocar serviceAccountKey.json y configurar newrelic.js
npm start


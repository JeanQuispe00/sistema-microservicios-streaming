# Microservicio de Eventos (Node.js + Firebase + New Relic)

## Requisitos previos
- Node.js 18+
- Cuenta de Firebase con proyecto creado
- Cuenta de New Relic (License Key)

## Configuración

1. **Firebase**
   - Ve a Firebase Console → Project settings → Service accounts
   - Genera una nueva clave privada (`serviceAccountKey.json`)
   - Colócala en esta carpeta

2. **New Relic**
   - Edita `newrelic.js` y reemplaza `LICENSE_KEY` por tu License Key real

3. **Instalar dependencias**
   ```bash
   npm install
   ```

4. **Ejecutar**
   ```bash
   # Con New Relic (recomendado)
   npm start
   ```

## Endpoints

| Método | Ruta       | Descripción                          |
|--------|------------|--------------------------------------|
| GET    | /          | Health check                         |
| GET    | /eventos   | Listar últimos eventos               |
| POST   | /eventos   | Registrar nuevo evento               |


'use strict';

/**
 * Configuración del agente New Relic
 */
exports.config = {
  app_name: ['microservicio-eventos-lab'],
  license_key: 'ingresar_key',
  logging: {
    level: 'info',
    filepath: 'stdout'
  },
  distributed_tracing: {
    enabled: true
  }
};

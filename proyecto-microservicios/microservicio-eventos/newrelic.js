'use strict';

/**
 * Configuración del agente New Relic
 */
exports.config = {
  app_name: ['microservicio-eventos-lab'],
  license_key: 'a282c57fa589fe8edcdc7461a1e261080d0bNRAL',
  logging: {
    level: 'info',
    filepath: 'stdout'
  },
  distributed_tracing: {
    enabled: true
  }
};

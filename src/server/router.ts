import * as express from 'express';
import * as health from './controllers/health';
import * as renderer from './controllers/renderer';

export function router(app: express.Application) {
  app.use('/public', express.static('dist'));
  app.get('/api/health', health.get);
  app.get('*', renderer.get);
}

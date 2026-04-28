import { createServer } from 'node:http';
import { createApp, eventHandler, toNodeListener, fromWebHandler, setResponseHeader } from 'h3';
import { readFileSync, existsSync, statSync } from 'node:fs';
import { join, extname } from 'node:path';
import handler from './dist/server/server.js';

const MIME_TYPES = {
  '.html': 'text/html',
  '.js': 'text/javascript',
  '.css': 'text/css',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.wav': 'audio/wav',
  '.mp4': 'video/mp4',
  '.woff': 'application/font-woff',
  '.ttf': 'application/font-ttf',
  '.eot': 'application/vnd.ms-fontobject',
  '.otf': 'application/font-otf',
  '.wasm': 'application/wasm',
  '.ico': 'image/x-icon'
};

const app = createApp();

// Static file middleware
app.use(eventHandler(async (event) => {
  const path = event.path.split('?')[0];
  if (path === '/' || path === '/index.html') return;

  const filePath = join(process.cwd(), 'dist', 'client', path);
  
  if (existsSync(filePath) && !statSync(filePath).isDirectory()) {
    try {
      const content = readFileSync(filePath);
      const contentType = MIME_TYPES[extname(filePath)] || 'application/octet-stream';
      setResponseHeader(event, 'Content-Type', contentType);
      return content;
    } catch (e) {
      // Fall through
    }
  }
}));

// Fallback to TanStack Start web handler
app.use(eventHandler(fromWebHandler(handler.fetch)));

const port = process.env.PORT || 3000;
createServer(toNodeListener(app)).listen(port, '0.0.0.0', () => {
  console.log(`Server listening on http://0.0.0.0:${port}`);
});

import { copyFileSync } from 'fs';
import { join } from 'path';

try {
  copyFileSync(join('dist', 'index.html'), join('dist', '404.html'));
  console.log('Successfully copied dist/index.html to dist/404.html');
} catch (err) {
  console.error('Error copying file:', err);
  process.exit(1);
}

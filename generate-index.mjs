import { spawn } from 'child_process';
import { writeFileSync } from 'fs';

const server = spawn('node', ['server.mjs']);

server.stdout.on('data', async (data) => {
  const output = data.toString();
  console.log(output);
  if (output.includes('Server listening')) {
    try {
      const res = await fetch('http://localhost:3000');
      const html = await res.text();
      writeFileSync('dist/client/index.html', html);
      console.log('Successfully generated dist/client/index.html');
      server.kill();
      process.exit(0);
    } catch (e) {
      console.error(e);
      server.kill();
      process.exit(1);
    }
  }
});

server.stderr.on('data', (data) => {
  console.error(data.toString());
});

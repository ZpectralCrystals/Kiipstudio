import { createReadStream, existsSync, statSync } from 'node:fs';
import { createServer } from 'node:http';
import { extname, join, normalize, resolve } from 'node:path';

const root = resolve('dist');
const port = Number(process.env.PORT || 4322);
const host = process.env.HOST || '0.0.0.0';

const mimeTypes = {
  '.css': 'text/css; charset=utf-8',
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.webp': 'image/webp',
  '.woff2': 'font/woff2',
};

const toFilePath = (req) => {
  const url = req.url || '/';
  const decoded = decodeURIComponent(new URL(url, 'http://localhost').pathname);
  const normalized = normalize(decoded).replace(/^(\.\.[/\\])+/, '');
  const candidate = join(root, normalized);
  if (existsSync(candidate) && statSync(candidate).isDirectory()) {
    return { filePath: join(candidate, 'index.html'), statusCode: 200 };
  }
  if (existsSync(candidate)) return { filePath: candidate, statusCode: 200 };

  if (req.headers.accept?.includes('text/html')) {
    return { filePath: join(root, 'index.html'), statusCode: 200 };
  }

  return { filePath: join(root, '404.html'), statusCode: 404 };
};

const cacheControl = (filePath) => {
  const relativePath = filePath.replace(root, '').replaceAll('\\', '/');
  if (relativePath.endsWith('.html')) return 'no-cache';
  return 'public, max-age=31536000, immutable';
};

createServer((req, res) => {
  const { filePath, statusCode } = toFilePath(req);
  const extension = extname(filePath);

  res.statusCode = existsSync(filePath) ? statusCode : 404;
  res.setHeader('Content-Type', mimeTypes[extension] || 'application/octet-stream');
  res.setHeader('Cache-Control', cacheControl(filePath));
  res.setHeader('X-Content-Type-Options', 'nosniff');

  if (!existsSync(filePath)) {
    res.end('Not found');
    return;
  }

  createReadStream(filePath).pipe(res);
}).listen(port, host, () => {
  console.log(`Static site ready: http://${host}:${port}`);
});

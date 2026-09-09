// ---------------------------------------------------------------------------
// Generate a real, downloadable PDF of the /resume page.
//
// Renders the already-built static export (out/resume/index.html) in headless
// Chrome with print media emulation, then writes public/files/Kabir-Faye-CV.pdf.
//
// Run AFTER `next build` (needs out/). Wired as the "pdf" npm script.
// Uses puppeteer-core against the system Google Chrome (no bundled Chromium).
// ---------------------------------------------------------------------------
import { createServer } from 'node:http';
import { readFile, mkdir, stat } from 'node:fs/promises';
import { join, extname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import puppeteer from 'puppeteer-core';

const __dirname = fileURLToPath(new URL('.', import.meta.url));
const root = resolve(__dirname, '..');
const outDir = join(root, 'out');
const pdfDir = join(root, 'public', 'files');
const pdfPath = join(pdfDir, 'Kabir-Faye-CV.pdf');

const CHROME_CANDIDATES = [
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/Applications/Chromium.app/Contents/MacOS/Chromium',
  '/usr/bin/google-chrome',
  '/usr/bin/chromium-browser',
  process.env.CHROME_PATH,
].filter(Boolean);

const MIME = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'text/javascript',
  '.json': 'application/json',
  '.svg': 'image/svg+xml',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.woff2': 'font/woff2',
  '.ico': 'image/x-icon',
};

async function resolveChrome() {
  for (const p of CHROME_CANDIDATES) {
    try {
      await stat(p);
      return p;
    } catch {
      /* keep looking */
    }
  }
  throw new Error(
    'No Chrome/Chromium found. Set CHROME_PATH to a browser executable.',
  );
}

// Minimal static file server over the out/ export.
function startServer() {
  const server = createServer(async (req, res) => {
    try {
      let urlPath = decodeURIComponent((req.url || '/').split('?')[0]);
      if (urlPath.endsWith('/')) urlPath += 'index.html';
      let filePath = join(outDir, urlPath);
      try {
        if ((await stat(filePath)).isDirectory()) {
          filePath = join(filePath, 'index.html');
        }
      } catch {
        /* fall through to read attempt */
      }
      const body = await readFile(filePath);
      res.writeHead(200, {
        'Content-Type': MIME[extname(filePath)] || 'application/octet-stream',
      });
      res.end(body);
    } catch {
      res.writeHead(404);
      res.end('Not found');
    }
  });
  return new Promise((res) => {
    server.listen(0, '127.0.0.1', () => res(server));
  });
}

async function main() {
  await stat(outDir).catch(() => {
    throw new Error('out/ not found. Run `next build` first.');
  });
  await mkdir(pdfDir, { recursive: true });

  const executablePath = await resolveChrome();
  const server = await startServer();
  const { port } = server.address();
  const url = `http://127.0.0.1:${port}/resume/`;

  const browser = await puppeteer.launch({
    executablePath,
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  });
  try {
    const page = await browser.newPage();
    await page.emulateMediaType('print');
    await page.goto(url, { waitUntil: 'networkidle0' });
    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      margin: { top: '18mm', bottom: '18mm', left: '22mm', right: '22mm' },
    });
    console.log(`PDF written: ${pdfPath}`);
  } finally {
    await browser.close();
    server.close();
  }
}

main().catch((err) => {
  console.error(err.message || err);
  process.exit(1);
});

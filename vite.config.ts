import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, Plugin} from 'vite';

function thenamApiPlugin(): Plugin {
  const inquiries: Array<Record<string, unknown>> = [];

  return {
    name: 'thenam-api-server',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/api/contact' && req.method === 'POST') {
          let body = '';
          req.on('data', (chunk) => {
            body += chunk;
          });
          req.on('end', () => {
            try {
              const data = JSON.parse(body || '{}');
              if (!data.name?.trim() || !data.email?.trim() || !data.message?.trim()) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.end(
                  JSON.stringify({
                    success: false,
                    error: 'Name, email, and project description are required.',
                  })
                );
                return;
              }

              // Basic email validation
              const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
              if (!emailRegex.test(data.email)) {
                res.statusCode = 400;
                res.setHeader('Content-Type', 'application/json');
                res.end(
                  JSON.stringify({
                    success: false,
                    error: 'Please provide a valid business email address.',
                  })
                );
                return;
              }

              const inquiryId = `THN-${Date.now().toString(36).toUpperCase()}-${Math.floor(100 + Math.random() * 900)}`;
              const submission = {
                id: inquiryId,
                ...data,
                receivedAt: new Date().toISOString(),
                status: 'Logged & Dispatched to Solutions Team',
              };

              inquiries.unshift(submission);

              res.statusCode = 200;
              res.setHeader('Content-Type', 'application/json');
              res.end(
                JSON.stringify({
                  success: true,
                  message:
                    'Inquiry successfully registered with Thenam Software Solutions. Our engineering team will review your specifications and contact you within 24 hours.',
                  inquiryId,
                  receivedAt: submission.receivedAt,
                })
              );
            } catch {
              res.statusCode = 400;
              res.setHeader('Content-Type', 'application/json');
              res.end(JSON.stringify({ success: false, error: 'Invalid JSON request payload.' }));
            }
          });
          return;
        }

        if (req.url === '/api/inquiries' && req.method === 'GET') {
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.end(JSON.stringify({ success: true, count: inquiries.length, inquiries }));
          return;
        }

        next();
      });
    },
  };
}

import { fileURLToPath } from 'url';

const rootDir = fileURLToPath(new URL('.', import.meta.url));

export default defineConfig(() => {
  return {
    plugins: [react(), tailwindcss(), thenamApiPlugin()],
    resolve: {
      alias: {
        '@': rootDir,
      },
    },
    server: {
      port: 3000,
      host: '0.0.0.0',
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      hmr: process.env.DISABLE_HMR !== 'true',
      watch: process.env.DISABLE_HMR === 'true' ? null : {},
    },
  };
});

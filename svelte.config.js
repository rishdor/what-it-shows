import adapter from '@sveltejs/adapter-static';
import { mdsvex } from 'mdsvex';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const projectRoot = dirname(fileURLToPath(import.meta.url));

const config = {
  extensions: ['.svelte', '.svx'],
  preprocess: [
    mdsvex({
      extensions: ['.svx'],
      layout: {
        runbook: resolve(projectRoot, 'src/lib/layouts/runbook.svelte')
      }
    })
  ],
  kit: {
    adapter: adapter({ pages: 'build', assets: 'build' }),
    alias: {
      '#lib': './src/lib'
    },
    prerender: {
      entries: ['/kb']
    }
  }
};

export default config;

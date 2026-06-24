import { readFileSync } from 'fs';
import { images } from '../src/utils/images.js';

function collectUrls(obj, urls = new Set()) {
  for (const value of Object.values(obj)) {
    if (typeof value === 'string' && value.startsWith('http')) {
      urls.add(value);
    } else if (typeof value === 'object' && value !== null) {
      collectUrls(value, urls);
    }
  }
  return urls;
}

const urls = [...collectUrls(images)];
console.log(`Checking ${urls.length} unique URLs...\n`);

const results = await Promise.all(
  urls.map(async (url) => {
    try {
      const res = await fetch(url, { method: 'GET', redirect: 'follow' });
      const contentType = res.headers.get('content-type') || '';
      const isImage = contentType.startsWith('image/');
      return {
        url,
        status: res.status,
        ok: res.ok && isImage,
        contentType,
      };
    } catch (err) {
      return { url, status: 'ERR', ok: false, error: err.message };
    }
  })
);

const broken = results.filter((r) => !r.ok);
const ok = results.filter((r) => r.ok);

console.log(`OK: ${ok.length}  Broken: ${broken.length}\n`);

if (broken.length) {
  console.log('BROKEN URLs:');
  for (const r of broken) {
    const id = r.url.match(/photo-([^?]+)/)?.[1] ?? r.url;
    console.log(`  [${r.status}] ${id} ${r.error ?? r.contentType ?? ''}`);
  }
}

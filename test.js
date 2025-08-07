const fs = require('fs');
const assert = require('assert');

const html = fs.readFileSync('index.html', 'utf8');
const css = fs.readFileSync('style.css', 'utf8');

// HTML content tests
assert(html.includes('Tentang Kami'), 'Missing Tentang Kami section');
assert(html.includes('Layanan'), 'Missing Layanan section');
assert(html.includes('Proyek'), 'Missing Proyek section');
assert(html.includes('Kontak'), 'Missing Kontak section');
assert(html.includes('Sistem Absensi Online'), 'Missing project Absensi Online');
assert(html.includes('Portal Layanan Visa & Paspor'), 'Missing project Visa & Paspor');
assert(html.includes('ned.creative.tech@gmail.com'), 'Missing email');
assert(html.includes('0857-7973-2633'), 'Missing WhatsApp number');

// CSS layout and theme tests
assert(/\.columns\s*{[\s\S]*?display:\s*flex/.test(css), 'Columns not flex layout');
assert(/body\s*{[\s\S]*?background:\s*#0d1117/.test(css), 'Body not dark theme');
assert(/\.hero\s*{[\s\S]*?linear-gradient/.test(css), 'Hero missing gradient');

console.log('All tests passed.');

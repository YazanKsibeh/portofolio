import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';

const buildDir = 'build';
const basePath = '/portofolio';
const indexPath = join(buildDir, 'index.html');

try {
	let html = readFileSync(indexPath, 'utf-8');
	
	// Replace relative paths with absolute paths
	html = html.replace(/href="\.\//g, `href="${basePath}/`);
	html = html.replace(/src="\.\//g, `src="${basePath}/`);
	html = html.replace(/import\("\.\//g, `import("${basePath}/`);
	
	writeFileSync(indexPath, html, 'utf-8');
	console.log('Fixed asset paths in index.html');
} catch (error) {
	console.error('Error fixing paths:', error);
	process.exit(1);
}


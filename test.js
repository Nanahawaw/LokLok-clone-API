import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const authFilePath = path.join(__dirname, 'routes', 'auth.js');

console.log('Path to auth.js file:', authFilePath);
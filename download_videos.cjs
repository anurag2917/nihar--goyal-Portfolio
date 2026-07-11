const fs = require('fs');
const https = require('https');
const path = require('path');

const downloads = [
  { id: '16aQWY6q1mHLnT0-C5Lrl6wju_GlPpq-S', filename: 'drive_3d_2.mp4' },
  { id: '1cw70dyVmBPqjxtBRU77_u4kPdom16AAP', filename: 'drive_3d_3.mp4' },
  { id: '17EmG7m3UVXdMkumJ63bo-6TDjvlv8oke', filename: 'drive_3d_4.mp4' },
  { id: '1YTRUz6oUXm40xlTkFb8q-uPmrDJL7zUn', filename: 'drive_3d_5.mp4' },
  { id: '1who6338-zX8Kaad-4GFqOskqTYUen1XT', filename: 'drive_3d_6.mp4' }
];

async function downloadFile(url, dest) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      // Handle all redirect codes: 301, 302, 303, 307, 308
      if (response.statusCode >= 300 && response.statusCode < 400 && response.headers.location) {
        file.close();
        fs.unlink(dest, () => {}); // Delete the temporary file
        downloadFile(response.headers.location, dest).then(resolve).catch(reject);
        return;
      }
      if (response.statusCode !== 200) {
        file.close();
        fs.unlink(dest, () => {});
        reject(new Error(`Failed to get '${url}' (Status Code: ${response.statusCode})`));
        return;
      }
      response.pipe(file);
      file.on('finish', () => {
        file.close();
        resolve();
      });
    }).on('error', (err) => {
      file.close();
      fs.unlink(dest, () => {});
      reject(err);
    });
  });
}

async function main() {
  for (const item of downloads) {
    const dest = path.join(__dirname, 'public', 'assets', item.filename);
    const url = `https://drive.google.com/uc?export=download&id=${item.id}`;
    console.log(`Downloading ${item.filename} from ID ${item.id}...`);
    try {
      await downloadFile(url, dest);
      const stats = fs.statSync(dest);
      console.log(`Successfully downloaded ${item.filename} (${(stats.size / (1024 * 1024)).toFixed(2)} MB)`);
    } catch (error) {
      console.error(`Failed to download ${item.filename}: ${error.message}`);
    }
  }
}

main();

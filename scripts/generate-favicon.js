const fs = require('fs');
const path = require('path');
// Pure-Node ICO generator that embeds a single PNG image inside an ICO container.
// ICO format: [6-byte header][16-byte directory][image data]

const input = path.join(__dirname, '..', 'public', 'assets', 'F.png');
const output = path.join(__dirname, '..', 'public', 'favicon.ico');

try {
  const png = fs.readFileSync(input);
  const pngSize = png.length;

  const header = Buffer.alloc(6);
  // reserved (2 bytes)
  header.writeUInt16LE(0, 0);
  // type: 1 for icon
  header.writeUInt16LE(1, 2);
  // count: 1 image
  header.writeUInt16LE(1, 4);

  const dir = Buffer.alloc(16);
  // width (1 byte) - 0 means 256
  dir.writeUInt8(0, 0);
  // height (1 byte) - 0 means 256
  dir.writeUInt8(0, 1);
  // color count
  dir.writeUInt8(0, 2);
  // reserved
  dir.writeUInt8(0, 3);
  // color planes (2 bytes)
  dir.writeUInt16LE(1, 4);
  // bits per pixel (2 bytes)
  dir.writeUInt16LE(32, 6);
  // bytes in resource (4 bytes)
  dir.writeUInt32LE(pngSize, 8);
  // image offset (4 bytes) -- header (6) + dir (16) = 22
  const imageOffset = 6 + 16;
  dir.writeUInt32LE(imageOffset, 12);

  const out = Buffer.concat([header, dir, png]);
  fs.writeFileSync(output, out);
  console.log('generated', output);
} catch (err) {
  console.error('failed to generate favicon:', err);
  process.exit(1);
}

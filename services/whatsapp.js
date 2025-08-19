const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');

const client = new Client({
  authStrategy: new LocalAuth(),
  puppeteer: {
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox'],
  },
});

console.log("📡 Memulai WhatsApp Client...");

client.on('qr', qr => {
  console.log("\n📌 Scan QR code berikut di WhatsApp:");
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log("✅ WhatsApp siap digunakan!");
});

client.on('disconnected', reason => {
  console.log(`❌ Terputus dari WhatsApp. Alasan: ${reason}`);
});

client.initialize();

module.exports = client;

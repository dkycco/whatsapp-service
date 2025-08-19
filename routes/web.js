const express = require('express');
const router = express.Router();
const { lastStatus } = require('../services/whatsapp');
const WhatsappController = require('../controller/WhatsappController');
const api_key = '@20208395';

router.get('/', (req, res) => {
   res.send('Whatsapp service is running!')
});

router.post('/api/whatsapp', WhatsappController.sendMessage);

module.exports = router;
const whatsapp = require('../services/whatsapp');

module.exports = {
   sendMessage: async (req, res) => {
      const { api_key, no_hp, pesan } = req.body;
      const phone = no_hp.replace(/[^0-9]/g, '') + '@c.us';
      const key = '@20208395'

      function delay(ms) {
         return new Promise(resolve => setTimeout(resolve, ms));
      }

      try {
         if (!api_key) {
            return res.status(403).json({ message: 'Harap gunakan API Key!' });
         }

         if (api_key !== key) {
            return res.status(403).json({ message: 'API Key tidak valid' });
         }

         if (phone) {
            try {
               await delay(3000);
               await whatsapp.sendMessage(phone, pesan)
               return res.status(200).json({ message: `Pesan terkirim ke ${no_hp}`, type: 'OK (200)' })
            } catch (error) {
               return res.status(500).json({ message: `Pesan gagal terkirim ke ${no_hp}`, type: 'Internal Server Error (500)' })
            }
         }
      } catch (error) {
         return res.status(404).json({ message: error });
      }
   }
}
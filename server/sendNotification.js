// server/sendNotification.js
const admin = require('firebase-admin');
const serviceAccount = require('./path/to/serviceAccountKey.json'); // Replace with your service account key path

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const messaging = admin.messaging();

const sendNotification = (token, payload) => {
  messaging.send({
    token,
    notification: {
      title: payload.title,
      body: payload.body,
      icon: payload.icon,
    },
  })
  .then(response => {
    console.log('Successfully sent message:', response);
  })
  .catch(error => {
    console.log('Error sending message:', error);
  });
};

module.exports = sendNotification;

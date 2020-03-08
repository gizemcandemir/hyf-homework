
const serviceAccount = require("../config/private-admin-key.json");
const admin = require("firebase-admin");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://react-w5-exercise-1.firebaseio.com"
  });

module.exports = admin;

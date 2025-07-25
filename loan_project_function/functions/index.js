/**
 * Import function triggers from their respective submodules:
 *
 * const {onCall} = require("firebase-functions/v2/https");
 * const {onDocumentWritten} = require("firebase-functions/v2/firestore");
 *
 * See a full list of supported triggers at https://firebase.google.com/docs/functions
 */

// const {onRequest} = require("firebase-functions/v2/https");
// const logger = require("firebase-functions/logger");

// // Create and deploy your first functions
// // https://firebase.google.com/docs/functions/get-started

// exports.helloWorld = onRequest((request, response) => {
//   logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });



const admin = require('firebase-admin');
admin.initializeApp(); 



const rolesFunctions = require('./roles');


// Export the user functions
exports.deleteUserRoles = rolesFunctions.deleteUserV2;
exports.deleteUserRegister = rolesFunctions.deleteUserRegisterV2;
exports.deleteAllUserWithCustomers = rolesFunctions.deleteAllUserRegisterV2WithCustomersRequest;



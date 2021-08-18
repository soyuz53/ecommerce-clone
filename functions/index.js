const functions = require("firebase-functions");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51J9PHFCobu8i8m0irg4RKuwjN4zpTuOEKlb8S3eqWstpzrBlPjcQMUQWiIJVbsWmSUKzZ5AgIjV6Sg0CY84E2S2S00TGyCoqLY"
);

//API

// - App config
const app = express();

// -Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// -API routes
app.get("/", (request, response) => response.status(200).send("hello world"));

app.post("/payments/create", async (request, response) => {
  const total = request.query.total;

  console.log("Payment Request Received >>", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total,
    currency: "usd",
  });

  // 201- Ok-Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});
// - Listen Command
exports.api = functions.https.onRequest(app);

//http://localhost:5001/myown-ecommerce/us-central1/api

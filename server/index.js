const express = require("express");
const Stripe = require("stripe");
const bodyParser = require('body-parser');
const stripe = new Stripe(
  "sk_test_51LkgOXFRa7jGHwTAlzgwOAx1Ot9ESZTfY4BTCZq98tl0lJln2IXbF9PGnJsXCDC1xF3RUb4qmJrnfnRv6G6nlWxt00CLrtqDDX"
);

const cors = require("cors");

const app = express();

app.use(cors({ origin: "http://localhost:3000" }));
app.use(express.json());

//lo que llega procedente del frontend.
app.post("/api/checkout", async (req, res) => {
  console.log(req.body);
  const { id, amount } = req.body;

  try {
    const payment = await stripe.paymentIntents.create({
      amount,
      currency: "COP",
      description: "Basket of products",
      payment_method: id,
      confirm: true,
    });

    console.log(payment);
    return res.status(200).json({ message: "Successful Payment"});
  } catch (error) {
    return res.json({ message: error.raw.message });
  }
});

app.listen(3001, () => {
  console.log("Server on port", 3001);
});

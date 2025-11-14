require("dotenv").config();

const config = Object.freeze({
    port: process.env.PORT || 3000,
    databaseURI: process.env.MONGODB_URI || "mongodb+srv://adnanchanna:adnanchanna@cluster0.gsjhzog.mongodb.net/restaurant_pos?retryWrites=true&w=majority",
    nodeEnv : process.env.NODE_ENV || "development",
    accessTokenSecret: "my_dummy_jwt_secret_123456789",
    razorpayKeyId: process.env.RAZORPAY_KEY_ID,
    razorpaySecretKey: process.env.RAZORPAY_KEY_SECRET,
    razorpyWebhookSecret: process.env.RAZORPAY_WEBHOOK_SECRET
});

module.exports = config;

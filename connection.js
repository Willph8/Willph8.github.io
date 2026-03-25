require('dotenv').config();
const mongoose = require('mongoose');

// This pulls the string from your .env file locally
const uri = process.env.MONGO_URI; 

mongoose.connect(uri)
  .then(() => console.log("🚀 GodiyakumGo is live!"))
  .catch(err => console.error("❌ Connection error:", err));


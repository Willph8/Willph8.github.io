const { MongoClient } = require('mongodb');

// PASTE YOUR FULL ATLAS STRING HERE
const url = "mongodb+srv://phetogomosai_db_user:Willph897@cluster0.nihe0gt.mongodb.net/?appName=Cluster0";

const client = new MongoClient(url);

async function run() {
  try {
    console.log("Attempting to connect to Atlas...");
    await client.connect();
    console.log("✅ SUCCESS! Connected to the Cloud.");
    
    const admin = client.db("admin").admin();
    console.log(await admin.serverStatus()); 
  } catch (err) {
    console.error("❌ CONNECTION FAILED:");
    console.error(err);
  } finally {
    await client.close();
  }
}

run();

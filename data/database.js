const mongodb = require("mongodb");

const MongoClient = mongodb.MongoClient;

let database;

async function connectoToDatabase() {
  //connect to MongoDB database server
  const client = await MongoClient.connect("mongodb://localhost:27017");
  //connect to specific database on that MongoDB server
  database = client.db("online-shop");
}

function getDb() {
  if (!database) {
    throw new Error("You must connect first!");
  }

  return database;
}

module.exports = {
  connectoToDatabase: connectoToDatabase,
  getDb: getDb,
};

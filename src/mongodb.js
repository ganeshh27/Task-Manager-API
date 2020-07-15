//CRUD

const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;
const connectionURL =
  process.env.MONGODB_URL;
const databaseName = "task-manager";

MongoClient.connect(
  connectionURL, {
    useNewUrlParser: true,
  },
  (error, client) => {
    if (error) {
      return console.log("Unable to connect to Database " + error);
    }
    console.log("Database " + databaseName + " Connected succesfully");

    const db = client.db(databaseName);

    db.collection("users")
      .deleteMany({
        age: 29,
      })
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  }
);
const mongoose = require("mongoose");

mongoose.connect(
  "mongodb+srv://ganeshh27:39gJKMl8CETd0Dk2@cluster0-u8frv.mongodb.net/task-manager-api?retryWrites=true&w=majority", {
    useNewUrlParser: true,
    useCreateIndex: true,
  }
);
const express = require("express");
const app = express();
let counter = 0;

app.get("/mock", (req, res) => {
  const list = [true, false];
  var item = list[Math.floor(Math.random() * list.length)];

  if (item) {
    res.status(200).json({
      IsDatabaseActive: item,
    });
  } else {
    res.status(500).json({
      IsDatabaseActive: item,
    });
  }
});

app.get("/mock-2", (req, res) => {
  counter++;
  if (counter <= 100) {
    res.status(200).json({
      IsDatabaseActive: true,
    });
  } else if (counter <= 150) {
    res.status(500).json({
      IsDatabaseActive: false,
    });
  } else {
    counter = 0;
  }
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server started on port 3000");
});

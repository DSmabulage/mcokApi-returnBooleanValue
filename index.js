const express = require("express");
const app = express();

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

app.listen(3000, () => {
  console.log("Server started on port 3000");
});

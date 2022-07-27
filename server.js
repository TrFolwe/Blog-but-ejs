const express = require("express");
const app = express();
const path = require("path");
const bodyParser = require("body-parser");
const { PORT, blogContentCount } = require("./config.json");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use("/css", express.static(__dirname + "/views"));

const blogContents = [];

for (let i = 1; i <= blogContentCount; i++) {
  blogContents.push({
    title: `Problem ${i}`,
    content: `Problem ${i} contect.`,
    author: `User ${i}`,
    createdAt: new Date().toLocaleDateString()
  });
}


app.get("/", (req, res) => {
  res.render("Blog.ejs", { blogContents });
});

app.listen(PORT, () => console.log(`Server listening on ${PORT} Port`));
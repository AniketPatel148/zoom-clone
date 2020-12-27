const express = require("express");
const { v4: uuidv4 } = require("uuid");

const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
	res.redirect(`/${uuidv4()}`);
});
app.get("/:room", (req, res) => {
	res.render("room", {
		roomId: req.params.room,
	});
});

app.listen(3000, () => {
	console.log("Server started on localhost:3000");
});

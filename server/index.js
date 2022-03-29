const PORT = 8000;
const express = require("express");
const bcrypt = require("bcrypt");
const { v1: uuidv1 } = require("uuid");
const { connect } = require("getstream");
//const StreamChat = require("stream-chat").StreamChat;
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
const API_KEY = "xbcme9esbhgq";
const API_SECRET =
  "8scyfuxgzbhy9wfapw2t7c7uyqzc74uysvc8xmw7r2eye2f3eedkyzzgw8au5sgz";
const APP_ID = "1177693";

//sign up
app.post("/signup", async (req, res) => {
  try {
    const { username, password } = req.body;

    const userId = uuidv1();
    const hashedPassword = await bcrypt.hash(password, 10);
    const client = connect(API_KEY, API_SECRET, APP_ID);

    const token = client.createUserToken(userId);
    res.status(200).json({ username, password, hashedPassword, token });
    console.log(req, username, password);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: error });
  }
});

app.listen(PORT, () => console.log("Server running on PORT " + PORT));

//main server
const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");

const userRouter = require("./routes/user");
const accountRouter = require("./routes/account");

const app = express();

app.use(cors());
app.use(express.json()); //to parse the body object (body-parser);

//-> users

app.use("/api/v1", userRouter);

// the /api/v1/user/signin
// the /api/v1/user/signup
// the /api/v1/user/changePassword

// ->accounts
app.use("/api/v2", accountRouter);

// the /api/v2/account/sendMoney
// the /api/v2/account/balance

//host to port 3000;

app.listen(3000);

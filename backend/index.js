//main server
const express = require("express");
const userRouter = require("./routes/user");
const accountRouter = require("./routes/account");

const app = express();

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

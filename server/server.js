const express = require('express');
const app = express();
require("dotenv").config();
const cors = require('cors');
const authRouter = require("./router/auth-router");  // #4
const contactRoute = require("./router/contact-router");
const serviceRoute = require("./router/service-router");
const adminRoute = require("./router/admin-router");
const dataRoute = require("./router/data-router");
const connectDb = require("./utils/db"); // #7
const errorMiddleware = require("./middlewares/error-middleware");

// let's tackle cors
const corOptions = {
    origin: "http://localhost:5173",
    methods: "GET, POST , PUT, DELETE, PATCH , HEAD",
    credentials: true,
};
app.use(cors(corOptions));

app.use(express.json()); // # 6
app.use("/api/auth", authRouter);
app.use("/api/form", contactRoute);
app.use("/api/data", serviceRoute);
app.use("/api/admin", adminRoute);
app.use("/api/user", dataRoute);

app.use(errorMiddleware);


// app.get('/', (req,res)=>{
//     res.status(200).send("Hello World")
// });

// app.get('/register', (req,res)=>{
//     res.status(200).send("Hello This is register Page")
// });

const PORT = process.env.PORT || 5000;
connectDb().then(() => {
    app.listen(PORT, () => {
        console.log(`server is running at port: ${PORT}`);
    });
});
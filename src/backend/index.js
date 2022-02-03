import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import router from "./routes/route.js";

const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json({ limit: "50mb" }));
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);
app.use("/", router);

const CONNECTION_URL =
  "mongodb+srv://jsagar1846:Ravi%401096@cluster0.8afze.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const Port = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(Port, () => console.log("mango mango"));
  })
  .catch((err) => {
    console.log(err.message);
  });

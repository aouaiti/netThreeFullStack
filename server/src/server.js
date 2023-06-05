const http = require("http");
const mongoose = require("mongoose");
const app = require("./app");


const IpSubnetCalculator = require("ip-subnet-calculator");
const ip = IpSubnetCalculator.toDecimal("192.168.1.1");
console.log(IpSubnetCalculator.calculateSubnetMask(ip, 24));

const PORT = process.env.PORT || 3000;
const server = http.createServer(app);
MONGO_URL =
  "mongodb+srv://aouaiti:BTZbecwrEPxpVpPQ@netthree.pn1ybto.mongodb.net/?retryWrites=true&w=majority";

mongoose.connection.once("open", () => console.log("connection to mongo = OK"));
mongoose.connection.on("error", (err) => console.error(err));

async function startServer() {
  await mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false,
    // useCreateIndex: true,
  });

  server.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
  });
}
startServer();

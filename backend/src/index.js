const app = require("./app");
const env = require('./config/index')

const port = process.env.PORT || env.SrvProt;
app.listen(port, () => console.log(`Server is running port ${port}!`));
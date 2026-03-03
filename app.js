const express = require("express");
const app = express();

app.use(express.json());

const dbConnection = require("./src/utils/DBConnection");
dbConnection();

const productRoutes = require("./src/routes/ProductRoutes");
app.use("/prod",productRoutes);

const bookRoutes = require("./src/routes/BookRoutes");
app.use("/book",bookRoutes);

const cityRoutes = require("./src/routes/CityRoutes");
app.use("/city",cityRoutes);

const stateRoutes = require("./src/routes/StateRoutes");
app.use("/state",stateRoutes);

const categoryRoutes = require("./src/routes/CategoryRoutes");
app.use("/cat",categoryRoutes);

const employeeRoutes = require("./src/routes/EmployeeRoutes");
app.use(employeeRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
});
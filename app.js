const express = require("express");
const app = express();

app.use(express.json());

const dbConnection = require("./src/utils/DBConnection");
dbConnection();

const productRoutes = require("./src/routes/ProductRoutes");
app.use("/prod",productRoutes);

const employeeRoutes = require("./src/routes/EmployeeRoutes");
app.use(employeeRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
});
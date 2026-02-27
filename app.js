const express = require("express");
const app = express();

const userRoutes = require("./src/routes/UserRoutes");
app.use(userRoutes);

const employeeRoutes = require("./src/routes/EmployeeRoutes");
app.use(employeeRoutes);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`)
});
const router = require("express").Router();
const employeeController = require("../controllers/EmployeeController");
router.get("/employees",employeeController.getAllEmployees);
router.get("/employees/:salary",employeeController.getEmployeesBySalary);

module.exports = router;
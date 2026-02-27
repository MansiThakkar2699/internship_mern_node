const employees = [
  { id: 1001, name: "vinit", salary: 3000 },
  { id: 1002, name: "shubh", salary: 28000 },
  { id: 1003, name: "Avi", salary: 31000 },
];

const getAllEmployees = (req,res)=>{
    res.json({
        message: "All Employees",
        data: employees
    });
};

const getEmployeesBySalary = (req,res)=>{
    const employee = employees.filter(employee => employee.salary > req.params.salary);
    if (employee) {
        res.json({
            message: "Employees found",
            data: employee
        });
    } else {
        res.json({
            message: "Employee not found"
        });
    }
};

module.exports = {
    getAllEmployees,
    getEmployeesBySalary
};
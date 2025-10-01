import { add, getAll, remove, update } from "../models/employeeModel.js";

export const getAllEmployees = (req, res) => {
  const employees = getAll();
  if (employees.length === 0) return res.json({ error: "No employees found" });
  return res.json({ employees: employees });
};

export const addEmployee = (req, res) => {
  const { name, position, department, salary, status } = req.body;
  if (!name || !position || !department || !salary || !status) {
    return res.status(400).json({ error: 'Some fieldds are missing' });
  }
  const newEmployee = {
    id: Date.now(),
    name,
    position,
    department,
    salary,
    status,
  };
  const result = add(newEmployee);
  if (result) return res.json({ new_employee: result });
  return res.json({ error: "Something went wrong while adding new employee" });
};

export const updateEmployee = (req, res) => {
  const id = Number(req.params.id);
  const result = update(id, req.body);
  if (result) return res.json({ updated_employee: result });
  return res.json({
    error: "Something went wrong while updating the employee",
  });
};

export const deleteEmployee = (req, res) => {
  const id = Number(req.params.id);
  const result = remove(id);
  if (result) return res.json({ deleted_employee: result });
  return res.json({
    error: "Something went wrong while deleteing the employee",
  });
};

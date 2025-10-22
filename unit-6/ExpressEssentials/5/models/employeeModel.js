import fs from "fs";

const DB_PATH = "db.json";

const writeDb = (employees) => {
  fs.writeFileSync(DB_PATH, JSON.stringify(employees, null, 2), "utf-8");
};

export const getAll = () => {
  try {
    return JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
  } catch (error) {
    return [];
  }
};

export const add = (employee) => {
  const employees = getAll();
  employees.push(employee);
  writeDb(employees);
  return employee;
};

export const update = (id, updates) => {
  const employees = getAll();
  const employee = employees.find((e) => e.id === id);
  if(!employee) return null
  Object.assign(employee, updates);
  writeDb(employees);
  return employee
};

export const remove = (id) => {
  const employees = getAll();
  const idx = employees.findIndex((e) => e.id === id);
  if(idx === -1) return null
  const deleted = employees.splice(idx, 1)[0];
  writeDb(employees);
  return deleted
};

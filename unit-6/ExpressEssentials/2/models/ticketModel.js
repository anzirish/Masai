import fs from "fs";

const DB_PATH = "db.json";

export const generateId = () => {
  const tickets = getTickets();
  if (tickets.length === 0) return 1;
  const maxId = Math.max(...tickets.map((t) => t.id)); // find the max id number [will fail in asynchronous operations]
  return maxId + 1;
};

const writeDb = (tickets) => {
  fs.writeFileSync(DB_PATH, JSON.stringify(tickets, null, 2), "utf-8");
};

export const getTickets = () => {
  try {
    return JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
  } catch (error) {
    return [];
  }
};

export const getById = (id) => {
  const ticket = getTickets().find((t) => t.id === id);
  if (ticket) return ticket;
  return null;
};

export const addTicket = (ticket) => {
  const tickets = getTickets();
  tickets.push(ticket);
  writeDb(tickets);
};

export const updateTicket = (newTicket) => {
  const tickets = getTickets();
  const ticket = tickets.find((t) => t.id === newTicket.id);
  if (!ticket) return null;
  Object.assign(ticket, newTicket);
  writeDb(tickets);
  return ticket;
};

export const deleteTicket = (id) => {
  const tickets = getTickets();
  const idx = tickets.findIndex((t) => t.id === id);
  if (idx === -1) return null;
  const remTic = tickets.splice(idx, 1)[0];
  writeDb(tickets);
  return remTic
};

export const resolveTicket = (id) =>{
const tickets = getTickets();
  const ticket = tickets.find((t) => t.id === id);
  if (!ticket) return null;
  Object.assign(ticket, {status : 'resolved'});
  writeDb(tickets);
  return ticket;
}
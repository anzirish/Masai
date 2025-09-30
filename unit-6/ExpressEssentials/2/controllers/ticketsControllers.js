import {
  addTicket,
  deleteTicket,
  generateId,
  getById,
  getTickets,
  resolveTicket,
  updateTicket,
} from "../models/ticketModel.js";

export const getAllTickets = (req, res) => {
  const tickets = getTickets();
  if (tickets.length === 0)
    return res.status(404).json({ error: "0 tickets found" });
  return res.json(tickets);
};

export const getTicketById = (req, res) => {
  const id = Number(req.params.id);
  const ticket = getById(id);
  if (ticket) return res.status(200).json(ticket);
  return res.status(404).json({ error: `No ticket found with id ${id}` });
};

export const addNewTicket = (req, res) => {
  const { title, description, priority, user } = req.body;
  const newTicket = {
    id: generateId(),
    title,
    description,
    priority,
    user,
    status: "pending",
  };
  addTicket(newTicket);
  return res.status(200).json(newTicket);
};

export const updateATicket = (req, res) => {
  const id = Number(req.params.id);
  const { title, description, priority } = req.body;
  
  if (!title || !description || !priority) {
    return res.status(404).json({ error: "Input is invalid to make updation" });
  }
  const update = { id, title, description, priority };
  const result = updateTicket(update);
  if (result) return res.status(200).json({ status: "success" });
  return res.status(404).json({ error: "Updation failed" });
};

export const deleteATicket = (req, res) =>{
  const id = Number(req.params.id)
  const result = deleteTicket(id)
  if (result) return res.status(200).json({ status: "success" });
  return res.status(404).json({ error: "Deletetion failed" });
}

export const markResolve = (req, res) =>{
  const id = Number(req.params.id)
  const result = resolveTicket(id)
  if (result) return res.status(200).json({ status: "success" });
  return res.status(404).json({ error: "Resolving failed" });
}
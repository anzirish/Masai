import express from 'express'
import { borrowBook, getBooks, returnBook } from '../controllers/readerController.js'
import { returnCheck } from '../middlewares/returnCheckMiddleware.js'
import { transactionLogger } from '../middlewares/transactionLogger.js'

export const readerRouter = express.Router()

readerRouter.get("/books", getBooks)
readerRouter.post("/borrow/:id", transactionLogger, borrowBook)
readerRouter.post("/return/:id", returnCheck, transactionLogger, returnBook)
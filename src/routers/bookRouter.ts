import { Router } from "express";
import {createBook, updateBook, deleteBook,getBooks,booksById} from "../controllers/booksController"
const router = Router();

router.post("/createBook", createBook)
router.put("/updateBook/:id", updateBook)
router.delete("/deleteBook/:id", deleteBook)
router.get("/getBooks",getBooks)
router.post("/booksById/:id", booksById)

export default router
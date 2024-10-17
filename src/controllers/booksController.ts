import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import {
  createBookInput,
  updateBookInput,
} from "../utils/typeValidation";

export const createBook = async (req: Request, res: Response) => {
  try {
    const prisma = new PrismaClient();
    const inputBody = req.body;
    const isValid = createBookInput.safeParse(inputBody);
    if (!isValid) {
      res.status(400).send(`Please provide valid input`);
    }

    const book = await prisma.comicBook.create({
      data: {
        name: inputBody.name,
        author: inputBody.author,
        year: inputBody.year,
        price: inputBody.price,
        discount: inputBody.discount,
        pages: inputBody.pages,
        condition: inputBody.condition,
        description: inputBody.description,
      },
    });

    res.status(200).send(book);
  } catch (err) {
    res.status(500).send(`error while creating books details...${err}`);
  }
};
export const updateBook = async (req: Request, res: Response) => {
  try {
    const prisma = new PrismaClient();
    const bookId = req.params.id;
    const inputBody = req.body;
    const isValid = updateBookInput.safeParse(inputBody);
    if (!isValid) {
      res.status(401).send(`Please provide valid input`);
    }

    const book = await prisma.comicBook.update({
      where: {
        id: bookId,
      },
      data: {
        name: inputBody.name,
        author: inputBody.author,
        year: inputBody.year,
        price: inputBody.price,
        discount: inputBody.discount,
        pages: inputBody.pages,
        condition: inputBody.condition,
        description: inputBody.description,
      },
    });

    res.status(200).send(book);
  } catch (err) {
    res.status(500).send(`error while creating books details...${err}`);
  }
};
export const deleteBook = async (req: Request, res: Response) => {
  try {
    const prisma = new PrismaClient();
    const bookId = req.params.id;

    await prisma.comicBook.delete({ where: { id: bookId } });

    res.status(200).send(`Book data deleted for Id : ${bookId}`);
  } catch (err) {
    res.status(500).send(`something went wrong!!!!`);
  }
};
export const getBooks = async (req: Request, res: Response) => {
  const prisma = new PrismaClient();

  try {
    
    const page = 1;
    const limit = 10;
    
    const { author, year, minPrice, maxPrice, condition} =
      req.query;


    const skip = (page - 1) * limit;

    const filter: any = {};
    if (author) filter.author = { contains: author, mode: "insensitive" };
    if (year) filter.year = Number(minPrice);
    if (minPrice || maxPrice) {
      filter.price = {};
      if (minPrice) filter.price.gte = Number(minPrice);
      if (maxPrice) filter.price.lte = Number(maxPrice);
    }
    if (condition) filter.condition = String(condition);

    const books = await prisma.comicBook.findMany({
      where: filter,
      skip,
      take: limit,
    });

    const totalCount = await prisma.comicBook.count({ where: filter });

    res.status(200).json({
      data: books,
      meta: {
        currentPage: page,
        itemsPerPage: limit,
        totalItems: totalCount,
        totalPages: Math.ceil(totalCount / limit),
      },
    });
  } catch (error) {
    console.error("Error fetching books:", error);
    res.status(500).json({ error: "An error occurred while fetching books" });
  }
};

export const booksById = async (req: Request, res: Response) => {
  try {
    const prisma = new PrismaClient();

    const bookId = req.params.id;

    const bookById = await prisma.comicBook.findUnique({
      where: { id: bookId },
    });

    res.status(200).send(bookById);
  } catch (err) {
    res.status(403).send(`Error while fetching book data!!!! `);
  }
};

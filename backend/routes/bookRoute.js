import express from "express";
import { Book } from "../model/bookModel.js";

const router = express.Router();

// router.get("/", (req, res) => {
//   res.send("Hello World!");
// });

// Route to Save a new Book
router.post("/", async (req, res) => {
  try {
    if (!req.body.title || !req.body.author || !req.body.publishYear) {
      return res.status(400).send({
        title: req.body.title,
        author: req.body.author,
        publishYear: req.body.publishYear,
      });
    }
    const newBook = {
      title: req.body.title,
      author: req.body.author,
      publishYear: req.body.publishYear,
    };

    const book = await Book.create(newBook);
    res.status(201).send(book);
  } catch (error) {
    console.error(error.message);
    res.status(500);
  }
});
// Get all books from the database

router.get("/", async (req, res) => {
  try {
    res.status(200).send(await Book.find());
    //console.log(await Book.findAll())
  } catch (error) {
    console.log(error.message);
  }
});

// Get  one specific book by its id

router.get("/:id", async (req, res) => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      return res.status(404).send("Book not found");
    }
    res.status(200).send(book);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

//Update  a book with new information
router.put("/:id", async (req, res) => {
  try {
    const updateBookId = req.params.id;
    // const requestBodyId = req.body.id; // Assuming the ID is in the request body

    if (!updateBookId) {
      return res.status(403).send("Invalid or mismatched ID");
    }

    const updatedBook = await Book.findByIdAndUpdate(updateBookId, req.body, {
      new: true,
    });

    if (!updatedBook) {
      return res.status(404).send("Book not found");
    }

    res.status(200).send({
      message: "Updated successfully!",
      data: updatedBook,
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server Error");
  }
});

//Delete a book by its id

router.delete("/:id", async (req, res) => {
  try {
    const deletebookId = req.params.id;

    if (!deletebookId) {
      return res.status(403).send("Invalid or mismatched ID");
    }
    const deleteBook = await Book.findByIdAndDelete(deletebookId);
    res.status(201).send();
  } catch (error) {
    console.error(error.message);
  }
});
export default router;

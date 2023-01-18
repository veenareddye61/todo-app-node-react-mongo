const router = require("express").Router();
const Todo = require("../models/todo.model");

//add

router.post("/", async (req, res) => {
  const newTodo = new Todo(req.body);

  try {
    const saveTodo = await newTodo.save();
    res.status(200).json(saveTodo);
  } catch (err) {
    res.status(500).json(err);
  }
});

//get

router.get("/", async (req, res) => {
  try {
    const todolist = await Todo.find();
    res.status(200).json(todolist);
  } catch (err) {
    res.status(500).json(err);
  }
});
router.delete("/:id",async (req, res) => {
    try {
      const deltodo = await Todo.deleteOne({
            _id : req.params.id
      });

      res.status(200).json(deltodo);
    } catch (err) {
      res.status(500).json(err);
    }
  })

module.exports = router;

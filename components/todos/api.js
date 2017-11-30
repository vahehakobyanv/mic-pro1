const express = require('express');
const TodosRouter = express.Router();
const TodosService = require('./service');

TodosRouter.get('/',(req,res)=> {
  TodosService.getTodos().then(data => {
    return res.send(data);
  });
});
  TodosRouter.post('/',(req,res) => {
    let todo = {
      content_type: req.body.content_type
    }
    TodosService.insertTodo(todo).then(data => {
      return res.send(data);
    });
  });
  TodosRouter.delete('/:id', (req,res) => {
    let todo = {
      id: req.params.id
    };
    TodosService.deleteTodo(todo).then(dta => {
      return res.send(data);
    });
  });

module.exports = TodosRouter;

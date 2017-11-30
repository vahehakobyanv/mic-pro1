const TodosDao = require('./private/todo-dao');
class TodosService {
  getTodos() {
    return new Promise((resolve, reject) => {
        TodosDao.getData().then(data => {
            resolve(data);
        }).catch(err => {
            reject(err);
        })
    })
  }
  insertTodo(todo) {
    return new Promise((resolve, reject) => {
        TodosDao.insertData({
            content_type:todo.content_type
        }).then(data => {
            resolve(data);
        }).catch(err => {
            reject(err);
        })
    })
  }
  deleteTodo(todo) {
    return new Promise((resolve, reject) => {
        TodosDao.deleteData({
            _id: todo.id
        }).then(data => {
            resolve(data);
        }).catch(err => {
            reject(err);
        })
    })
  }
}

module.exports = new TodosService();

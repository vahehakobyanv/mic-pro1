const mongoose = require('mongoose');
require('./model');
const BaseDao = require('./../../core/base-dao');
const Conn = require('./../../core/db-connection');

class TodosDao extends BaseDao {
    constructor() {
        super(Conn.model('todos'));
    }
}

module.exports = new TodosDao();

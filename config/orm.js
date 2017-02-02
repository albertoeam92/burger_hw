var connection = require('./connection');

module.exports = {

    selection: function () {
        connection.query('SELECT ?? burger', callback)
    },

    insert: function insertOne(PLACEHOLDER) {
        connection.query('INSERT INTO burger_db.burger (Name, Devour) VALUES (?,0)',PLEACEHOLDER)
    },

    update: function updateOne(PLACEHOLDER) {

        connection.query('UPDATE burger_db.burger SET Name = ?, Devour = ?, Date = NOW() WHERE idburger = ?', PLACEHOLDER);
    },

    delete: function deleteOne(PLACEHOLDER) {

        connection.query('DELETE FROM  burger_db.burger WHERE id=? ', PLACEHOLDER);
    }


};


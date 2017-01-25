var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '8725183sd',
  database : 'burger_db'
});
 
connection.connect();
	
module.exports = connection;
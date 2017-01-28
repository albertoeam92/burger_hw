var connection = require('/connection');

var orm = {
	        selection: function selectAll(){
			    connection.query('SELECT * FROM burger_db.burger', function(err, data){
					if(err) throw err;
					res.send('placeholder');
		        });
	        },

	        insert: function insertOne(){
	        	connection.query('INSERT INTO burger_db.burger (Name, Devour) VALUES (?,0)', function(err, data){
	        		if(err) throw err;
	        		res.send('placeholder');
	        	});
	        },

	        update:  function updateOne() {

                connection.query('UPDATE burger_db.burger SET Name = "?", Devour = ?, Date = NOW() WHERE idburger = ?', function (err, data) {
                    if (err) throw err;
                    res.send('placeholder');
                });
            },

	        delete: function deleteOne(){

				connection.query('DELETE FROM  burger_db.burger WHERE id=? ', function(err, data){
					if(err) throw err;
					res.send('placeholder');
				});
			}


};
module.exports = orm;
const dbobj = require('../db/connectionobj');

const getUsers = (request, response) => {
    pool.query("SELECT * FROM TestTable1", (error, results) => {
        if (error) {
            throw error;
        }
        response.status(200).json(results.rows);
    });
}

const saveUser = (request, response) => {
    const { name, run, country } = request.body;
    pool.query("INSERT INTO TestTable1 (name, run, country) VALUES ($1, $2, $3)", [name, run, country], (error, results) => {
        if (error) {
            throw error;
        }   
        response.status(201).send(`User added sucessfully`);
    });
} 

const updateUser = (request, response) => {
    const { name, run, country, id } = request.body;
    pool.query("UPDATE TestTable1 SET name=$1, run=$2, country=$3 WHERE id=$4", [name, run, country, id], (error, results) => {
        if (error) {
            throw error;
        }   
        response.status(201).send(`User updated sucessfully`);
    });
} 

const deleteUser = (request, response) => {
    const id = parseInt(request.params.id);
    pool.query("DELETE FROM TestTable1 WHERE id=$1", [id], (error, results) => {

        if (error) {
            throw error;
        }
        response.status(200).send(`User deleted sucessfully`);
    });
}
module.exports = {
    getUsers,
    saveUser,
    updateUser,
    deleteUser
}
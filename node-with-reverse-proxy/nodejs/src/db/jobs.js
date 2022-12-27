const { queryPromise } = require('./queryPromisse');

async function dropTableIfExists() {
    const sqlTable = `DROP TABLE IF EXISTS people`;
    await queryPromise.query(sqlTable);
}

async function createTable() {
    const sqlTable = `CREATE TABLE IF NOT EXISTS people(id int NOT NULL AUTO_INCREMENT, name varchar(255) NOT NULL, PRIMARY KEY(id))`;
    await queryPromise.query(sqlTable);
}

async function addPeople() {
    const characters = [['Fulano'], ['Beltrano'], ['Ciclano']];
    const sqlInsert = `INSERT INTO people(name) VALUES ?`;
    await queryPromise.queryMultiple(sqlInsert, characters);
}

async function getAllPeople() {
    const sqlTable = `SELECT * FROM people`;
    const result = await queryPromise.query(sqlTable);
    return result;
}

const jobs = {
    dropTableIfExists,
    createTable,
    addPeople,
    getAllPeople,
};

module.exports = { jobs };

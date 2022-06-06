var pool = require('./bd');

async function getTutorials() {
    var query = 'select * from tutorials';
    var rows = await pool.query(query);
    return rows;
}

async function deleteTutorialsById(id) {
    var query = 'delete from tutorials where id = ?';
    var rows = await pool.query(query, [id]);
    return rows;
}

module.exports = { getTutorials, deleteTutorialsById }
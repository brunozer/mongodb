// Define o nome do banco de dados
const database = 'libri-database'

use(database);



// select 

// db['libri-collection'].find()

// ////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// //seleciona dados baseado  em criterio 

// db['libri-collection'].find( {}, {_id: 0, codigo: false})

////////////////////////////////////////////////////////////////////////////////////////////////////////////////


db['libri-collection'].find({"titulo": /robôs/i},{_id: 0, codigo: false})
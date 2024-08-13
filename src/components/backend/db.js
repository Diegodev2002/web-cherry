import { Client } from 'pg';

const client = new Client({
  user: 'Diego',
  host: 'LocalHost',
  database: 'cherry',
  password: '20021995diego',
  port: 5432,         
});

client.connect()
  .then(() => console.log('Conexión exitosa a la base de datos'))
  .catch(err => console.error('Error al conectar a la base de datos:', err));

export default client;
import { Client } from 'pg';

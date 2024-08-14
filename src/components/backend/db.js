import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';
import bcrypt from 'bcrypt';

const { Client } = pg;
const client = new Client({
	user: 'Diego_Zambrana',
	host: 'localhost',
	database: 'proyectoTienda',
	password: '123456789',
	port: 5432,
});

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

client
	.connect()
	.then(() => console.log('Conexión exitosa a la base de datos'))
	.catch((err) => console.error('Error al conectar a la base de datos:', err));

// Endpoint para el login
app.post('/login', async (req, res) => {
	const { username, password } = req.body;

	try {
		const result = await client.query(
			'SELECT * FROM users WHERE username = $1',
			[username]
		);
		if (result.rows.length > 0) {
			const user = result.rows[0];
			const match = await bcrypt.compare(password, user.password);
			if (match) {
				res.status(200).send('Login exitoso');
			} else {
				res.status(401).send('Credenciales inválidas');
			}
		} else {
			res.status(401).send('Credenciales inválidas');
		}
	} catch (err) {
		console.error('Error en la consulta:', err);
		res.status(500).send('Error en el servidor');
	}
});

// Endpoint para el registro
app.post('/register', async (req, res) => {
	const { username, password } = req.body;

	try {
		// Hash de la contraseña
		const hashedPassword = await bcrypt.hash(password, 10);

		// Insertar nuevo usuario en la base de datos
		await client.query(
			'INSERT INTO users (username, password) VALUES ($1, $2)',
			[username, hashedPassword]
		);
		res.status(201).send('Usuario registrado exitosamente');
	} catch (err) {
		console.error('Error al registrar el usuario:', err);
		res.status(500).send('Error en el servidor');
	}
});

app.listen(port, () => {
	console.log(`Servidor corriendo en http://localhost:${port}`);
});

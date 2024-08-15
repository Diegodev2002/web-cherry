import express from 'express';
import bodyParser from 'body-parser';
import pg from 'pg';
import bcrypt from 'bcrypt';
import cors from 'cors'; // Importar cors

const { Client } = pg;
const client = new Client({
	user: 'Diego_Zambrana',
	host: 'localhost',
	database: 'cherrypop2',
	password: '123456789',
	port: 5432,
});

const app = express();
const port = 3000;

app.use(
	cors({
		origin: 'http://localhost:4321', // Solo permite solicitudes desde este origen
	})
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

client
	.connect()
	.then(() => console.log('Conexión exitosa a la base de datos'))
	.catch((err) => console.error('Error al conectar a la base de datos:', err));

// Ruta raíz
app.get('/', (req, res) => {
	res.send('Bienvenido a la página principal');
});

// Endpoint para el login
app.post('/login', async (req, res) => {
	const { usuario, contrasena } = req.body;

	try {
		const result = await client.query(
			'SELECT * FROM perfil WHERE usuario = $1',
			[usuario]
		);
		if (result.rows.length > 0) {
			const usuario = result.rows[0];
			const match = await bcrypt.compare(contrasena, usuario.contrasena);
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
	const {
		firstName,
		lastName,
		usuario,
		contrasena,
		address1,
		address2,
		address3,
		cardNumber1,
		cardNumber2,
		cardNumber3,
	} = req.body;

	// Validación de campos obligatorios
	if (
		!firstName ||
		!lastName ||
		!usuario ||
		!contrasena ||
		!address1 ||
		!cardNumber1
	) {
		return res
			.status(400)
			.send(
				'Los campos Nombre, Apellido, Correo electrónico, Contraseña, Dirección 1 y Número de tarjeta 1 son obligatorios.'
			);
	}

	try {
		const hashedcontrasena = await bcrypt.hash(contrasena, 10);
		await client.query(
			'INSERT INTO perfil (firstName, lastName, usuario, contrasena, address1, address2, address3, cardNumber1, cardNumber2, cardNumber3) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)',
			[
				firstName,
				lastName,
				usuario,
				hashedcontrasena,
				address1,
				address2 || null,
				address3 || null,
				cardNumber1,
				cardNumber2 || null,
				cardNumber3 || null,
			]
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

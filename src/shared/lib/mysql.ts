import mysql, {Connection} from 'mysql2/promise';

const connection: Connection = await mysql.createConnection({
    host: process.env.NEXT_PUBLIC_DB_HOST as string,
    port: process.env.NEXT_PUBLIC_DB_PORT as number | undefined,
    user: process.env.NEXT_PUBLIC_DB_USER,
    password: process.env.NEXT_PUBLIC_DB_PASSWORD,
    database: process.env.NEXT_PUBLIC_DB_DATABASE
});

export default connection;
const userName = "DevTester";
const userPassword = "123";
const dbName = postgresql-polished-82430;

const { Client } = require('pg');
const client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

client.connect();

client.query('SELECT public,products_test_sawdust FROM information_schema.tables;', (err, res) => {
    if (err) throw err;
    for(let row of res.rows) {
        console.log(JSON.stringify(row));
    }
    client.end();
});
export default function handler (req, res) {
    try {
    }
    catch (error) {
        //console.error(error);
        res.status(500).send({message: ["Error creating on the server"], 
    error: error})
    }
}

/*import { RESPONSE_LIMIT_DEFAULT } from "next/dist/server/api-utils";

const User = "DevTester";
const Password = "123";

const pgp = require("pg-promise")({
    noWarnings: true
})
const db = pgp(`postgres://${User}:${Password}@localhost:5432/postgres`)

export default async function handler (req, res) => {
    try {
        const { name, price, imageURL, productDescription } = req.query;
        if(!name || !price || !imageURL || !productDescription){
            return res.status(422).send({error: ["Missing one or more fields"]});
        }
        const product = await db.one("INSERT INTO products(name, price, imageURL, productDescription) VALUES($1,$2, $3, $) RETURNING *", [name, price, imageURL, productDescription]);

        res.status(200).json(product)
    }
    catch(error) {
        //console.error(error);
        res.status(500).send({message: ["Error creating on the server"], 
    error: error})
    }
}*/
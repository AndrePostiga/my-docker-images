const path = require('path');
const express = require('express');

const app = express();
const { jobs } = require('./db/jobs');

async function createApp() {
    await jobs.dropTableIfExists();
    await jobs.createTable();
    await jobs.addPeople();

    app.set('view engine', 'ejs');
    app.set('views', path.resolve(__dirname, 'views'));

    app.get('/', async (req, res) => {
        res.send('Hello World!');
    });

    app.get('/desafio', async (req, res) => {
        const result = JSON.parse(JSON.stringify(await jobs.getAllPeople()));
        res.render('home', { people: result });
    });

    return app;
}

module.exports = createApp;

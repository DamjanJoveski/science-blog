const express = require('express');
const app = express();
const cors = require('cors')
const pool = require('./pool')

app.use(cors());
app.use(express.json());

//ROUTES

//get all articles

app.get('/articles', async (req, res) => {
    try {
        const query = "SELECT * FROM articles";
        const articles = await pool.query(query)
        res.json(articles.rows)
    }
    catch (error){
        console.error(error.message)
    }
})

//get all articles by category

app.get('/articles/category/:category', async (req, res) => {
    try {
        const query = "SELECT * FROM articles WHERE category = $1";
        const {category} = req.params;
        const values = [category];
        const articles = await pool.query(query,values);

        res.json(articles.rows)
    }
    catch (error){
        console.error(error.message)
    }
})

//get a single article
app.get('/articles/id/:id', async (req, res) => {
    try {
        const query = "SELECT * FROM articles WHERE id = $1";
        const {id} = req.params;
        const article = await pool.query(query, [id])
        res.json(article.rows)
    }
    catch (error) {
        console.error(error.message)
    }
})

//create, update, delete articles in the future for admins


app.listen(3000, () => {
   console.log('server started on port 3000')
})




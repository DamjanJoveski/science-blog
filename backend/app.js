const express = require('express');
const app = express();
const cors = require('cors')
const pool = require('./pool')
const axios = require('axios');
const cron = require('node-cron');

app.use(cors());
app.use(express.json());




//
// const corsOptions = {
//     origin: [
//         'https://science-blog-frontend.vercel.app',
//         'https://science-blog-frontend-git-master-damjanjoveski.vercel.app',
//         'https://science-blog-frontend-nhru8q35a-damjanjoveski.vercel.app',
//         'https://science-blog-frontend.vercel.app/'
//     ],
// };
//
// app.use(cors(corsOptions));



//ROUTES

app.get('/articles', async (req, res) => { //Get all articles
    try {
        const query = "SELECT * FROM articles";
        const articles = await pool.query(query)
        res.json(articles.rows)
    }
    catch (error){
        console.error(error.message)
    }
})
app.get('/articles/category/:category', async (req, res) => { //Get all articles by category
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
app.get('/articles/title/:title', async (req, res) => { //Get a single article
    try {
        const query = "SELECT * FROM articles WHERE title = $1";
        const {title} = req.params;
        const article = await pool.query(query, [title])
        res.json(article.rows)
    }
    catch (error) {
        console.error(error.message)
    }
})

app.get('/fact', async (req, res) => {
    try{
        const query = "SELECT * FROM factoftheday LIMIT 1";
        const fact = await pool.query(query)
        res.json(fact.rows)
    }
    catch (error) {
        console.error(error.message)
    }
});

async function checkAndUpdateFact(){ //Check if there is a fact or if it's due updating and sets/updates the fact of the day
    const today = new Date();
    const day = today.getDate()
    try {
        const query = "SELECT * FROM factoftheday LIMIT 1";
        const article = await pool.query(query)
        const factDate = article.rows[0].date.getDate()

            if(article.rowCount === 0) { //Sets the fact of the day if there isn't a fact already
                const limit = 1;
                const response = await axios.get('https://api.api-ninjas.com/v1/facts', {
                    params: {
                        limit: limit
                    },
                    headers: {
                        'X-Api-Key': process.env.API_KEY
                    }
                })
                const fact = response.data[0].fact
                const query = 'INSERT INTO factoftheday (id, fact_text) VALUES ($1, $2)'

                pool.query(query, [1, fact], (error, results) => {
                    if (error) {
                        console.error('Error inserting fact:', error);
                        return;
                    }
                    console.log('Fact added successfully:', results.rows);
                });
            }

            if(factDate !== day) { //Updates the fact if it's from yesterday
                const limit = 1;
                const response = await axios.get('https://api.api-ninjas.com/v1/facts', {
                    params: {
                        limit: limit
                    },
                    headers: {
                        'X-Api-Key': process.env.API_KEY
                    }
                })
                const newFact = response.data[0].fact
                const query = 'UPDATE factoftheday SET fact_text = $1 WHERE id = $2'
                pool.query(query, [newFact, 1], (error, results) => {
                    if (error) {
                        console.error('Error updating fact:', error);
                        return;
                    }
                    console.log('Fact updated successfully:', results.rows);
                });
            }
    }
    catch (error) {
        console.error(error.message)
    }
}


cron.schedule('1 0 * * *', () => {
    checkAndUpdateFact().catch((error) => {
        console.error(error.message)
        setTimeout(()=>{ //Tries again in an hour
            checkAndUpdateFact()
        },1000 * 60 * 60)
    });
},
    {
        timezone:"CET"
    }
    )

//create, update, delete articles in the future for admins (me)


app.listen(3000, () => {
   console.log('server started on port 3000')
})




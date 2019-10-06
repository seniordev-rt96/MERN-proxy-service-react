/*const express = require('express')
const puppeteer = require('puppeteer')
const absolutify = require('absolutify')
var bodyParser = require('body-parser');
const cors = require('cors');
const PORT = 4000;

const app = express()

app.use(cors())
app.use(bodyParser.json())
app.post('/', async(req, res) => {
	const url = req.body.url
	console.log(url)

	if (!url) {
		return res.send('No url provided')
	} else {
		try {	
			const browser = await puppeteer.launch()
			const page = await browser.newPage()
			await page.goto(`https://${url}`)

			let document = await page.evaluate(() => document.documentElement.outerHTML)
			document = absolutify(document, `/?url=${url.split('/')[0]}`)

			return res.send(document)
		} catch (err) {
			return res.send(err)
		}
	}
})

app.listen(PORT)*/

const express = require('express')
const app = express()
const puppeteer = require('puppeteer')
const absolutify = require('absolutify')
const bodyParser = require('body-parser')
const cors = require('cors')
const mongoose = require('mongoose')
const PORT = 4000

const userRoutes = express.Router();

app.use(cors())
app.use(bodyParser.json())

mongoose.connect('mongodb://127.0.0.1:27017/db_proxy', { useNewUrlParser: true })
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

app.use('/user', userRoutes);

userRoutes.route('/').get(function(req, res) {
    User.find(function(err, users) {
        if (err) {
            console.log(err);
        } else {
            res.json(users);
        }
    });
});

app.get('/', async(req, res) => {
	const {url} = req.query

	if (!url) {
		return res.send('No url provided')
	} else {
		try {	
			const browser = await puppeteer.launch()
			const page = await browser.newPage()
			await page.goto(`https://${url}`)

			let document = await page.evaluate(() => document.documentElement.outerHTML)
			document = absolutify(document, `/?url=${url.split('/')[0]}`)

			return res.send(document)
		} catch (err) {
			return res.send(err)
		}
	}
})

app.listen(PORT, function() {
	console.log("Server is running on Port: " + PORT)
})
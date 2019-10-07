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
let User = require('./models/User.js')

app.use(cors())
app.use(bodyParser.json())

mongoose.connect('mongodb://127.0.0.1:27017/db_proxy', { useNewUrlParser: true })
const connection = mongoose.connection;

connection.once('open', function() {
    console.log("MongoDB database connection established successfully");
})

userRoutes.route('/').get(function(req, res) {
    User.find(function(err, users) {
        if (err) {
            console.log(err);
        } else {
            res.json(users);
        }
    });
});

userRoutes.route('/:id').get(function(req, res) {
    let id = req.params.id;
    User.findById(id, function(err, user) {
        res.json(user);
    });
});

userRoutes.route('/add').post(function(req, res) {
    let user = new User(req.body);
    user.save()
        .then(user => {
            res.status(200).json({'user': 'user added successfully'});
        })
        .catch(err => {
            res.status(400).send('adding new user failed');
        });
});

userRoutes.route('/update/:id').post(function(req, res) {
    User.findById(req.params.id, function(err, user) {
        if (!user)
            res.status(404).send("data is not found");
        else
            user.user_description = req.body.user_description;
            user.user_responsible = req.body.user_responsible;
            user.user_priority = req.body.user_priority;
            user.user_completed = req.body.user_completed;
            user.save().then(user => {
                res.json('User updated!');
            })
            .catch(err => {
                res.status(400).send("Update not possible");
            });
    });
});

app.use('/user', userRoutes)

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
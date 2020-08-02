const express = require('express')
const sls = require('serverless-http')
const app = express()
app.get('/', async (req, res, next) => {
	console.log("!!!!Serverless log from hello world!!!!");
  res.status(200).send('Hello World!')
})
module.exports.server = sls(app)
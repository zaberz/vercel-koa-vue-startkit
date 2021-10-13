const exec = require('child_process').exec
const startServer = exec('cd api && nodemon start.js')
const startClient = exec('vue-cli-service serve')

startServer.stdout.on('data', data=> console.log(data))
startServer.stderr.on('data', data=> console.log(data))
startClient.stdout.on('data', data=> console.log(data))
startClient.stderr.on('data', data=> console.log(data))
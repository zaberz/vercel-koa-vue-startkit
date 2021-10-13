const Koa = require('koa')
const Router = require('@koa/router')
const app = new Koa()
const router = new Router()
router.prefix('/api')
router.get('/getmsg', (ctx, next) => {
    ctx.body = 'this is a message from server';
    next()
})

app.use(router.routes())
app.use(router.allowedMethods())

module.exports = app
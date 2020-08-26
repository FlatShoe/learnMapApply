const express = require('express')
const app = express()


app.use(express.static('./'))

app.listen(9527, function () {
  console.log('服务启动成功')
})
const express = require('express')
const app = express()
const MsgCtrl = require('./controllers/messages_controller')

app.use(express.json());
app.use(express.static(__dirname + '/../public/build'));


const messagesBaseUrl = "/api/messages";
app.post(messagesBaseUrl, MsgCtrl.create)
app.get(messagesBaseUrl, MsgCtrl.read)
app.put(`${messagesBaseUrl}/:id`, MsgCtrl.update)
app.delete(`${messagesBaseUrl}/:id`, MsgCtrl.delete)

const port = 3001
app.listen(port, () => {
  console.log(`listening to ${port}`)
})
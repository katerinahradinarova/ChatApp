const express = require("express")
const app = express()
const cors = require("cors")
const http = require('http').Server(app);
const PORT = 4000
const socketIO = require('socket.io')(http, {
  cors: {
    origin: "http://localhost:3000"
  }
});
const { EchoBot, ReverseBot, IgnoreBot, SpamBot } = require('./bots');

app.use(cors())
let users = []
let messages = []

const echoBot = new EchoBot('Echo Bot');
const reverseBot = new ReverseBot('Reverse Bot');
const ignoreBot = new IgnoreBot('Ignore Bot');
const spamBot = new SpamBot('Spam Bot');

users.push(echoBot, reverseBot, ignoreBot, spamBot);


socketIO.on('connection', (socket) => {

  const newUser = {
    username: 'User #' + Math.floor(Math.random() * 10000) + 1,
    socketId: socket.id,
    status: 'online'
  };
  users.push(newUser)

  socketIO.emit('usersList', users)
  socketIO.emit('messagesList', messages)

  socket.emit("personalData", newUser);

  socket.on("message", async data => {
    const one = data.sender.split('#')[1];
    const two = data.receiver.split('#')[1];

    const newMessage = {
      chatId: parseInt(one) + parseInt(two),
      sender: data.sender,
      receiver: data.receiver,
      text: data.text,
      type: data.type
    }
    messages.push(newMessage)
    socketIO.emit("messagesList", messages)
    if (data.receiver.split('#')[0] === 'Bot ') {

      const getRightBot =  (botType, text) => {
        switch (botType) {
          case 'echoBot':
            return echoBot.respondToMessage(text);
          case 'ignoreBot':
            return;
          case 'reverseBot':
            return reverseBot.respondToMessage(text);
          case 'spamBot':
            return spamBot.respondToMessage(text);
          default:
            break;
        }
      }
      const botResponse = {
        chatId: parseInt(one) + parseInt(two),
        sender: data.receiver,
        receiver: data.sender,
        text: await getRightBot(data.type, data.text)
      }
      if (data.type !== 'ignoreBot') {
        messages.push(botResponse)

        socketIO.emit("messagesList", messages)
      }
    }
  })

  socket.on('disconnect', () => {
    users.map(item => {
      if (item.socketId === socket.id) {
        item.status = 'offline'
      }
      return item;
    })
    socketIO.emit('usersList', users)
  });
});

app.get("/api", (req, res) => {
  res.json({ message: "Hello" })
});


http.listen(PORT, () => {
  console.log(`Server listening on ${PORT} and rabotaet kak chasy`);
});
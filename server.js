const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);
const next = require('next');

const dev = process.env.NODE_ENV !== 'production';
const nextApp = next({dev});
const nextHandler = nextApp.getRequestHandler();

let port = process.env.PORT || 3000;

const NEW_CHAT_MESSAGE_EVENT = "newChatMessage";

io.on("connection", (socket) => {
    console.log(`Client ${socket.id} connected`);
  
    // Join a conversation
    const { roomId } = socket.handshake.query;
    socket.join(roomId);
  
    // Listen for new messages
    socket.on(NEW_CHAT_MESSAGE_EVENT, (data) => {
      io.in(roomId).emit(NEW_CHAT_MESSAGE_EVENT, data);
    });
  
    // Leave the room if the user closes the socket
    socket.on("disconnect", () => {
      console.log(`Client ${socket.id} diconnected`);
      socket.leave(roomId);
    });
  });

  nextApp.prepare().then(() => {

    app.get('*', (req,res) => {
        return nextHandler(req, res);
    })

    server.listen(port, (err) => {
        if(err) throw err;
        console.log(`Ready on port ${port}`);
    })
  })
import http from "http";
import socketIO from "socket.io";

export default function () {
  this.nuxt.hook("render:before", (renderer) => {
    const server = http.createServer(this.nuxt.renderer.app);
    const io = socketIO(server);

    this.nuxt.server.listen = (port, host) =>
      new Promise((resolve) =>
        server.listen(port || 3000, host || "localhost", resolve)
      );
    this.nuxt.hook("close", () => new Promise(server.close));

    const messages = [];

    io.on("connection", (socket) => {
      socket.join("some room");
      io.sockets.in("some room").emit(
        "load_dialog",
        messages
          .filter((message) => {
            return message;
          })
          .sort(function (a, b) {
            return new Date(a.created_at) - new Date(b.created_at);
          })
      );
      socket.on("send-message", function (message) {
        let replied = {
          ...message,
          id: `conor-${message.id}`,
          type: 0,
          text: `${message.text}.McGregor`,
        };
        messages.push(message);
        messages.push(replied);
        io.sockets.in("some room").emit("new-message", message, replied);
      });
    });
  });
}

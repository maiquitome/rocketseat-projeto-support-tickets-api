import http from "node:http"; // indica que o http faz parte do node, que não é uma dependência externa

function listener(request, response) {
  // Função.
}

// const server = http.createServer((request, response) => {
//   Função.
// })

// const server = http.createServer(listener);

// server.listen(3333);

http.createServer(listener).listen(3333);

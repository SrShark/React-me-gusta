import http from "http";
import React from 'react';
import { renderToString } from 'react-dom/server';

const hostname = 'localhost';
const port = 3000;

function requestHandler(request, response) {
  const html = renderToString(
    React.DOM.h1(null, 'Hola Mundo con React')
  );

  response.write(html);
  response.end();
}

const server = http.createServer(requestHandler);

server.listen(port, hostname, function () {
  console.log(`servidor corriendo en ${hostname}:${port}`)
});

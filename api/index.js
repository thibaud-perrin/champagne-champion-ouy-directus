const {createServer} = require("http");
const {bootstrap} = require("directus");

const PORT = process.env.PORT || 3000;

const server = createServer(async (req, res) => {
  const directus = await bootstrap();
  await directus.httpServer.server.emit("request", req, res);
});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

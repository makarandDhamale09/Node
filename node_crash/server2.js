import { createServer } from "http";

const PORT = process.env.PORT;

const users = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Mike John" },
  { id: 3, name: "Jane Doe" },
];

const server = createServer((req, res) => {
  res.setHeader("content-type", "application/json");

  if (req.url === "/api/users" && req.method === "GET") {
    res.write(JSON.stringify(users));
    res.end();
  } else if (req.url.match(/\/api\/users\/([0-9]+)/) && req.method === "GET") {
    const id = req.url.split("/")[3];

    const user = users.find((user) => user.id === parseInt(id));
    if (user) {
      res.write(JSON.stringify(user));
      res.end();
    } else {
      res.write(
        JSON.stringify({ message: `User with id ${id} is not available` })
      );
      res.end();
    }
  } else {
    res.statusCode = 404;
    res.write(JSON.stringify({ message: "This url is not supported" }));
    res.end();
  }
});

server.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

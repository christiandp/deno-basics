# Deno Basics

Deno quick look and basic stuff with hello world, requests and simple server with routes.

# Run hello-world.ts

> deno run --allow-net hello-world.ts


Go to http://localhost:8000


# Run resquest.ts

> deno run --allow-net request.ts


will return { userId: 1, id: 1, title: "delectus aut autem", completed: false }


# Run server.ts

> deno run --allow-net server.ts

Simple server routes:
- http://localhost:8000
- http://localhost:8000/about
- http://localhost:8000/contact

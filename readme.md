# DENO API

> this is a simple REST API with Deno, Oak and MongoDB write in Typescript

## Run

```sh
deno run --allow-net --allow-write --allow-read --allow-env --allow plugin --unstable server.ts
```

### Routes

```
GET /api/v1/activities
GET /api/v1/activities/:id
POST /api/v1/activities
DELETE /api/v1/activities/:id
PUT /api/v1/activities/:id
```

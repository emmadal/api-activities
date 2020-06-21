import { Application } from "https://deno.land/x/oak/mod.ts";
import { oakCors } from "https://deno.land/x/cors/mod.ts";
import { MongoClient } from "https://deno.land/x/mongo@v0.8.0/mod.ts";
import { NotFound } from "./404.ts";
import router from "./routes.ts";

const app = new Application();
const client = new MongoClient();
client.connectWithUri("mongodb://localhost:27017");
const db = client.database("deno");
db.collection("activities");

app.use(router.routes());
app.use(router.allowedMethods());
app.use(oakCors());
app.use(NotFound);

const PORT = Deno.env.get("PORT") || 5000;
const HOST = Deno.env.get("HOST") || "http://localhost";

console.log(`🚀 server started at ${HOST}:${PORT}`);
await app.listen({ port: +PORT });

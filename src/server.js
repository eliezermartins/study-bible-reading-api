import express from "express";
import publisherRoutes from "./routers/publisherRouters.js";
import bibleRoutes from "./routers/bibleRouters.js";

const app = express();
publisherRoutes(app);
bibleRoutes(app);

app.listen(3000, () => {
    console.log("Server listening on port 3000");
});
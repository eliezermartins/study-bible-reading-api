import express from "express";
import { getBibles, getBible, putBible } from "../controllers/biblesControllers.js";

const bibleRoutes = (app) => {
    app.use(express.json());

    app.get("/bibles", getBibles);
    app.get("/bible/:id", getBible);
    // app.post("/bible", postBible);
    app.put("/bible/:id", putBible);
    // app.delete("/bible/:id", deleteBible);
};

export default bibleRoutes;
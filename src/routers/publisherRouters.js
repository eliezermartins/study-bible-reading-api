import express from "express";
//import cors from "cors";
import { getPublishers, getPublisher, postPublisher, putPublisher, deletePublisher } from '../controllers/publisherControllers.js';

// const corsOptions = {
//     origin: "http://localhost:8000",
//     optionsSuccessStatus: 200
// }

const publisherRoutes = (app) => {
    app.use(express.json());
    //app.use(cors(corsOptions));

    app.get("/publishers", getPublishers);
    app.get("/publisher/:id", getPublisher);
    app.post("/publisher", postPublisher);
    app.put("/publisher/:id", putPublisher);
    app.delete("/publisher/:id", deletePublisher);
};

export default publisherRoutes;
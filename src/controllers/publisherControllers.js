import { getAllPublishers, getPublisherById, addPublisher, updatePublisher, removePublisher } from "../models/publishersModel.js";

export async function getPublishers(req, res) {
    const publishers = await getAllPublishers();
    res.status(200).json(publishers);
}

export async function getPublisher(req, res) {
    try {
        const publisher = await getPublisherById(req.params.id);
        res.status(200).json(publisher);
    } catch (error) {
        console.error(error.message);
        res.status(400).json({ "Erro": "Objeto não encontrado" });
    }
}

export async function postPublisher(req, res) {
    try {
        const publisher = await addPublisher(req.body);
        res.status(201).json(publisher);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ "Erro": "Falha na requisição" });
    }
}

export async function putPublisher(req, res) {
    try {
        const publisher = await updatePublisher(req.params.id, req.body);
        res.status(200).json(publisher);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ "Erro": "Falha na requisição" });
    }
}

export async function deletePublisher(req, res) {
    try {
        const publisher = await removePublisher(req.params.id);
        res.status(200).json(publisher);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ "Erro": "Falha na requisição" });
    }
}

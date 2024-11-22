import { getAllBibles, getBibleById, updateBible } from "../models/bibleModel.js";

export async function getBibles(req, res) {
    const bibles = await getAllBibles();
    res.status(200).json(bibles);
}

export async function getBible(req, res) {
    try {
        const bible = await getBibleById(req.params.id);
        res.status(200).json(bible);
    } catch (error) {
        console.error(error.message);
        res.status(400).json({ "Erro": "Objeto não encontrado" });
    }
}

export async function putBible(req, res) {
    try {
        const bible = await updateBible(req.params.id, req.body);
        res.status(200).json(bible);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ "Erro": "Falha na requisição" });
    }
}
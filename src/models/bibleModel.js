import 'dotenv/config';
import { ObjectId } from "mongodb";
import dbConnect from '../config/dbConfig.js';

const connection = await dbConnect(process.env.CONNECTION_STRING);
const db = connection.db(process.env.DATABASE_NAME);
const collection = db.collection('bibles');

export async function getAllBibles() {
    return collection.find().toArray();
}

export async function getBibleById(id) {
    const objectID = ObjectId.createFromHexString(id);
    return collection.findOne({ _id: objectID });
}

export async function updateBible(id, bible) {
    const objectID = ObjectId.createFromHexString(id);
    return collection.updateOne({ _id: objectID }, { $set: bible });
}
import 'dotenv/config';
import { ObjectId } from "mongodb";
import dbConnect from '../config/dbConfig.js';

const connection = await dbConnect(process.env.CONNECTION_STRING);
const db = connection.db(process.env.DATABASE_NAME);
const collection = db.collection('publishers');

export async function getAllPublishers() {
    return collection.find().toArray();
}

export async function getPublisherById(id) {
    const objectID = ObjectId.createFromHexString(id);
    return collection.findOne({ _id: objectID });
}

export async function addPublisher(publisher) {
    return collection.insertOne(publisher);
}

export async function updatePublisher(id, publisher) {
    const objectID = ObjectId.createFromHexString(id);
    return collection.updateOne({ _id: objectID }, { $set: publisher });
}

export async function removePublisher(id) {
    const objectID = ObjectId.createFromHexString(id);
    return collection.deleteOne({ _id: objectID });
}

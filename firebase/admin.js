require('dotenv').config();

import { v4 } from 'uuid';

const { initializeApp, applicationDefault } = require("firebase-admin/app");
const { getFirestore } =  require("firebase-admin/firestore");

const appName = v4();

try {
    initializeApp({
        credential: applicationDefault()
    }, appName);
} catch (e) {
    console.log(e)
}

export const db = getFirestore();
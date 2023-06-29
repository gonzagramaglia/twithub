require('dotenv').config();

import { v4 } from 'uuid';

const { initializeApp, applicationDefault } = require("firebase-admin/app");
const { getFirestore } =  require("firebase-admin/firestore");

try {
    initializeApp({
        credential: applicationDefault()
    });
} catch (e) {
    console.log(e)
}

export const db = getFirestore();
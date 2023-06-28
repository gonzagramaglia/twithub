require('dotenv').config();

import { v4 } from 'uuid';

const { initializeApp, applicationDefault } = require("firebase-admin/app");
const { getFirestore } =  require("firebase-admin/firestore");

const appName = v4();

initializeApp({
    credential: applicationDefault()
}, appName);

export const db = getFirestore();
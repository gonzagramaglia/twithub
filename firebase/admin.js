require('dotenv').config();

import { v4 } from 'uuid';

const { initializeApp, applicationDefault } = require("firebase-admin/app");
const { getFirestore } =  require("firebase-admin/firestore");

const appName = v4();

initializeApp({
    credential: applicationDefault()
}, appName);
// maybe the try & catch approach is a better solution

export const db = getFirestore();
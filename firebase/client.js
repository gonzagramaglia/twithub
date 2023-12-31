import { initializeApp } from "@firebase/app";
import { getFirestore, collection, addDoc, getDocs, doc, onSnapshot } from "firebase/firestore";
import { getAuth, onAuthStateChanged, GithubAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyBm-MTReOavOD_0mSN4CgWJavAWP5yt3Os",
    authDomain: "twithub-c20d1.firebaseapp.com",
    projectId: "twithub-c20d1",
    storageBucket: "twithub-c20d1.appspot.com",
    messagingSenderId: "502648838854",
    appId: "1:502648838854:web:7dd10489459e66274ed5c7"
};

const app = initializeApp(firebaseConfig);
const storage = getStorage(app);

const db = getFirestore(app);

const mapUserFromFirebaseAuthToUser = (user) => {
    // const credential = GithubAuthProvider.credentialFromResult(result);
    // const token = credential.accessToken;

    const { displayName, photoURL, email, uid } = user

    return {
        name: displayName,
        photo: photoURL,
        email,
        uid,
    }
}

export const onAuthStateChange = (onChange) => {
    const auth = getAuth();
    console.log(auth)
    onAuthStateChanged(auth, (user) => {
    if (user) {
        const normalizedUser = mapUserFromFirebaseAuthToUser(user)
        onChange(normalizedUser)
    } 
    });
}

export const  logOut = (onClick) => {
    const auth = getAuth();
    signOut(auth).then(() => {
        onClick(null)
    }).catch((error) => {
        alert('Something went wrong')
    });
}


export const loginWithGitHub = () => {
    const githubProvider = new GithubAuthProvider();
    githubProvider.setCustomParameters(firebaseConfig);
    const auth = getAuth();
    return signInWithPopup(auth, githubProvider)
        .then( (result) => {
            const user = result.user;
            mapUserFromFirebaseAuthToUser(user)
            }
        );
};


export const addTweet = async ({ photo, content, userId, userName, name, img }) => {
    try {
        const docRef = await addDoc(collection(db, "tweets"), {
            photo,
            content,
            userId,
            img,
            name,
            userName,
            createdAt: new Date(),
            likesCount: 0,
            sharesCount: 0
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
}

const mapTweetsFromFirebaseToTweetObject = (doc) => {
    const data = doc.data();
    const id = doc.id;
    const { createdAt } = data;

    return {
        ...data,
        id,
        createdAt: +createdAt.toDate()
    }
}


export const listenLatestTweets = onSnapshot(collection(db, "tweets"), mapTweetsFromFirebaseToTweetObject);


export const fetchLatestTweets = async () => {
    const { docs } = await getDocs(collection(db, "tweets"));
    return docs.map(mapTweetsFromFirebaseToTweetObject)
}

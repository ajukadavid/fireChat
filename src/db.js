import { initializeApp } from 'firebase/app';
import "firebase/database"

const config = {
    //APIKeys
    apiKey: "AIzaSyAG7rYv4Jstyh4oMJZM89fLfZR5c1bxYPE",
    authDomain: "firechat-254ee.firebaseapp.com",
    projectId: "firechat-254ee",
    storageBucket: "firechat-254ee.appspot.com",
    messagingSenderId: "645038757756",
    appId: "1:645038757756:web:b5124ebf7bc683338876f9"
}

const db = initializeApp(config)

export default db
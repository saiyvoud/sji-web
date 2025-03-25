import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCY5p-6uKdDoo2SbgmquzzcnbwbSqdSegc",
    authDomain: "sji-investment.firebaseapp.com",
    projectId: "sji-investment",
    storageBucket: "sji-investment.firebasestorage.app",
    messagingSenderId: "1033433010584",
    appId: "1:1033433010584:web:4a12cb504704d2917e1bed",
    measurementId: "G-Z1TEG0QLHT"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
    try {
        provider.setCustomParameters({
            prompt: "select_account", // ให้เลือกบัญชีทุกครั้ง
        });
        const result = await signInWithPopup(auth, provider);
        // console.log(result);
        return result.user;
    } catch (error) {
        Error("Login error", "Please try again")
        //window.location.reload();
        // console.log(error);
        return false;
    }
};

export const signOutGoogle = async () => {
    try {
        await auth.signOut();
    } catch (error) {
        throw error;
    }
}
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const signInWithGoogle = () => {
  const provider = GoogleAuthProvider();
  signInWithPopup(getAuth(), provider)
    .then((result) => {
      const user = result.user;
      return user;
    })
    .catch((error) => {
      console.error(error.code + " " + error.message);
    });
};

export default signInWithGoogle;

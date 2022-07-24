import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const signInWithGoogle = async () => {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(getAuth(), provider)
    .then((result) => {
      const user = result.user;
      return user;
    })
    .catch((error) => {
      console.error(error.code + " " + error.message);
      // return error;
    });
};

export default signInWithGoogle;

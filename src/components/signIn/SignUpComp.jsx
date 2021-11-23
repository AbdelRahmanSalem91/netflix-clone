import { useRef } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import styles from "./signUpComp.module.css";
import { auth } from "../../firebase";

const SignUpComp = () => {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  const signIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(
      auth,
      emailRef.current.value,
      passwordRef.current.value
    )
      .then((authUser) => {
        console.log(authUser);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
  return (
    <section className={styles.signUp}>
      <form>
        <h2>Sign In</h2>
        <input ref={emailRef} type="email" placeholder="Email Address" />
        <input ref={passwordRef} type="Password" placeholder="Password" />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>
        <h4>
          <span className={styles.signUp_grey}>New to Netflix? </span>
          <span className={styles.signUp_link} onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </section>
  );
};

export default SignUpComp;

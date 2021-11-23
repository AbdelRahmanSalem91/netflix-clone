import styles from "./loginComp.module.css";
import background from "../../assets/login-bg.jpg";
import logo from "../../assets/login-logo.png";
import { useState } from "react";
import SignIn from "../../pages/signIn/SignUp";

const LoginComp = () => {
  const [signin, setSignin] = useState(false);
  return (
    <section
      className={styles.login}
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className={styles.login_bg}>
        <img src={logo} alt="Netflex Logo" className={styles.login_logo} />
        <button onClick={() => setSignin(true)} className={styles.login_button}>
          Sign In
        </button>
        <div className={styles.login_gradient} />
      </div>
      <div className={styles.login_body}>
        {signin ? (
          <SignIn />
        ) : (
          <>
            <h2>Unlimited films, TV programmes and more.</h2>
            <h3>Watch anywhere. Cancel at any time.</h3>
            <h4>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h4>
            <div className={styles.login_input}>
              <form>
                <input type="email" placeholder="Email address" />
                <button
                  onClick={() => setSignin(true)}
                  className={styles.get_started}
                >
                  GET STARTED
                </button>
              </form>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default LoginComp;

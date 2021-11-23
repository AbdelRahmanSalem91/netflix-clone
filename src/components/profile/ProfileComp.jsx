import styles from "./profileComp.module.css";
import editAvatar from "../../assets/Netflix-avatar.png";
import { useSelector } from "react-redux";
import { selectUser } from "../../features/user/userSlice";
import { auth } from "../../firebase";

const ProfileComp = () => {
  const user = useSelector(selectUser);
  return (
    <section className={styles.profile}>
      <div className={styles.profile_body}>
        <h2>Edit Profile</h2>
        <div className={styles.profile_info}>
          <img src={editAvatar} alt="" />
          <div className={styles.profile_details}>
            <h2>{user.email}</h2>
            <div className={styles.profile_plans}>
              <h4>Planse</h4>
              <button onClick={() => auth.signOut()} className={styles.signOut}>
                Sign out
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileComp;

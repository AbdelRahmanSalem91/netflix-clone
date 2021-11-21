import styles from "./banner.module.css";

const Banner = () => {
  function truncate(string, numberOfChar) {
    return string?.length > numberOfChar
      ? string.substr(0, numberOfChar - 1) + "..."
      : string;
  }
  return (
    <header className={styles.banner}>
      <div className={styles.banner_contents}>
        <h2 className={styles.banner_title}>Movie Title</h2>
        <div className={styles.banner_buttons}>
          <button className={styles.banner_button}>Play</button>
          <button className={styles.banner_button}>My List</button>
        </div>
        <h3 className={styles.banner_description}>
          {truncate(
            "This is for the description of the movie for testing This is for the description of the movie for testing This is for the description of the movie for testing",
            150
          )}
        </h3>
      </div>
      <div className={styles.banner_fade} />
    </header>
  );
};

export default Banner;

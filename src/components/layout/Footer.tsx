import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={`${styles.footer} bg-light`}>
      <div>
        <a
          href="http://www.trimble.com/Corporate/Terms_of_Use.aspx"
          target="_blank"
          rel="noopener nofollow"
        >
          Terms of Use
        </a>
        <span className={styles.slash}> | </span>
      </div>
      <div>
        <a
          href="http://www.trimble.com/Corporate/Privacy.aspx"
          target="_blank"
          rel="noopener nofollow"
        >
          Privacy Statement
        </a>
        <span className={styles.slash}> | </span>
      </div>
      <div>
        <a
          href="http://www.trimble.com/trademarks.aspx"
          target="_blank"
          rel="noopener nofollow"
        >
          Trademark Information
        </a>
        <span className={styles.slash}> | </span>
      </div>
      <div>
        <a
          href="https://www.trimble.com/Corporate/Privacy.aspx?tab=contact_us"
          target="_blank"
          rel="noopener nofollow"
        >
          Do Not Sell My Personal Information
        </a>
        <span className={styles.slash}> | </span>
      </div>
      <div>
        <p className="mb-0">© 2023, Trimble Inc. All Rights Reserved.</p>
      </div>
    </section>
  );
};

export default Footer;

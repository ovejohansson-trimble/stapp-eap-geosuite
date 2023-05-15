import { Link } from "react-router-dom";
import styles from "./Download.module.css";
import PageHeader from "./PageHeader";

const Download = () => {
  const downloadLink = "";
  return (
    <article>
      <PageHeader header="Download"></PageHeader>
      <section className="mb-4">
        <h1>Download</h1>
        <p>
          The next version of new Geosuite presentation (v 1.0.0) will be
          available to download <b>12th of June</b>.
        </p>
        <p>
          Read more about the installation in the <Link to={"/faq"}>FAQ</Link>{" "}
          tab
        </p>
        <a
          href={downloadLink}
          className={[styles.aButton, styles.disabled].join(" ")}
        >
          Download
        </a>
      </section>
    </article>
  );
};

export default Download;

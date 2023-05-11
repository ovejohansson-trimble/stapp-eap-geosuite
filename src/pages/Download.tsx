import { Link } from "react-router-dom";
import styles from "./Download.module.css";
import PageHeader from "./PageHeader";

const Download = () => {
  const downloadLink = "";
  const currentVersion = "";
  return (
    <article>
      <PageHeader header="Download"></PageHeader>
      <section className="mb-4">
        <h1>Download</h1>
        <p>
          The latest version of the Geosuite EAP will be available for download
          in this tab.
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

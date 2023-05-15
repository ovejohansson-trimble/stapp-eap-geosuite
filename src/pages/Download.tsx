import { Link } from "react-router-dom";
import styles from "./Download.module.css";
import PageHeader from "./PageHeader";
import { currentEAP } from "../services/common-data";

const Download = () => {
  const downloadLink = "";
  return (
    <article>
      <PageHeader header="Download"></PageHeader>
      <section className="mb-4">
        <h1>Download</h1>
        <p>
          The next version of new Geosuite presentation (v{" "}
          {currentEAP.iteration}) will be available to download{" "}
          <b>{currentEAP.startDate}</b>.
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

import { Link } from "react-router-dom";
import styles from "./Download.module.css";
import PageHeader from "./PageHeader";
import { currentEAP } from "../services/common-data";

const Download = () => {
  return (
    <article>
      <PageHeader header="Download"></PageHeader>
      <section className="mb-4">
        <h1>Download</h1>
        <p>
          The next version of new Geosuite presentation (v{" "}
          {currentEAP.iteration}) is available to download from{" "}
          <b>{currentEAP.startDate}</b>.
        </p>
        <p>
          Read more about the installation in the <Link to={"/faq"}>FAQ</Link>{" "}
          tab
        </p>
        <h3>Important information</h3>
        <p>
          The first release of the EAP (v {currentEAP.iteration}) has very
          limited functionality.
        </p>
        <p>
          The aim for the first release is to make sure that you as a
          participant can access and download the client, make sure that the
          authentication works, and that you as a user can reach the geosuite
          projects stored in the cloud. It is also meant for you as a user to
          get a preview of the new user interface, even though the functionality
          is very limited.
        </p>
        <a
          href={
            "https://gdmgateway.salmonflower-00ba38c7.swedencentral.azurecontainerapps.io/install/"
          }
          className={[styles.aButton].join(" ")}
        >
          Download
        </a>
      </section>
    </article>
  );
};

export default Download;

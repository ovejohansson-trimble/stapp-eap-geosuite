import { Link } from "react-router-dom";
import styles from "./Download.module.css";
import PageHeader from "./PageHeader";
import { currentEAP } from "../services/common-data";

const Download = () => {
  return (
    <article>
      <PageHeader header="Clients"></PageHeader>
      <section className="mb-4">
        <h1>Information</h1>
        <p>
          The previous page <b>Download</b> is now replaced with the section{" "}
          <b>Clients</b> as we are now testing two clients: <b>Web</b> and{" "}
          <b>Desktop</b> Client
        </p>
        <p>
          Take a look at the <Link to={"/releasenotes"}>Release notes</Link> for
          the current release before testing, as we would like feedback on the
          latest released features.
        </p>
      </section>

      <section className="mb-4">
        <h1>Desktop client</h1>
        <p>
          The second version of new Geosuite Presentation EAP (v{" "}
          {currentEAP.iteration}) is now available.
        </p>
        <p>
          <b>Note!</b> If you already installed the client in a previous version
          you do not need to download it again, just open the client and it with
          automatically update.
        </p>
        <a
          href={
            "https://gdmgateway.salmonflower-00ba38c7.swedencentral.azurecontainerapps.io/install/"
          }
          className={`${styles.aButton} mb-2`}
        >
          Download
        </a>
      </section>
      <section className="mb-4">
        <h1>Web client</h1>
        <p>
          The web client can be reached by navigating to the following website:{" "}
          <a href={"https://web.eap.geosuite.se"}>
            https://web.eap.geosuite.se
          </a>
        </p>
        <p>
          <b>Note!</b> When navigating to the webpage you will first be
          redirected to the Trimble ID login page to authenticate your login. To
          be able to use the Web Client, you need to fulfill the same
          requirements as for the Desktop Client; Creating a Trimble Id and
          applying for the EAP with the google form.
        </p>
      </section>
    </article>
  );
};

export default Download;

import { Link } from "react-router-dom";
import styles from "./Download.module.css";
import PageHeader from "./PageHeader";
import { currentEAP, isTestable, nextEAP } from "../services/common-data";

const Download = () => {
  return (
    <article>
      <PageHeader header="Clients"></PageHeader>
      <section className="mb-4">
        <h1>Information</h1>
        {isTestable ? (
          <>
            <p>
              Take a look at the <Link to={"/releasenotes"}>Release notes</Link>{" "}
              for the current release before testing, as we would like feedback
              on the latest released features.
            </p>
            <section className="mb-4">
              <h1>Desktop client</h1>
              <p>
                The third version of new Geosuite Presentation EAP (v{" "}
                {currentEAP.iteration}) is now available.
              </p>
              <p>
                <b>Note!</b> If you already installed the client in a previous
                version you do not need to download it again, just open the
                client and it with automatically update.
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
                The web client can be reached by navigating to the following
                website:{" "}
                <a href={"https://web.eap.geosuite.se"}>
                  https://web.eap.geosuite.se
                </a>
              </p>
              <p>
                <b>Note!</b> When navigating to the webpage you will first be
                redirected to the Trimble ID login page to authenticate your
                login. To be able to use the Web Client, you need to fulfill the
                same requirements as for the Desktop Client; Creating a Trimble
                Id and applying for the EAP with the google form.
              </p>
            </section>
          </>
        ) : (
          <p>
            The test period for the current EAP has passed, the next EAP release
            will be available at {nextEAP.startDate}.
          </p>
        )}
      </section>
    </article>
  );
};

export default Download;

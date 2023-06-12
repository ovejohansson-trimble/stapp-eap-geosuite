import PageHeader from "./PageHeader";
import EAPProcess from "../assets/EAP_process.png";
import { Link } from "react-router-dom";
import styles from "./Overview.module.css";
import { currentEAP } from "../services/common-data";

const Overview = () => {
  return (
    <article>
      {" "}
      <PageHeader header="Geosuite Presentation EAP"></PageHeader>
      {true && (
        <section>
          <h1 className="display-3 mb-4 d-flex justify-content-center">
            <Link to={"/download"}>
              EAP VERSION v{currentEAP.iteration} IS NOW AVAILABLE
            </Link>
          </h1>
        </section>
      )}
      <section className="mb-4">
        <h1>About</h1>
        <p>
          Geosuite Presentation EAP (Early Access program) is for Geosuite users
          who want to test, evaluate and provide feedback on "pre-releases" of
          the so called new Geosuite Presentation. We are using this (EAP)
          process as we want to create a solution that is made with the help of
          you (the users). Note that this product is available through a so
          called early access program, and is not a finished product. The
          product is subject to change, and actual results may materially differ
        </p>
        <p>
          The work is divided in to iterations, where we aim to release a new
          version every 5th week. On the first day of the iteration you will be
          able to download the latest release on this website (under the{" "}
          <Link to={"/download"}>Download</Link> tab), and during the first two
          weeks of the iteration you can submit feedback through a form which
          can you find under the <Link to={"/feedback"}>Feedback</Link> tab.
        </p>
        <p>
          Each interval will focus on certain aspects of the program, e.g.
          viewing data, editing boreholes, making interpretations and so forth.
          In the beginning the functionalities will be limited, but it will
          expand for each iteration.
        </p>
        <div className="d-flex justify-content-center my-4">
          <img
            src={EAPProcess}
            className={styles.responsiveImage}
            alt="EAP process"
          />
        </div>
      </section>
      <section className="mb-4">
        <h1>How to participate</h1>
        <p>To participate in the Geosuite EAP, follow the steps below.</p>
        <p>
          You only need to do Step 1 and 2 once, while Step 3 and 4 is a
          iterative process that you do for each release.
        </p>
        <ol>
          <li>
            Create a trimble id at{" "}
            <a href="https://np.trimble.com" target="_blank">
              np.trimble.com
            </a>
          </li>
          <li>
            Apply for the EAP with the following form:{" "}
            <a href="https://forms.gle/7VVrK5KU8qUZTM9h7" target="_blank">
              Google form
            </a>{" "}
          </li>
          <li>
            Download the newest release of the EAP from the{" "}
            <Link to={"/download"}>Download</Link> tab
          </li>
          <li>
            Provide feedback in the form under the{" "}
            <Link to={"/feedback"}>Feedback</Link> tab
          </li>
        </ol>
        <p>
          If you have any questions or issues, feel free to contact us at{" "}
          <a href="mailto:eap.geosuite@trimble.com">eap.geosuite@trimble.com</a>
        </p>
      </section>
      <section className="mb-4">
        <h1>Deadlines</h1>
        <p>
          The current version of new Geosuite presentation EAP (v{" "}
          {currentEAP.iteration}) is now available to download.
        </p>
        <p>
          The feedback form (for v {currentEAP.iteration}) is open from release
          until the <b>{currentEAP.endDate}</b>.
        </p>
      </section>
    </article>
  );
};

export default Overview;

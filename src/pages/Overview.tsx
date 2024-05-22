import PageHeader from "./PageHeader";
import EAPProcess from "../assets/EAP_process.png";
import { Link } from "react-router-dom";
import styles from "./Overview.module.css";
import { currentEAP, isTestable, nextEAP } from "../services/common-data";

const Overview = () => {
  return (
    <article>
      {" "}
      <PageHeader header="Geosuite Presentation EAP"></PageHeader>
      {isTestable && (
        <section>
          <h1>Current release</h1>
          <p>
            The latest release (v 1.0.8), that came out may 22nd, contains lots
            of new functionalities for you to try out.
          </p>
          <p>
            You can either go and install the desktop application, and test its
            newly added CAD connection and improved UI, or test out the web
            applications new borehole and field investigation view.
          </p>
          {/* <h1 className="display-4 mb-2 d-flex justify-content-center">
            <Link to={"/clients"}>
              EAP VERSION v{currentEAP.iteration} IS NOW AVAILABLE
            </Link>
          </h1>
          <h4 className="mb-4 d-flex justify-content-center">
            <Link to={"/releasenotes"}>
              Please read release notes before testing
            </Link>
          </h4> */}
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
          version every 5th week. On the first day of the iteration the new
          version is available (see <Link to={"/clients"}>Clients</Link> tab).
          During the first two weeks of the iteration you can submit feedback
          through a form which can you find under the{" "}
          <Link to={"/feedback"}>Feedback</Link> tab.
        </p>
        <p>
          Each interval will focus on certain aspects of the program, e.g.
          viewing data, editing boreholes, making interpretations and so forth.
          In the beginning the functionalities will be limited, but it will
          expand for each iteration. Before testing a new EAP version, take a
          look at the <Link to={"/releasenotes"}>Release notes</Link> to know
          what new features to test and provide feedback on.
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
            Access the latest version of the EAP Desktop and Web client in the
            <Link to={"/clients"}> Clients</Link> tab
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
        {isTestable ? (
          <div>
            <p>
              Geosuite presentation EAP (v {currentEAP.iteration}) was released
              on {currentEAP.startDate} and is available for testing.
            </p>
            <p>
              The feedback form (for v {currentEAP.iteration}) is open until{" "}
              {currentEAP.endDate}.
            </p>
          </div>
        ) : (
          <div>
            <p>
              The feedback form (for v {currentEAP.iteration}) closed{" "}
              {currentEAP.endDate}
            </p>

            <p>
              The next version of Geosuite Presentation EAP (v{" "}
              {nextEAP.iteration}) will be released at {nextEAP.startDate}
            </p>
          </div>
        )}
      </section>
    </article>
  );
};

export default Overview;

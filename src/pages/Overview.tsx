import PageHeader from "./PageHeader";
import EAPProcess from "../assets/EAP_process.png";
import styles from "./Overview.module.css";

const Overview = () => {
  return (
    <article>
      {" "}
      <PageHeader header="Geosuite Presentation EAP"></PageHeader>
      <section className="mb-4">
        <h1>About</h1>
        <p>
          Geosuite Presentation EAP (Early Access program) is for geosuite users
          who want to test, evaluate and provide feedback on "pre-releases" of
          the so called new Geosuite Presentation. We are using this (EAP)
          process as we want to create a solution that is made with the help of
          you (the users).
        </p>
        <p>
          The work is divided in to iterations, where we aim to release a new
          version every 5th week. On the first day of the iteration you will be
          able to download the newest release on this website (under Download),
          and during the first two weeks of the iteration you can submit
          feedback through a form which can you find under the Feedback tab.
        </p>
        <p>
          Each interval will focus on certain aspects of the program, e.g.
          viewing data, editing boreholes, making interpretations and so forth.
          In the beginning the functionalities will be limited, but it will
          expand for each iteration.
        </p>

        <img
          src={EAPProcess}
          className="mx-auto my-4 d-none d-md-block d-lg-block d-xl-block"
          alt="EAP process"
          width="684px"
          height="608px"
        />
      </section>
      {/*       <section className="mb-4">
        <h1>About new Presentation</h1>
        <p>
          A summary of the biggest changes that have been made moving from the
          current geosuite presentation to the so called new geosuite
          presentation is stated below:
        </p>
        <ul>
          <li>
            Moving from a local file based system to a cloud based solution
          </li>
          <li>Changing the data model</li>
        </ul>
      </section> */}
      <section className="mb-4">
        <h1>How to participate</h1>
        <p>To participate in the Geosuite EAP, follow the steps below.</p>
        <p>
          You only need to do Step 1 and 1 once, while Step 3 and 4 is a
          iterative process that you do for each release.
        </p>
        <ol>
          <li>
            Create a trimble id at{" "}
            <a href="https://np.trimble.com">np.trimble.com</a>
          </li>
          <li>
            Apply for the EAP with the following form:{" "}
            <a href="https://forms.gle/7VVrK5KU8qUZTM9h7">Google form</a>{" "}
          </li>
          <li>Download the newest release of the EAP.</li>
          <li>Provide feedback in the form under the Feedback tab</li>
        </ol>
      </section>
      <section className="mb-4">
        <h1>Download</h1>
        <p>
          The latest version of the Geosuite EAP will be available to download
          from the following link. It is a simple one click install.
        </p>
        <button className="btn btn-primary">
          <a href="" className={styles.whiteText}>
            Download
          </a>
        </button>
      </section>
    </article>
  );
};

export default Overview;

import PageHeader from "./PageHeader";
import { currentEAP, isTestable } from "../services/common-data";
import { Link } from "react-router-dom";

const Feedback = () => {
  return (
    <article>
      <PageHeader header="Feedback"></PageHeader>
      <section>
        <h1>Submit feedback</h1>
        <div className="mb-1">
          <p>
            The link below a google form where you will be able to submit
            feedback for the current iteration. In this stage of the process, we
            would like you to focus on the "big picture" and not on minor
            details. We will take your feedback in to consideration when we are
            planning the next iteration.
          </p>
          <div className="d-flex gap-2">
            <p>Please read release notes before testing:</p>
            <Link to={"/releasenotes"}>Release notes</Link>
          </div>
        </div>

        {isTestable ? (
          <div>
            <p>
              The feedback form (for v {currentEAP.iteration}) is open between{" "}
              <b>
                {currentEAP.startDate} and {currentEAP.endDate}
              </b>
            </p>
            <a href="https://forms.gle/kbR1U7pKdknXH3Ew6" target="_blank">
              Feedback form
            </a>
          </div>
        ) : (
          <p>
            The feedback form closed <b>{currentEAP.endDate}</b>
          </p>
        )}
      </section>
    </article>
  );
};

export default Feedback;

import PageHeader from "./PageHeader";
import { currentEAP } from "../services/common-data";

const Feedback = () => {
  return (
    <article>
      <PageHeader header="Feedback"></PageHeader>
      <section>
        <h1>Submit feedback</h1>
        <p>
          The link below a google form where you will be able to submit feedback
          for the current iteration. In this stage of the process, we would like
          you to focus on the "big picture" and not on minor details. We will
          take your feedback in to consideration when we are planning the next
          iteration.
        </p>
        {false && (
          <p>
            The feedback form (for v {currentEAP.iteration}) is open between{" "}
            <b>
              {currentEAP.startDate} and {currentEAP.endDate}
            </b>
            .
          </p>
        )}
        {true && (
          <p>
            The feedback form closed <b>{currentEAP.endDate}</b>{" "}
          </p>
        )}

        <a href="https://forms.gle/WC4weX9rDubkrDYC7" target="_blank">
          Feedback form
        </a>
      </section>
    </article>
  );
};

export default Feedback;

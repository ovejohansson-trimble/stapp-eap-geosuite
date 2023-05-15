import PageHeader from "./PageHeader";

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
        <p>
          The feedback form (for v 1.0.0) is open between{" "}
          <b>12th and 25th of June</b>.
        </p>
        <a href="https://forms.gle/nAPPSg9xKchfQxCn6" target="_blank">
          Feedback form
        </a>
      </section>
    </article>
  );
};

export default Feedback;

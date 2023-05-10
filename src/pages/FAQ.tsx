import PageHeader from "./PageHeader";
import FAQList from "../components/faq/FAQList";

const FAQ_DATA = [
  {
    header: "How do i install?",
    bodyText:
      "Go to the Overview tab, then navigate to the bottom of the webpage. There, you can download the newest release by clicking a download button. Each release is a simple one click install.",
  },
  {
    header: "How do i participate?",
    bodyText:
      "Go to the Overview tab, then follow the steps described in the section 'How to participate'",
  },
];

const FAQ = () => {
  return (
    <article>
      <PageHeader header="FAQ"></PageHeader>
      <section>
        <h1>Frequently asked questions</h1>
        <p>
          In this section frequently asked questions are posted and answered.
        </p>
      </section>
      <FAQList faqs={FAQ_DATA}></FAQList>
    </article>
  );
};

export default FAQ;

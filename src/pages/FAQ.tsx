import PageHeader from "./PageHeader";
import FAQList from "../components/faq/FAQList";

const DUMMY_DATA = [
  {
    header: "How do i install?",
    bodyText: "Press the button",
  },
  {
    header: "How do i install?",
    bodyText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id commodi quasi eos debitis minus perferendis alias soluta asperiores blanditiis minima eius nostrum veniam, voluptas quam sequi rerum neque maxime necessitatibus!",
  },
  {
    header: "How do i install?",
    bodyText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id commodi quasi eos debitis minus perferendis alias soluta asperiores blanditiis minima eius nostrum veniam, voluptas quam sequi rerum neque maxime necessitatibus!",
  },
  {
    header: "How do i install?",
    bodyText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id commodi quasi eos debitis minus perferendis alias soluta asperiores blanditiis minima eius nostrum veniam, voluptas quam sequi rerum neque maxime necessitatibus!",
  },
  {
    header: "How do i install?",
    bodyText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id commodi quasi eos debitis minus perferendis alias soluta asperiores blanditiis minima eius nostrum veniam, voluptas quam sequi rerum neque maxime necessitatibus!",
  },
  {
    header: "What is a frequently asked question?",
    bodyText:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Id commodi quasi eos debitis minus perferendis alias soluta asperiores blanditiis minima eius nostrum veniam, voluptas quam sequi rerum neque maxime necessitatibus!",
  },
];

const FAQ = () => {
  return (
    <article>
      <PageHeader header="FAQ"></PageHeader>
      <section>
        <h1>Frequently asked questions</h1>
        <p>Questions that often arise is posted here.</p>
      </section>
      <FAQList faqs={DUMMY_DATA}></FAQList>
    </article>
  );
};

export default FAQ;

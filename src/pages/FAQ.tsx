import PageHeader from "./PageHeader";
import FAQList from "../components/faq/FAQList";
import { Link } from "react-router-dom";

const FAQ_DATA = [
  {
    header: "How do i install?",
    bodyText: (
      <>
        Navigate to the <Link to={"/download"}>Download</Link> tab and download
        the installation file. The installation is a so called one click
        installation, which means that the installation consists of only one
        file
      </>
    ),
  },
  {
    header: "How do i participate?",
    bodyText: (
      <>
        Go to the <Link to={"/"}>Overview</Link> tab, then follow the steps
        described in the section "How to participate"
      </>
    ),
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

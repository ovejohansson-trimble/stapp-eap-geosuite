import PageHeader from "./PageHeader";
import FAQList from "../components/faq/FAQList";
import { Link } from "react-router-dom";

const FAQ_DATA = [
  {
    header: "How do i participate?",
    bodyText: (
      <>
        Go to the <Link to={"/"}>Overview</Link> tab, then follow the steps
        described in the section "How to participate"
      </>
    ),
  },
  {
    header: "How do I use the clients (web/desktop)?",
    bodyText: (
      <>
        Navigate to the <Link to={"/clients"}>Clients</Link> tab. If you want to
        use the Desktop application, download the installation file and install
        the program. The installation is a so called one click installation,
        which means that the installation consists of only one file.{" "}
        <b>You only need to install the client one time</b>. For the web client
        you only need to navigate to:{" "}
        <a href={"https://web.eap.geosuite.se"}>https://web.eap.geosuite.se</a>{" "}
        (You will be redirected to Trimble ID login first).
      </>
    ),
  },
  {
    header: "How do I update the desktop client?",
    bodyText: (
      <>
        You only need to install the client one time, so if another EAP version
        is released you just need to open the program again and it will
        automatically update.
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

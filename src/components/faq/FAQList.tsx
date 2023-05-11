import FAQItem from "./FAQItem";
import { Accordion } from "react-bootstrap";
import IFAQ from "./IFAQ";
interface Props {
  faqs: IFAQ[];
}
const FAQList = ({ faqs }: Props) => {
  if (faqs.length === 0) {
    return <p>FAQ is not available yet</p>;
  }
  return (
    <Accordion>
      {faqs.map((faq, i) => (
        <FAQItem id={i} bodyText={faq.bodyText} header={faq.header}></FAQItem>
      ))}
    </Accordion>
  );
};

export default FAQList;

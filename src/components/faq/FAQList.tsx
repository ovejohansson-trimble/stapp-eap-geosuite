import FAQItem from "./FAQItem";
import { Accordion } from "react-bootstrap";
interface Props {
  faqs: IFAQ[];
}
const FAQList = ({ faqs }: Props) => {
  if (faqs.length === 0) {
    return <p>No frequently asked questions yet</p>;
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

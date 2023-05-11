import { ReactNode } from "react";
import { Accordion } from "react-bootstrap";
interface Props {
  id: number;
  header: string;
  bodyText: ReactNode;
}
const FAQItem = ({ id, header, bodyText }: Props) => {
  return (
    <Accordion.Item eventKey={id.toString()}>
      <Accordion.Header>{header}</Accordion.Header>
      <Accordion.Body>{bodyText}</Accordion.Body>
    </Accordion.Item>
  );
};

export default FAQItem;

import AccordionItem from './AccordionItem';

const Accordion = ({ data }) => {
  return (
    <div className="accordion">
      {data.map((faq, i) => (
        <AccordionItem num={i} title={faq.title} text={faq.text} key={faq.title} />
      ))}
    </div>
  );
};

export default Accordion;

import { useState } from 'react';
import AccordionItem from './AccordionItem';

const Accordion = ({ data }) => {
  const [curOpen, setCurOpen] = useState(null);

  return (
    <div className="accordion">
      {data.map((faq, i) => (
        <AccordionItem
          curOpen={curOpen}
          onOpen={setCurOpen}
          num={i}
          title={faq.title}
          key={faq.title}
        >
          {faq.text}
        </AccordionItem>
      ))}

      <AccordionItem
        curOpen={curOpen}
        onOpen={setCurOpen}
        num={22}
        title="Test 1"
        key="test 1"
      >
        <p>Allows react developers to:</p>
        <ul>
          <li>Break up UI into components</li>
          <li>Make components reusable</li>
          <li>Place state efficiency</li>
        </ul>
      </AccordionItem>
    </div>
  );
};

export default Accordion;

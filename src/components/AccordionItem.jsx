import { useState } from 'react';

const AccordionItem = ({ num, title, text }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen((val) => !val);

  return (
    <div className={`item ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
      <span className="number">{num < 9 ? `0${num + 1}` : num + 1}</span>
      <h2 className="title">{title}</h2>
      <span className="icon">{isOpen ? '-' : '+'}</span>
      {isOpen && <p className="content-box">{text}</p>}
    </div>
  );
};

export default AccordionItem;

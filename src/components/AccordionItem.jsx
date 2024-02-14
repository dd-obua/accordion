const AccordionItem = ({ num, title, curOpen, onOpen, children }) => {
  const isOpen = num === curOpen;

  const handleToggle = () => onOpen(isOpen ? null : num);

  return (
    <div className={`item ${isOpen ? 'open' : ''}`} onClick={handleToggle}>
      <span className="number">{num < 9 ? `0${num + 1}` : num + 1}</span>
      <h2 className="title">{title}</h2>
      <span className="icon">{isOpen ? '-' : '+'}</span>
      {isOpen && <p className="content-box">{children}</p>}
    </div>
  );
};

export default AccordionItem;

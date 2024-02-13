import faqs from '../faqs';

const App = () => {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
};

const Accordion = ({ data }) => {
  return (
    <div className="accordion">
      {data.map((faq, i) => (
        <AccordionItem num={i} title={faq.title} text={faq.text} key={faq.title} />
      ))}
    </div>
  );
};

const AccordionItem = ({ num, title, text }) => {
  return (
    <div className="item">
      <span className="number">{num < 9 ? `0${num + 1}` : num + 1}</span>
      <h2 className="title">{title}</h2>
      <span className="icon">-</span>
      <p className="content-box">{text}</p>
    </div>
  );
};

export default App;

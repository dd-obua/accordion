import Accordion from './Accordion';
import faqs from '../faqs';

const App = () => {
  return (
    <div>
      <Accordion data={faqs} />
    </div>
  );
};

export default App;

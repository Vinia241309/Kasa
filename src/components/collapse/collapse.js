/*import { useState } from 'react';

function Collapse() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="collapse">
        <h3 className="collapse_title" onClick={toggleCollapse}>
          {isOpen ? 'Cacher le contenu' : 'Afficher le contenu'}
        </h3>
        {isOpen && (
          <div className="collapse_content">
            Contenu du collapsible
          </div>
        )}
      </div>
    </>
  );
}

export default Collapse;*/

import { useState } from 'react';
import './collapse.css';

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className='collapse-container'>
      <div className="collapse">
        <h3 onClick={toggleCollapse} className="collapse-title">
          {title} <span className={`arrow ${isOpen ? 'arrow-up' : 'arrow-down'}`} />
        </h3>
        {isOpen && <p className="collapse-content">{content}</p>}
      </div>
    </div>
  );
}


export default Collapse;
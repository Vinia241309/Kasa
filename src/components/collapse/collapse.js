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

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <h3 onClick={toggleCollapse}>{title}</h3>
      {isOpen && <p>{content}</p>}
    </>
  );
}

export default Collapse;
import { useState } from 'react';
import './collapse.css';
import ArrowDown from '../../assets/arrow-down.png';
import ArrowUp from '../../assets/arrow-up.png';

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className='collapse-about'>
      <div className={`about_collapse ${isOpen ? 'open ' : ''}`}>
        <h3 onClick={toggleCollapse} className="collapse-title">
          {title}
          <span className={`arrow ${isOpen ? 'arrow-down' : 'arrow-up'}`}>
            <img src={isOpen ? ArrowDown : ArrowUp} alt="flèche" />
          </span>
        </h3>
        {isOpen && (
          <div className="collapse-content">
            {Array.isArray(content) ? (
              content.map((text, index) => (
                <p key={index}>{text}</p>
              ))
            ) : (
              <p>{content}</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default Collapse;


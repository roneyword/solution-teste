import React, { useState } from 'react';
import { AccordionContainer } from './styles';
import { iconArrow } from '../../assets/icons';

interface AccordionProps {
  items: {
    id: number;
    title: string;
    content: string | React.ReactNode;
  }[];
}

export const Accordion: React.FC<AccordionProps> = ({ items }) => {
  const [activeItem, setActiveItem] = useState<number | null>(null);

  const handleItemClick = (itemId: number) => {
    setActiveItem(activeItem === itemId ? null : itemId);
  };

  return (
    <AccordionContainer>
      {items.map((item) => (
        <li
          className={`accordion-item ${activeItem === item.id ? 'isActive' : ''}`}
          key={item.id}
          onClick={() => handleItemClick(item.id)}
        >
          <div className="accordion-header">
            <h2 className='accordion-header-title'>{item.title}</h2>
            <figure className='accordion-header-icon'>{iconArrow}</figure>
          </div>

          <div
            className="accordion-content"
            dangerouslySetInnerHTML={
              typeof item.content === 'string' ? { __html: item.content } : undefined
            }
          />
        </li>
      ))}
    </AccordionContainer>
  );
};

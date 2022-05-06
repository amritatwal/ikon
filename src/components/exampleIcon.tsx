import * as React from 'react';
import styled from 'styled-components';
/*
* An example icon 
*/

interface IconProps {
  initials: string,
  bgColour: string,
  colour: string
}


export const ExampleIcon: React.FC<IconProps> = ({ initials, bgColour, colour }) => {

  const Icon = styled.button`
    background: ${bgColour};
    color: ${colour};
    border-radius: 50%;
    height: 50px;
    width: 50px;
    border: none;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
    font-size: 1rem;
    letter-spacing: 3px;
  `;

  return (
    <Icon>
      <p>{initials}</p>
    </Icon>
  );
};



import * as React from 'react';

/*
* An example icon 
*/

interface IconProps {
  initials: string,
  bgColour: string,
  colour: string
}

export const exampleIcon: React.FC<IconProps> = ({ initials, bgColour, colour }) => {
  return (
    <div className={"icon-example"}>
      {initials}
    </div>);
};



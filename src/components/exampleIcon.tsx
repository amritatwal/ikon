import * as React from 'react';

/*
*
*
*/

interface IconProps {
  name: string,
  bgColour: string,
  colour: string
}

export const exampleIcon: React.FC<IconProps> = ({ name, bgColour, colour }) => {
  return (
    <div className={"icon-example"}>
      Hello
    </div>);
};



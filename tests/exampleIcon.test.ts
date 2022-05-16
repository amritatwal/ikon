

// import { render } from '@testing-library/react';
// import ListItem from './';


// test("Given the props name, completed and tickItem(), the ListItem should render onto the Dom", () => {
//     const { getByTestId } = render(<ListItem {...testProps} />);
//     const actual = getByTestId("list-item");
//     expect(actual).toBeInTheDocument();
// })

import { wrapper } from '@testing-library/react';
import ExampleIcon from '../src/components/exampleIcon';

it("should render an icon with the appropriate customisation", () => {
    // Arrange props
    const testProps = {
        initials: "AA",
        bgColour: "#D3D3D3",
        colour: "#000000"
    }

    // Act
    const expected = ExampleIcon();
    // Assert
    expect().toEqual(expected);
})
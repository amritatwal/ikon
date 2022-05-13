/*
An object consisting of colours to use for icons.
Colours should be added as a string.
*/

interface ColoursProps {
    [colourName: string]: string
}

const colours: ColoursProps = {
    black: "#000000",
    white: "#FFFFFF",
    pink: "#d67dcc",
};

export default colours;
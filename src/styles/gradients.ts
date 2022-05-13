/*
An object consisting of gradients to use for icons.
Gradients should be added as a string.
*/

interface GradientProps {
    [gradientName: string]: string
}

const gradients: GradientProps = {
    dark: "linear-gradient(to right, #232526, #414345)"
};

export default gradients;
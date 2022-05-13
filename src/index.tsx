/*
* Import components
*/

import React from "react";
import ReactDOM from "react-dom";

import { ExampleIcon } from "./components/exampleIcon";
import gradients from "./styles/gradients";
import colours from "./styles/colours";


ReactDOM.render(
    <React.StrictMode>
        <ExampleIcon initials={"AA"} bgColour={"rgb(37, 150, 190)"} colour={"white"} />
        <ExampleIcon initials={"AA"} bgColour={gradients.dark} colour={"white"} />
        <ExampleIcon initials={"AA"} bgColour={colours.pink} colour={"white"}/>
    </React.StrictMode>,
    document.getElementById("root")
);




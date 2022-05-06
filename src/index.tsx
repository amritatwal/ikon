/*
* Import components
*/

import React from "react";
import ReactDOM from "react-dom";

import { ExampleIcon } from "./components/exampleIcon";

ReactDOM.render(
    <React.StrictMode>
        <ExampleIcon initials={"AA"} bgColour={"rgb(37, 150, 190)"} colour={"white"}/>
    </React.StrictMode>,
    document.getElementById("root")
);



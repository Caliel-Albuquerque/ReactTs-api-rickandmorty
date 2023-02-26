import React from "react";

import { Home } from "../features/Home/src/Home";
import { Details } from "../features/DetailsCharacter/src/Detais";

import {
    createBrowserRouter
} from "react-router-dom";


const routerLink = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/details/:id",
        element: <Details/>
    }
]);

export default routerLink;
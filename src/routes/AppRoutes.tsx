import React from "react"
import { useRoutes } from 'react-router-dom';
import Assessment from "../components/assessment/Assessment";

const routes = [
    { path: '/', element: <Assessment /> }
];

const AppRoutes = () => {
    const appRoutes = useRoutes(routes)
    return appRoutes;
};

export default AppRoutes;
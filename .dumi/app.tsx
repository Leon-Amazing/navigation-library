// @ts-ignore
import { Navigate } from 'dumi';
import React from 'react';

export const patchClientRoutes = ({ routes }: any) => {
    routes[0].children.unshift({
        id: 'root-redirect',
        path: '/',
        element: <Navigate to="/tool" />,
    });

    return routes;
};

import { CircularProgress } from "@chakra-ui/react";
import React, { Suspense } from "react";
import { Route } from "react-router-dom";
import AuthWrapper from "./AuthWrapper";
import routes from "./routes"; // Route list

const ProtectedRoutes = () => (

    <Suspense fallback={<CircularProgress color="primary" />}>
        {routes.map(({ component: Component, path, exact }) => (
            <Route path={path} key={path}>
                <AuthWrapper>
                    <Component />
                </AuthWrapper>
            </Route>
        ))}
    </Suspense>
);

export default ProtectedRoutes;
